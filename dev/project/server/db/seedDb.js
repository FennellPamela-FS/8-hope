// server/db/seedDb.js

const dbConn = require('./conn');
const seedPrayerWatches = require('./seedPrayerWatches');

const seedDatabase = async () => {
    try {
        await dbConn();
        await seedPrayerWatches();
        console.log('Database seed!');
    } catch (err) {
        console.error(err);
    }
};

seedDatabase()
    .then(() => {
        console.log('Database seed!');
        process.exit();
    })
    .catch((err) => {
        console.error(err);
        process.exit(1); // Exit with an error code of 1 if there's an error seeding the database.
    })