const express = require('express');
const Usuario = require("../models/usuario");
const router = express.Router();

//http://localhost:8000/api/registrar_usuario
/* POST = Crear nuevos registros*/
router.post("/registrar_usuario",(req,res)=>{
    let body = req.body;
    let nuevo_usuario = new Usuario({
        nombre: body.nombre,
        apellidos: body.apellidos,
        numero: body.numero,
        cedula:body.cedula,
        contrasenna:body.contrasenna,
        correo:body.correo,
        direccion:body.direccion
    });
    nuevo_usuario.save((error,usuarioDB)=>{
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
                usuarioDB
            });
        }  
    });
});


/* router.get("/buscar_persona_correo",(req,res)=>{
    let correo = req.query.correo;
    Usuario.find({correo: correo},(error,usuarioDB)=>{
        if (error) {
            res.status(200).json({
                resultado:false,    
                msj:"Ocurrio el siguiente error",
                error
            });
        }else{
            if(usuarioDB==""){
                res.status(200).json({
                    resultado:true,
                    msj: "Persona no registrada",
                });  
            }
            else{
                res.status(200).json({
                    resultado:true,
                    msj: "Persona encontrada",
                    Usuario:usuarioDB
                });
            }
        }
    });
}); */

module.exports = router;