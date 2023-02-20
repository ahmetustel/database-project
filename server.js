const MongoClient = require('mongodb').MongoClient;
const app = require('./app');
const URI = "mongodb://localhost:27017";
const PORT = process.env.PORT || 5000;

require('dotenv').config(); // .env dosyasının heryerden kullanılması için

const dbName = 'myproject';

MongoClient.connect(process.env.MONGODB_URI, function(err, client) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected successfully to server");
    // const db = client.db(dbName);


    app.listen(PORT, console.log("Server started on port: ", PORT));
});