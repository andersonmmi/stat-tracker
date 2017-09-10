
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');
const mongoURL = 'mongodb://localhost:27017/snippetsdb';
const app = express();
mongoose.connect(mongoURL);
const chalk = require('chalk');

app.get('/activities', function (req,res){

});

app.post('/activities', function (req,res){

});

app.get('/activities/:id', function (req,res){

});

app.put('/activites/:id', function (req,res){

});

app.delet('/activites/:id', function (req,res){

});

app.post('/activites/:id/stats', function (req,res){

});

app.delete('/stats/:id', function (req,res){

});

app.listen(3000, function() {
   console.log(chalk.yellow.bgBlue.bold('Listening on port 3000'))
});
