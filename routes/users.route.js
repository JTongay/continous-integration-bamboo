'use strict'

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
  res.json([
    {
      id:1,
      name: 'booyah'
    },
    {
      id:2,
      name: 'booyah2'
    }
  ])
})

module.exports = router;
