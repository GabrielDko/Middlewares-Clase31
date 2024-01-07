const express = require('express');
const router = express.Router();
const {index,services,design,admin} = require("../controllers/mainController")
const {query} = require("express-validator");

const validationAdmin = [
    query("user").custom((value, {req})=>{
        let admins = ["ana", "greta", "vim", "tim"];
        for (let i = 0; i < admins.length;i++) {
            if(admins[i]==value.toLowerCase()){
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