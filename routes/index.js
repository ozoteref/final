const express = require("express");
const routes = express.Router();
const appController = require("../controllers/appController");

module.exports = function(){

    routes.get('/',appController.acceso);
    
    routes.get('/registro',appController.registro);
    
    routes.get('/conoceme',appController.conoceme);

    return routes;
}