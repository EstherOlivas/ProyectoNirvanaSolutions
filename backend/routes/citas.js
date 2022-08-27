const express = require('express');
const Cita = require("../models/cita");
const router = express.Router();

router.post("/citas/registrar_citas",(req,res)=>{
    let body = req.body;
    let nuevo_cita = new Cita({
        dia: body.dia,
        hora:body.hora,
        doctor:body.doctor,
        descripcion:body.descripcion
    });
    nuevo_cita.save((error,citaDB)=>{
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
                citaDB
            });
        }  
    });
});
router.get("/citas",(req,res)=>{
    Cita.find((error,lista)=>{
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
