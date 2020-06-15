const express = require("express");
const server = express();
const routes = require("./routes/index.js");

server.use("/",routes());

//consulta de documentos en carpeta especificada public
server.use(express.static("./public"));
    
server.listen("3000",()=>{
    console.log("El servidor esta corriendo en el puerto 3000");
})