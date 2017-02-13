'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path')

const environment = process.env.NODE_ENV || 'development';
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users.route');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('src'));
// console.log(__dirname);


app.get('/', (req, res, next)=>{
  res.render('index')
})
app.use('/api/users',usersRoutes);

app.listen(port, function () {
  console.log('hello there from port', port);
})

module.exports = app;
