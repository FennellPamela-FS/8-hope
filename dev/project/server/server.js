// Set up a basic Express server
// Backend Server

const http = require('http');
// const app = require('./app/app');
// const port = process.env.PORT || 5000;
// require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config('./env')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())


// get driver connection
const dbo = require('./db/conn')

// app.listen(port, () =>
//     console.log(`Server running on port ${port}`)
// );

// app.listen(port, () => {
//     // connect to database when server starts
//     dbo.connectToServer(function (err) {
//         if (err) console.error(err);
//     })
//     console.log(`Backend is running on port: ${port}`)
// });



// request listener
http.createServer(app).listen(port, () => {
    console.log(`Server running on ${port}`);
});


// // connect to database
// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI);
// if (mongoose) {
//     console.log("Successfully connected to MongoDB.");
// }
