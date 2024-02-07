// communicate with API.Bible
const axios = require('axios');
const apiKey = require('../api/apiKey');
require('dotenv').config();

const options = {
    headers: {
        'api-key': `${apiKey}`
    }
}

const url = process.env.BASE_URL;
const version = process.env.BIBLE_ID;
const hardVerse = 'JHN.3.16';
// const verseId = 'JHN.3.16';
// const verseDayURL = `${url}/${version}/search?query=${verseID}`;

// BASE_URL = 'https://api.scripture.api.bible/v1/bibles'


const verseService = async () => {
    console.log("Bible Service on Backend");
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