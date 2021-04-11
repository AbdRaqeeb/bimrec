import { Injectable, BadRequestException } from '@nestjs/common';
import { ReadStream } from 'fs';
import { PatientsService } from 'src/patients/patients.service';
import { createWriteStream } from 'fs';
import { initializeRekognition, uploadFile, findImageMatch } from './aws/aws';
import { possibleResponse } from './aws/constants';
import { v4 as uuidv4 } from 'uuid';
import { BiometricResult } from './dto/biometric.dto';

@Injectable()
export class BiometricService {
  constructor(private patientService: PatientsService) {
    // initialize aws rekognition
    initializeRekognition();
  }

  async uploadImage(
    patientId: string,
    fileName: string,
    readStream: ReadStream,
  ): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const tempImageLocation = `${patientId}.${fileName
        .split('.')
        .slice(-1)
        .pop()}`;
      readStream
        .pipe(createWriteStream(tempImageLocation))
        .on('finish', () => {
          // upload file to aws
          uploadFile(tempImageLocation, patientId)
            .then(
              (imageUrl) => {
                console.log(
                  'file uploaded to aws s3 and analyzed in aws rekognition',
                );
                console.log(imageUrl);
                this.patientService.setImageUrl(patientId, imageUrl);
                resolve(true);
              },
              (error_type) => {
                console.log('error:' + error_type);
                if (error_type === possibleResponse.INVALID_IMAGE) {
                  resolve(false);
                }
              },
            )
            .catch((e) => {
              console.log(e);
            });
        })
        .on('error', (err) => {
          console.log(process.cwd());
          console.log(err);
          reject(false);
        });
    });
  }

  async findBiometricMatch(
    filename: string,
    readStream: ReadStream,
  ): Promise<BiometricResult[]> {
    const id = uuidv4();
    const tempImageLocation = `${id}.${filename.split('.').slice(-1).pop()}`;
    return new Promise((resolve, reject) => {
      readStream
        .pipe(createWriteStream(tempImageLocation))
        .on('finish', () => {
          // search for image in rekognition
          findImageMatch(tempImageLocation)
            .then((matches) => {
              resolve(matches);
              console.log(matches);
            })
            .catch((err: Error) => {
              reject(err.message);
            });
        })
        .on('error', (e) => {
          console.log('An error occured while uploading image locally');
          reject(e.message);
        });
    });
  }
}
