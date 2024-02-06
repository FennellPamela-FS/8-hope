// communicate with API.Bible
import { Bar } from 'recharts';

const axios = require('axios');
require('dotenv').config();

const options = {
    headers: {
        'x-api-key': process.env.API_KEY,
    }
}

const url = process.env.BASE_URL;
const version = process.env.BIBLE_ID;
const chapter = 'JHN';

// const BibleService = async (book, chapter, verse) => {
//     console.log("Bible Service on Backend");
//     return await axios.get(`${url}/bible/${book}/${chapter}/${verse}`, options);
// }; 

// BASE_URL = 'https://api.scripture.api.bible/v1/bibles'

const getDailyReading = async (date) => {
    console.log("Bible Service on Backend");
    return await axios.get(`${url}/${version}/chapter/${chapter}/verses`, options);
};





module.exports = BibleService;