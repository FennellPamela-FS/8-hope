const axios = require('axios');
require('dotenv').config();

const verseDayUrl = process.env.API_URL;
const verseDayService = async () => {
    console.log('REAL verse of the Day data');
    return await axios.get(`${verseDayUrl}`);
};

// const verseDayServiceById = async (id) => {
//     console.log('REAL testimonial data by id');
//     return await axios.get(`${process.env.verseDayUrl}/${id}`);
// };

module.exports = {
    verseDayService,
    // verseDayServiceById
};