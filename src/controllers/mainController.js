

const mainController = {
    index: (req,res)=>{
        res.render("index")
    },
    services: (req,res)=>{
        res.send("Servicios....servicios")
    },
    design:(req,res)=>{
        res.send("Diseños!")
    }
}

module.exports = mainController;