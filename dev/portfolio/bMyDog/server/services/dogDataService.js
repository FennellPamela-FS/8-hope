const axios = require("axios");
require('dotenv').config();

const options = {
    headers: {
        'x-api-key': process.env.DOG_API_KEY,
    }
};

const url = process.env.dogDataURL;
// const url = "https://api.thedogapi.com/v1/breeds";
const limit = `?` + "limit" + `=`;
const ln = 21;

const sq = "search" + `?` + "q" + `=`;
// console.log(sq);

// console.log(`${url}${limit}${ln}`)

const dogDataService = async () => {
    console.log('Dog Data Service on Backend');
    return await axios.get(`${url}${limit}${ln}`, options);
    // return await axios.get(`${url}${limit}${ln}`, options);

};

const dogDataServiceByName = async (name) => {
    console.log('Dog Data Service By ID on Backend');
    return await axios.get(`${url}/${sq}${name}`, options);
};
const dogDataServiceById = async (id) => {
    console.log('Dog Data Service By ID on Backend');
    return await axios.get(`${url}/${sq}${id}`, options);
};


module.exports = {
    dogDataService,
    dogDataServiceById,
    dogDataServiceByName
};