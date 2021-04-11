import puppeteer from 'puppeteer';
import { promisify } from 'util'
import fs from 'fs';
import { Hospital } from './interaces';
import { config } from './config';

const writeFileAsync = promisify(fs.writeFile);
const readFileAsync = promisify(fs.readFile);

const startingPageInput = process.argv[2]? process.argv[2].trim() : '0';
const fromPage = Number.isNaN(parseInt(startingPageInput)) ? 0 : parseInt(startingPageInput);

const getPageData = async (page: puppeteer.Page, pageNumber: number): Promise<Hospital[]> => {
    if (pageNumber == 1) {
        await page.goto(config.WEBSITE_URL, { waitUntil: 'networkidle0' });
    }
    else {
        await page.goto(config.WEBSITE_URL + `?page=${pageNumber}`, { waitUntil: 'networkidle0' });
    }

    // wait till body of website is loaded
    await page.waitForSelector('body');

    const hospitals = await page.evaluate(() => {
        let allHospitals = document.body.querySelectorAll('tbody tr');
        const all = Array.from(allHospitals).map((hospital, index) => {
            const columns = hospital.querySelectorAll('td');
            const hospitalData: Hospital = {}
            columns.forEach((columnContent, index) => {
                if (index == 0) hospitalData.state = columnContent.innerText;
                if (index == 1) hospitalData.lga = columnContent.innerText;
                if (index == 2) hospitalData.ward = columnContent.innerText;
                if (index == 3) hospitalData.facilityUid = parseInt(columnContent.innerText);
                if (index == 4) hospitalData.facilityCode = columnContent.innerText;
                if (index == 5) hospitalData.facilityName = columnContent.innerText;
                if (index == 6) hospitalData.facilityLevel = columnContent.innerText;
                if (index == 7) hospitalData.ownership = columnContent.innerText;
                if (index == 8) {
                    // get, latitude, longitude
                    const button = columnContent.querySelector('a button')
                    const latitude = button?.getAttribute('data-latitude');
                    const longitude = button?.getAttribute('data-longitude');

                    const latitudeValue = parseFloat(latitude ? latitude : "-999999");
                    const longitudeValue = parseFloat(longitude ? longitude : "-999999");

                    hospitalData.latitude = latitudeValue < -10000 ? null : latitudeValue;
                    hospitalData.longitude = longitudeValue < -10000 ? null : longitudeValue;

                    // get phone number and email
                    let phoneNumber = button?.getAttribute('data-phone_number'); 
                    hospitalData.phoneNumber = phoneNumber? phoneNumber : '';

                    let email = button?.getAttribute('data-email_address');
                    hospitalData.email = email? email: '';
                }
                
            })

            return hospitalData;
        })
        return all;
    })

    return hospitals;
}

// initialize puppeteer
puppeteer.launch().then(async browser => {
    console.log("start");
    // open a new page and navigate to the given website
    const page = await browser.newPage();
    const totalNumberOfPages = 2019 - fromPage +1
    let dummyArray = Array(totalNumberOfPages)
    dummyArray = dummyArray.fill(0).map((_, index) => {
        return index + fromPage;
    });

    dummyArray.reduce(async (previousPromise, pageNumber: number) => {
        const wait = await previousPromise

        const hospitals = await getPageData(page, pageNumber)
        // send to storage
        await send(hospitals).catch((reason) => {
            console.log(reason)
        })
        console.log(hospitals);
        console.log("page: " + pageNumber);
        console.log("end");

        if (pageNumber == 2019) { // if it's the last page, close browser
            console.log("Cheers!!!...done reading data");
            await browser.close()
        }
        return true
    }, Promise.resolve())

}
);

// this function should implement logic for sending data to storage
const send = async (hospitals: Hospital[]) => {
    try {
        if (fs.existsSync(config.JSON_RESULT_PATH)) {
            const jsonString = (await readFileAsync(config.JSON_RESULT_PATH)).toString();
            let savedHospitals: Hospital[] = JSON.parse(jsonString);

            // update saved hospitals
            savedHospitals = savedHospitals.concat(hospitals);
            await writeFileAsync(config.JSON_RESULT_PATH, JSON.stringify(savedHospitals));
        }
        else {
            // create new list of hospitals
            await writeFileAsync(config.JSON_RESULT_PATH, JSON.stringify(hospitals));
        }
    }
    catch (e) {
        console.log(e);
    }
}
