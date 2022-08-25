
const express = require('express');
const Usuario = require("../models/usuario");
const router = express.Router();

router.post("/validar_credenciales",(req,res)=>{
    Usuario.findOne({cedula:req.body.cedula
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
                    Swal.fire({
                        title:"Datos incorrectos",
                        text:"La contraseña incorrecta",
                        icon:"warning"
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