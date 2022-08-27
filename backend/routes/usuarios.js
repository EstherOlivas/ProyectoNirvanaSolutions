const express = require('express');
const Usuario = require("../models/usuario");
const Cita = require("../models/cita");
const Rol = require('../models/rol');
const router = express.Router();

//http://localhost:8000/api/registrar_usuario
/* POST = Crear nuevos registros*/
router.post("/registrar_usuario", async(req,res)=>{
    let body = req.body;
    const rol = await Rol.findOne({ nombre: body.rol })
    let nuevo_usuario = new Usuario({
        nombre: body.nombre,
        apellidos: body.apellidos,
        numero: body.numero,
        cedula:body.cedula,
        contrasenna:body.contrasenna,
        correo:body.correo,
        direccion:body.direccion,
        rol:rol
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


router.get("/buscar_persona_correo",(req,res)=>{
    let correo = req.query.correo;
    Usuario.find({correo:correo},(error,usuarioDB)=>{
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
});

router.put("/modificar",(req,res)=>{
    let body = req.body;
    Usuario.updateOne({_id:body._id},{$set:req.body},function(error,info){
        if (error) {
            res.status(200).json({
                resultado:false,
                msj: "No se pudo actualizar la persona",
                error
            });
        }else {
            res.status(200).json({
                resultado:true,
                msj: "Actualización exitosa",
                info
            });  
        }
    });
});

/* ruta para agregar mascotas */
router.post('/registrar_mascota', (req, res) => {
    if (req.body._id) {
        Usuario.updateOne({ _id: req.body._id }, {
                $push: {
                    'mascotas': {
                        nombreMascota: req.body.nombreMascota,
                        raza: req.body.raza,
                        nacimiento: req.body.nacimiento

                    }
                }
            },
           (error) => {
                if (error) {
                    return res.status(200).json({
                        resultado: false,
                        msj: 'No se pudo agregar la mascota',
                        error
                    });
                } else {
                    return res.status(200).json({
                        resultado: true,
                        msj: 'Se agregó correctamente la mascota'
                    });
                }
            }
        )
    } else {
        return res.status(200).json({
            resultado: false,
            msj: 'No se pudo agregar la mascota, por favor verifique que el _id sea correcto'
        });
    }
});


router.post("/usuarios/insertar_cita", async (req, res) => {
    let body = req.body;
    let error;
    const cita = await Cita.findOne({nombre:body.nombre});
    await Usuario.updateOne({_id:body._id},{
        $push:{
            "citas": cita
        }
    })
    if(error){
        return res.json({
            resultado:false,
            error
        })
    }else{
        return res.json({
            resultado:true,
            msj:"Se agrego una cita al usuario "
            
        })  
         
    }
    
});

router.post("/usuarios/insertar_cita_medico", async (req, res) => {
    let body = req.body;
    let error;
    const cita = await Cita.findOne({nombre:body.nombre});
    await Usuario.updateOne({nombre:body._id},{
        $push:{
            "citas": cita
        }
    })
    if(error){
        return res.json({
            resultado:false,
            error
        })
    }else{
        return res.json({
            resultado:true,
            msj:"Se agrego una cita al usuario "
            
        })  
         
    }
    
});
router.get("/usuarios",(req,res)=>{
    let query = req.query;
    Usuario.findOne({_id:query._id}).
    populate('citas').
    exec(function (error, lista) {
        if(error){

            res.status(200).json({
                resultado:false,
                msj: "No se pudo listar los usuarios",
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

router.delete("/eliminar",(req,res)=>{
    let body = req.body;
    Usuario.deleteOne({_id:body._id},
        function(error,info){
        if (error) {
            res.status(200).json({
                resultado:false,
                msj: "No se pudo eliminar la persona",
                error
            });
        }else {
            res.status(200).json({
                resultado:true,
                msj: "se elimino la persona de forma exitosa",
                info
            });  
        }
    });
});

module.exports = router;