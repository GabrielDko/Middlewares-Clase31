const express = require('express');
const router = express.Router();
const {index,services,design} = require("../controllers/mainController")


router.get("/",index)
router.get("/services",services)
router.get("/services/design",design)

module.exports = router;