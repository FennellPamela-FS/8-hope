// Backend
// Connecting to the database
//

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
mongoose.connect(`${uri}`)
    .then(() => {
        console.log("Successfully connected to MongoDB.");
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err)
    })
