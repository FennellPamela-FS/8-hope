const axios = require('axios');
const apiKey = require('../api/apiKey');
require('dotenv').config();
// require("dotenv").config('./env')


const BASE_URL = process.env.BASE_URL;
const version = process.env.BIBLE_ID;
const BIBLE_ID = process.env.BIBLE_ID;
const vodVERSES = [
    'JER.29.11',
    'PSA.23',
    '1COR.4.4-8',
    'PHP.4.13',
    'JHN.3.16',
    'ROM.8.28',
    'ISA.41.10',
    'PSA.46.1',
    'GAL.5.22-23',
    'HEB.11.1',
    '2TI.1.7',
    '1COR.10.13',
    'PRO.22.6',
    'ISA.40.31',
    'JOS.1.9',
    'HEB.12.2',
    'MAT.11.28',
    'ROM.10.9-10',
    'PHP.2.3-4',
    'MAT.5.43-44',
];


const verseDayService = async (verseID) => {
    const verseDayURL = `${process.env.BASE_URL}/${BIBLE_ID}/search?query=${verseID}`;
    try {
        const response = await axios.get(`${verseDayURL}`, {
            headers: {
                'api-key': `${apiKey}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }

    console.log('REAL verse of the Day data ' + `${verseDayURL}`);
    // return await axios.get(`${verseDayURL}`);
    return await axios.get(`${verseID}`);
}

// async function verseDayService() {
//     const verseIndex = Math.floor(Math.random() * vodVERSES.length);
//     const verseID = vodVERSES[verseIndex];
//     const verseDayURL = `${process.env.BASE_URL}/${BIBLE_ID}/search?query=${verseID}`;
//     // const verseDayURL = `${process.env.BASE_URL}/${BIBLE_ID}/verses/${verseID}`;

//     try {
//         const response = await axios.get(`${verseDayURL}`, {
//             headers: {
//                 'Authorization': `Bearer ${apiKey}`
//             }
//         });

//         const verseContent = response.data.data[0].text;
//         const verseRef = response.data.data[0].reference;

//         document.querySelector('#verse-content').innerText = verseContent;
//         document.querySelector('#verse').innerText = verseRef;
//     } catch (error) {
//         console.error(error);
//     }
//     console.log('REAL verse of the Day data ' + `${verseDayURL}`);
//     // return await axios.get(`${verseDayURL}`);
//     return await axios.get(`${verseID}`);
// }

// // verseDayService();

// // Assuming you have a function getResults that fetches data from the API
// async function getResults(verseID) {
//     try {
//         const response = await axios.get(`${verseDayURL}`, {
//             headers: {
//                 'api-key': process.env.API_KEY
//             }
//         });
//         const { data, meta } = response.data;
//         // Do something with data and meta...
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }



// const verseDayUrl = process.env.BASE_URL;
// const verseDayService = async (reference) => {
//     try {
//         const response = await axios.get(`${verseDayUrl}/verses/${reference}`, {
//             headers: {
//                 'Authorization': `Bearer ${apiKey}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }

//     console.log('REAL verse of the Day data');
//     return await axios.get(`${verseDayUrl}`);
// };


// const API_URL = process.env.BASE_URL;

// async function fetchVesre(reference) {
//     try {
//         const response = await axios.get(`${API_URL}/verses/${reference}`, {
//             headers: {
//                 'Authorization': `Bearer ${apiKey}`
//             }
//         });
//         return response.data;
//     } catch (error) {
//         console.error(error);
//     }
// }


// const verseDayServiceById = async (id) => {
//     console.log('REAL testimonial data by id');
//     return await axios.get(`${process.env.verseDayUrl}/${id}`);
// };

module.exports = {
    verseDayService,
    // getResults,
    // fetchRandomVerse
    // verseDayServiceById
};