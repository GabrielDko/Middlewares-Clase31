const {validationResult}=require("express-validator");

const mainController = {
    index: (req,res)=>{
        res.render("index")
    },
    services: (req,res)=>{
        res.send("Servicios....servicios")
    },
    design:(req,res)=>{
        res.send("Diseños!")
    },
    admin:(req,res)=>{
        let errors = validationResult(req);
        console.log(req.body);
        if(errors.isEmpty()){
            res.send(`Hola Admin: ${req.query.user}`)
        }else{
            res.send(errors.mapped().user.msg)
            console.log(errors.mapped());
        }
    }
}

module.exports = mainController;