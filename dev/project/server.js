// Set up a basic Express server

const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config('.env')
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.listen(port, () =>
    console.log(`Server running on port ${port}`)
);

// connect to database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
if (mongoose) {
    console.log("Successfully connected to MongoDB.");
}
