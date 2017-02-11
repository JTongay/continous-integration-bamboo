'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const environment = process.env.NODE_ENV || 'development';
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users.route')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use('/',usersRoutes);

app.listen(port, function () {
  console.log('hello there from port', port);
})

module.exports = app;
