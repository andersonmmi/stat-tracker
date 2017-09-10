
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const mongodb = require('mongodb');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const mongoURL = 'mongodb://localhost:27017/snippetsdb';
const app = express();
mongoose.connect(mongoURL);
const chalk = require('chalk');


app.listen(3000, function() {
   console.log(chalk.yellow.bgBlue.bold('Listening on port 3000'))
});
