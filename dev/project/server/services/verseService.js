// communicate with API.Bible
const axios = require('axios');
const apiKey = require('../api/apiKey');
const cors = require('cors');

const express = require('express');

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());



const url = process.env.BASE_URL;
const version = process.env.BIBLE_ID;
const hardVerse = 'JHN.3.16';

const options = {
    method: 'GET',
    url: url,
    headers: {
        'api-key': apiKey,
    }
}

// const verseId = 'JHN.3.16';
// const verseDayURL = `${url}/${version}/search?query=${verseID}`;

// BASE_URL = 'https://api.scripture.api.bible/v1/bibles'


const verseService = async () => {
    console.log("Bible Verse Service on Backend");
    // return await axios.get(`${url}/${version}/verses/${hardVerse}`, options);
    return await axios.get(`${url}/${version}/verses/${hardVerse}`, options);
}


const verseServiceById = async (verseId) => {
    const verseDayURL = `${url}/${version}/search?query=${verseId}`;

    console.log("Bible Service on Backend");
    return await axios.get(`${verseDayURL}`, options);
}



module.exports = {
    verseService,
    verseServiceById
};