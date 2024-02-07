const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// const userSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     }
// });

// Define the Reading Schema 
const readingSchema = new Schema({
    reference: String,  // e.g. 'John 3:16'
    text: String,       // The actual text of the reading
    date: Date          // the date the reading was fetched
});

// Compile the schema into a model
const Reading = mongoose.model('Reading', readingSchema);

module.exports = Reading;

// module.exports = mongoose.model('User', userSchema);

