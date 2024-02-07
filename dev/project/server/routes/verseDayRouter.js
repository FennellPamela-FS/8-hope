const express = require("express");

// verseDayRoutes is an instance of the express router
// we user it to define our routes
// the router will be added as a middleware and will take control of requests starting with the path /verseDay
const {
    verseDayService,
    // verseDayServiceById,
    // verseDayServiceByName
} = require('../services/verseDayService');
const verseDayRouter = express.Router();

const cors = require('cors');

verseDayRouter.use(cors());
verseDayRouter.use(express.json());

verseDayRouter.get('/', (req, res, next) => {
    verseDayService()
        .then(result => {
            res.status(200).json(result.data);
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                    method: req.method
                },
            });
        });
    console.log('Inside Verse of the Day Router')

});

verseDayRouter.get('/:verseId', (req, res, next) => {
    const verseId = req.params.verseId;
    verseDayService(verseId)
        .then(result => {
            res.status(200).json(result.data);
        })
        .catch(err => {
            res.status(500).json({
                error: {
                    message: err.message,
                    method: req.method
                },
            });
        });
    console.log('Inside Verse of the Day Router by VerseId')
    console.log(verseId);

})

// verseDayRouter.get('/:name', (req, res, next) => {
//     verseDayServiceByName(req.params.name)
//         .then(result => {
//             res.status(200).json({
//                 result: result.data
//             });
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: {
//                     message: err.message
//                 },
//             });
//         });
// });

// verseDayRouter.get('/vodr', (req, res, next) => {
//     getResults()
//         .then(result => {
//             res.status(200).json({
//                 result: result.data
//             });
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: {
//                     message: err.message
//                 },
//             });
//         });
// });

// verseDayRouter.get('/:id', (req, res, next) => {
//     verseDayServiceById(req.params.id)
//         .then(result => {
//             res.status(200).json({
//                 result: result.data
//             });
//         })
//         .catch(err => {
//             res.status(500).json({
//                 error: {
//                     message: err.message
//                 },
//             });
//         });
// });

module.exports = verseDayRouter;