const express = require('express');
const router = express.Router();
const {index, test} = require("../controllers/mainController")


router.get("/",index)

module.exports = router;