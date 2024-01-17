// Express Router
// get data from data service

const express = require('express');
const saveUser = require('../db/db');
const userRouter = express.Router();
const User = require('../model/User');
const mongoose = require('mongoose');

// posting to a database
// fullName and email
userRouter.post('/', (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;

    const newUser = new User({
        _id: mongoose.Types.ObjectId(),
        fullName: fullName,
        email: email,
    });

    saveUser(newUser)
        .then((result) => {
            res.status(201).json({
                message: 'User Saved',
                result: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message,
                status: err.status,
            });
        });

    userRouter.get('/', (req, res) => {
        User.find({})
            .select('fullName email')
            .then((result) => {
                res.status(200).json({
                    message: 'User Retrieved: ' + result,
                    // result: result,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    error: {
                        message: err.message,
                        status: err.status,
                    }
                });

            })
    });
});
module.exports = userRouter;