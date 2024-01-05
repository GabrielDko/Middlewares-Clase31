const express = require('express');
const router = express.Router();
const {index,services,design,admin} = require("../controllers/mainController")
const {body} = require("express-validator");

const validationAdmin = [
    body("user").custom((value, {req})=>{
        let user = req.query.user;
        let admins = ["ana", "greta", "vim", "tim"];
        for (let i = 0; i < admins.length;i++) {
            if(admins[i]==user.toLowerCase()){
                return true
            }

        }
    }).withMessage("No tienes privilegios para ingresar")
]


router.get("/",index)
router.get("/services",services)
router.get("/services/design",design)
router.get("/admin", validationAdmin, admin)
module.exports = router;