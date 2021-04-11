import * as AWS from 'aws-sdk';
import * as fs from 'fs';
import { BiometricResult } from '../dto/biometric.dto';
import { possibleResponse } from './constants';

const ID = process.env.AWS_ID;
const Key = process.env.AWS_SECRET_KEY;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

AWS.config.update({
  accessKeyId: ID,
  secretAccessKey: Key,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();
const rekognition = new AWS.Rekognition();
const collectionName = process.env.AWS_REKOGNITION_COLLECTION_ID;

export const uploadFile = async (
  filename: string,
  externalId: string,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filename);
    const params: AWS.S3.PutObjectRequest = {
      Bucket: BUCKET_NAME,
      Key: filename,
      Body: fileContent,
    };
    s3.upload(params, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('successfully saved');
      }
    });

    // after sending to aws, delete file from local storage
    fs.unlinkSync(filename);

    // add image to rekognition collection
    rekognition.indexFaces(
      {
        CollectionId: collectionName,
        ExternalImageId: externalId,
        Image: {
          S3Object: {
            Bucket: BUCKET_NAME,
            Name: filename,
          },
        },
      },
      (err, data) => {
        if (err) {
          console.log(err);
          return reject(possibleResponse.AWS_REKOGNITION_ERROR);
        } else {
          if (!(data.FaceRecords.length == 1)) {
            console.log('There should be exactly one face');
            return reject(possibleResponse.INVALID_IMAGE);
          } else {
            console.log('uploaded to rekognition collection');

            // return file location on aws
            const fileLocation = `https://${BUCKET_NAME}.s3.amazonaws.com/${filename}`;
            return resolve(fileLocation);
          }
        }
      },
    );
  });
};

export const findImageMatch = async (
  filename: string,
): Promise<BiometricResult[]> => {
  return new Promise((resolve, reject) => {
    // get file from local storage
    const image = fs.readFileSync(filename);

    rekognition.searchFacesByImage(
      {
        CollectionId: collectionName,
        FaceMatchThreshold: 95,
        Image: {
          Bytes: image,
        },
        MaxFaces: 3,
      },
      (err, data) => {
        // done searching for image? delete the image locally
        fs.unlinkSync(filename);

        if (err) {
          return reject(err);
        }

        // check that there is at least one match
        if (
          data.FaceMatches &&
          data.FaceMatches.length &&
          data.FaceMatches[0].Face
        ) {
          // arrange matches in decreasing order of percentage match
          const sorted = data.FaceMatches.sort(
            (a, b) => b.Face.Confidence - a.Face.Confidence,
          );
          const allMatch = sorted.map(
            (match): BiometricResult => {
              return {
                patientId: match.Face.ExternalImageId,
                percentageMatch: match.Similarity,
              };
            },
          );
          return resolve(allMatch);
        }
        reject(new Error('NOT_RECOGNIZED'));
      },
    );
  });
};

const createCollection = (
  collectionName: string,
): Promise<AWS.Rekognition.CreateCollectionResponse> => {
  return new Promise((resolve, reject) => {
    rekognition.createCollection(
      { CollectionId: collectionName },
      (err, data) => {
        if (err) {
          return reject(err);
        }
        return resolve(data);
      },
    );
  });
};

const listCollections = (): Promise<AWS.Rekognition.ListCollectionsResponse> => {
  return new Promise((resolve, reject) => {
    rekognition.listCollections((err, collections) => {
      if (err) {
        return reject(err);
      }

      return resolve(collections);
    });
  });
};

export const initializeRekognition = async () => {
  // confirm that the collection actually exist on aws, if it doesn't, create a new collection
  const collections = await listCollections();
  const collectionIds =
    collections.CollectionIds.length > 0 ? collections.CollectionIds : [];
  const collectionExist = collectionIds.find((id) => id === collectionName);

  if (!collectionExist) {
    const response = await createCollection(collectionName);
    console.log(response);
  }
};
