const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            if (db) {
                _db = db.db("employees");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};

// mongoose.connect(process.env.mongodbURL, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
//     if (err) {
//         console.error("Error: ", err.message);
//     }
//     else {
//         console.log("MongoDB is up and running");
//     }
// });