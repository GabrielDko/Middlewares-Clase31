const fs = require("fs")

function logMiddleware(req, res, next){
    fs.appendFileSync("../logs/userLogs.txt", `El usuario ingresó a la ruta ${req.url}`);
    next()
}

module.exports = logMiddleware ;