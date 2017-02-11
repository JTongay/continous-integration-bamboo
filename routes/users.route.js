'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  res.send('booyah')
})

module.exports = router;
