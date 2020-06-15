const response  = require("express");
const fs = require("fs");

    const acceso = fs.readFileSync("./acceso.html");
    const registro = fs.readFileSync("./registro.html");
    const conoceme = fs.readFileSync("./conoceme.html");

exports.acceso = (request, response) => {
    response.write(acceso);
}

exports.registro = (request, response) => {
    response.write(registro);
}

exports.conoceme = (request, response) => {
    response.write(conoceme);
}