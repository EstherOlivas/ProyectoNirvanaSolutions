const express = require('express');
const Permiso = require("../models/permiso");
const router = express.Router();

router.post("/permisos/registrar_permiso",(req,res)=>{
    let body = req.body;
    let nuevo_permiso = new Permiso({
        nombre: body.nombre
    });
    nuevo_permiso.save((error,permisoDB)=>{
        if (error) {
            res.status(200).json({
                resultado:false,
                msj: "No se pudo hacer el registro",
                error
            });
            console.log(error);
        }
        else{
            res.status(200).json({
                resultado:true,
                msj: "Registro exitoso",
                permisoDB
            });
        }  
    });
});

//localhost:3000/api/listar
/* GET = recupera informacion*/
router.get("/permisos",(req,res)=>{
    Permiso.find((error,lista)=>{
        if(error){
            res.status(200).json({
                resultado:false,
                msj: "No se pudo listar los permisos",
                error
            });
        }else{
            res.status(200).json({
                resultado:true,
                msj: "Listado exitoso",
                lista
            });
        }
    });
});

module.exports=router
