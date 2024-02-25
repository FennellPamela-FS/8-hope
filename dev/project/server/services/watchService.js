// communicate with API.Bible
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const dbConn = require('../db/conn');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 8000;

const apiKey = require('../api/apiKey');
const { pwHandler } = require('../api/prayerWatches');


const url = process.env.BASE_URL;
const version = process.env.BIBLE_ID;
const hardVerse = 'JHN.3.16';
// const verseId = 'JHN.3.16';
// const verseDayURL = `${url}/${version}/search?query=${verseID}`;

// BASE_URL = 'https://api.scripture.api.bible/v1/bibles'

const watchURL = `https://localhost:${port}/api/prayerWatches`

const options = {
    method: 'GET',
    // url: `https://localhost:${port}/api/prayerWatches`,
    url: `${watchURL}`,
    // headers: {
    //     'api-key': `${apiKey}`
    // }
}

const watchService = async (req, res) => {
    console.log("Watch Service on Backend");
    pwHandler();
    // return await axios.get(`${watchURL}`, options);


}

// const verseService = async () => {
//     console.log("Bible Service on Backend");
//     return await axios.get(`${url}/${version}/verses/${hardVerse}`, options);
// }


// const verseServiceById = async (verseId) => {
//     const verseDayURL = `${url}/${version}/search?query=${verseId}`;

//     console.log("Bible Service on Backend");
//     return await axios.get(`${verseDayURL}`, options);
// }

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});

// const watchServiceById = async (watchId) => { 
//     console.log("Bible Service on Backend");
//     return await axios.get(`${watchURL}/${watchId}`, options);
// }


module.exports = {
    watchService,
    // watchServiceById
};