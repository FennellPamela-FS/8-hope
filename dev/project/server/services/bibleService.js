// communicate with API.Bible

const axios = require('axios');
const apiKey = require('../api/apiKey');
require('dotenv').config();



const url = process.env.BASE_URL;
const version = process.env.BIBLE_ID;
const verse = 'JHN.3.16';

const options = {
    headers: {
        'api-key': `${apiKey}`
    }
}


// BASE_URL = 'https://api.scripture.api.bible/v1/bibles'


const bibleService = async () => {
    console.log("Bible Service on Backend");
    return await axios.get(`${url}/${version}/verses/${verse}`, options);
}


module.exports = {
    bibleService
};