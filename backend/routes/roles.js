const express = require('express');
const Rol = require("../models/rol");
const router = express.Router();
const Permiso =require("../models/permiso")

router.post("/registrar_rol",(req,res)=>{
    let body = req.body;
    let nuevo_rol = new Rol({
        nombre: body.nombre,
        descripcion: body.descripcion

    });
    nuevo_rol.save((error,rolDB)=>{
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
                rolDB
            });
        }  
    });
});

//localhost:3000/api/listar
/* GET = recupera informacion*/
router.get("/",(req,res)=>{
    Rol.find((error,lista)=>{
        if(error){
            res.status(200).json({
                resultado:false,
                msj: "No se pudo listar los roles",
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

/*  */
router.post("/roles/insertar_permiso", async (req, res) => {
    let body = req.body;
    let error;
    const permiso = await Permiso.findOne({nombre:body.nombre})
    console.log(permiso);
    const rol= await Rol.updateOne({_id:body._id},{
        $push:{
            "permisos": permiso
        }
    })
    console.log(rol);
    if(error){
        return res.json({
            resultado:false,
            msj:"No se pudo agregar la tarjeta, ocurrio el siguiente error:",
            error
        })
    }else{
        return res.json({
            resultado:true,
            msj:"Rol actualizado"
            
        })  
         
    }
    
});

module.exports=router
