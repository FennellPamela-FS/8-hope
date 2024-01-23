// Set up a basic Express server
// Backend Server

const http = require('http');
// const app = require('./app/app');
// const port = process.env.PORT || 5000;
// require('dotenv').config();

const express = require('express');
const cors = require('cors');
require("dotenv").config('./env')
const port = process.env.PORT || 5000;

// import routes
const verseDayRouter = require('./routes/verseDayRouter');


const app = express();

app.use(cors())
app.use(express.json())
// app.use(require('./routes/verseDayRouter'))


// Router: verseDay 
app.use('/vod', verseDayRouter);

// get driver connection
const dbo = require('./db/conn')

// request listener
http.createServer(app).listen(port, () => {
    console.log(`Server running on ${port}`);
});
