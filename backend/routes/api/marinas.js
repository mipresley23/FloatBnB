const express = require('express');
const asyncHandler = require('express-async-handler');
const {Marina} = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async(req, res) => {
  const marinas = await Marina.findAll();
  return res.json(marinas)

}))

module.exports = router
