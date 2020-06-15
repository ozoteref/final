const response  = require("express");
const fs = require("fs");

    const inicio = fs.readFileSync("./index.html");
    const contacto = fs.readFileSync("./contacto.html");
    const horario = fs.readFileSync("./horario.html");

exports.inicio = (request, response) => {
    response.write(inicio);
}

exports.contacto = (request, response) => {
    response.write(contacto);
}

exports.horario = (request, response) => {
    response.write(horario);
}