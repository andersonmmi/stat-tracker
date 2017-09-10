
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const mongoURL = 'mongodb://localhost:27017/statsDB';
const app = express();
mongoose.connect(mongoURL);
const chalk = require('chalk');
const Activities = require('./api/models/activityModel');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/statsRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(3000, function() {
   console.log(chalk.yellow.bgBlue.bold('Listening on port 3000'))
});

// Controllers, Models, Routes structure learned from
// https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd
