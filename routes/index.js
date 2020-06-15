const express = require("express");
const routes = express.Router();
const appController = require("../controllers/appController");

module.exports = function(){

    routes.get('/',appController.inicio);
    
    routes.get('/contacto',appController.contacto);
    
    routes.get('/horario',appController.horario);

    return routes;
}