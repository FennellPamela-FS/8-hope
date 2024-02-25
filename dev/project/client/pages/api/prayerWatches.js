// pages/api/prayerWatches.js
import dbConn from '../../../server/db/conn';
import PrayerWatch from '../../../server/db/models/PrayerWatch';

const prayerWatchHandler = async (req, res) => {
    try {
        await dbConn(); // Ensure the database connection is established

        const prayerWatches = await PrayerWatch.find({}); // Fetch all prayer watches from the database
        console.log(prayerWatches);
        res.status(200).json({ success: true, data: prayerWatches });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export default prayerWatchHandler;
