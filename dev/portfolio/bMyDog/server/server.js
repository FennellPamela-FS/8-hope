// Backend Server

const http = require('http');
const app = require('./app/app');
const port = process.env.PORT || 5000;
require('dotenv').config();

// request listener
http.createServer(app).listen(port, () => {
    console.log(`Server running on ${port}`);
});



// // Backend Server
// const express = require("express");
// const app = express();
// const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
// app.use(cors());
// app.use(express.json());
// app.use(require("./routes/record"));
// // get driver connection
// const dbo = require("./db/conn");

// app.listen(port, () => {
//     // perform a database connection when server starts
//     dbo.connectToServer(function (err) {
//         if (err) console.error(err);

//     });
//     console.log(`Server is running on port: ${port}`);
// });


