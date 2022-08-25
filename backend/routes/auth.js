
const express = require('express');
const usuario = require("../models/usuario");
const router = express.Router();

router.post("/validar_credenciales",(req,res)=>{
    usuario.findOne({correo:req.body.correo
    }).then(
        function(usuario) {
            if(usuario){
                if(usuario.contrasenna==req.body.contrasenna){
                    res.json({
                        resultado:true,
                        usuario:usuario
                    });
                }else{
                    res.json({
                        resultado:false,
                        msg:"Contraseña incorrecta"
                    });
                }
            }else{
                res.json({
                    resultado:false,
                    msg:"El usuario no esta registrado"
                }); 
            }
        }
    )
})

module.exports=router