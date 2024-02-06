const express = require("express");
const {
    verseService,
    // verseDayServiceById,
    // verseDayServiceByName
} = require('../services/verseService');
const verseRouter = express.Router();

verseRouter.use(express.json());

verseRouter.get('/', (req, res, next) => {
    verseService()
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

})

// app.get('/verse', async (req, res) => {
//     try {
//         const verseID = req.query.verseID;
//         const response = await axios.get(`${process.env.BASE_URL}/${process.env.BIBLE_ID}/search?query=${verseID}`, {
//             headers: {
//                 'api-key': process.env.API_KEY
//             }
//         });
//         const { data, meta } = response.data;
//         res.json({ data, meta });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred while fetching the verse.' });
//     }

// })

module.exports = verseRouter;