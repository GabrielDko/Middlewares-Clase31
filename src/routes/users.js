const express = require("express");
const router = express.Router();

const {login} = require("../controllers/userController")

router.get("/login", login)


module.exports = router;