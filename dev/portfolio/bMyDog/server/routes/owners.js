const express = require("express");

// ownerRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const ownerRoutes = express.Router();

// This will help us connect to the database
// const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
// const ObjectId = require("mongodb").ObjectId;

// const express = require('express');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const router = express.Router();

// MongoDB Model
const User = require('../api/models/UserSchema');

// This section will help you get a list of all the records.
// const user = await User.findOne({ email: req.body.email });

// Get All Posts for specific user - Read
ownerRoutes.get('/users', async (req, res) => {
    try {
        const users = await User.findOne({ email: req.body.email });
        console.log(users)
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
    // const users = await User.find({ email: req.body.email });
    // users.then(result => {
    //     res.status(200).json(result.data);
    // })
    //     .catch(err => {
    //         res.status(500).json({
    //             error: {
    //                 message: err.message,
    //                 method: req.method
    //             },
    //         });
    //     });

});

// ownerRoutes.route("/users").get(function (req, res) {
//     let db_connect = dbo.getDb("employees");
//     db_connect
//         .collection("records")
//         .find({})
//         .toArray(function (err, result) {
//             if (err) throw err;
//             res.json(result);
//         });
// });

// This section will help you get a single record by id
// ownerRoutes.route("/record/:id").get(function (req, res) {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     db_connect
//         .collection("records")
//         .findOne(myquery, function (err, result) {
//             if (err) throw err;
//             res.json(result);
//         });
// });

// This section will help you create a new record.
// ownerRoutes.route("/record/add").post(function (req, response) {
//     let db_connect = dbo.getDb();
//     let myobj = {
//         name: req.body.name,
//         position: req.body.position,
//         level: req.body.level,
//     };
//     db_connect.collection("records").insertOne(myobj, function (err, res) {
//         if (err) throw err;
//         response.json(res);
//     });
// });

// This section will help you update a record by id.
// ownerRoutes.route("/update/:id").post(function (req, response) {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     let newvalues = {
//         $set: {
//             name: req.body.name,
//             position: req.body.position,
//             level: req.body.level,
//         },
//     };
//     db_connect
//         .collection("records")
//         .updateOne(myquery, newvalues, function (err, res) {
//             if (err) throw err;
//             console.log("1 document updated");
//             response.json(res);
//         });
// });

// This section will help you delete a record
// ownerRoutes.route("/:id").delete((req, response) => {
//     let db_connect = dbo.getDb();
//     let myquery = { _id: ObjectId(req.params.id) };
//     db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//         if (err) throw err;
//         console.log("1 document deleted");
//         response.json(obj);
//     });
// });

module.exports = ownerRoutes;