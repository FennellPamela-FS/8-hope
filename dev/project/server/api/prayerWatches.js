// api/prayerWatches.js (on the server)

// This file will be used to handle 
// requests made from the client side 
// to the Node.js server.

const axios = require('axios');
const dbConn = require('../db/conn');
const { PrayerWatch } = require('../db/models/PrayerWatch');

const handler = async (req, res) => {   // returns a Promise
    try {
        await dbConn.sync();    //confirm db connection

        const prayerWatches = await PrayerWatch.find({});   // fetches all prayer watches from the database
        res.status(200).json({ success: true, data: prayerWatches });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    handler,
}