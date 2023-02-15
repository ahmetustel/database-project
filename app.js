const express = require('express');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/route');
const path = require('path');// to set up template engine folder

require('dotenv').config(); // .env dosyasının heryerden kullanılması için

const app = express();

//Json file dosyaları için
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// set up template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// static files
app.use(express.static('public'));

/* This is the root route. It is used to check if the server is running. */
app.get("/", (req, res) => {
    res.status(200).json({ alive: "True" });
  });

/* Telling the server to use the routes in the UserRoutes file. */
app.use("/", UserRoutes);

module.exports = app;