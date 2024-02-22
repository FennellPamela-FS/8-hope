// models/PrayerWatches.js (on the server)
const mongoose = require('mongoose');

const prayerWatchSchema = new mongoose.Schema({
    title: String,
    timeRange: String,
    description: String,
    scriptureReference: String,
    jewishAlternative: String,
    romanAlternative: String,
    learnMore: String,
    link: String,
});

module.exports = mongoose.model('PrayerWatch', prayerWatchSchema);
