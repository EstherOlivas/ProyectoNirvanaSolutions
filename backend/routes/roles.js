/* const mongoose = require("mongoose"); */
const express = require('express')
const Rol = require('../models/rol')
const router = express.Router()
const Permiso = require('../models/permiso')

router.post('/roles/registrar_rol', (req, res) => {
  let body = req.body
  let nuevo_rol = new Rol({
    nombre: body.nombre,
  })
  nuevo_rol.save((error, rolDB) => {
    if (error) {
      res.status(200).json({
        resultado: false,
        msj: 'No se pudo hacer el registro',
        error,
      })
      console.log(error)
    } else {
      res.status(200).json({
        resultado: true,
        msj: 'Registro exitoso',
        rolDB,
      })
    }
  })
})

//localhost:3000/api/listar
/* GET = recupera informacion*/
router.get('/roles', (req, res) => {
  Rol.find((error, lista) => {
    if (error) {
      res.status(200).json({
        resultado: false,
        msj: 'No se pudo listar los roles',
        error,
      })
    } else {
      res.status(200).json({
        resultado: true,
        msj: 'Listado exitoso',
        lista,
      })
    }
  })
})

//localhost:3000/api/
/* GET = recupera informacion*/
router.get('/roles/nombre', (req, res) => {
  let rol = req.query._id

  Rol.findOne({ _id: rol })
    .populate('permisos')
    .exec(function (error, rolDB) {
      if (error) {
        res.status(200).json({
          resultado: false,
          msj: 'No se pudo encontrar el rol',
          error,
        })
      } else {
        res.status(200).json({
          resultado: true,
          msj: 'Busqueda exitoso',
          rol: rolDB,
        })
      }
    })
})

/* ruta para agregar tarjetas */
router.post('/agregar_tarjetas', (req, res) => {
  let body = req.body
  let error
  let tarjetas = JSON.parse(body.tarjetas)

  tarjetas.forEach((tarjeta) => {
    Persona.updateOne(
      { _id: body._id },
      {
        $push: {
          tarjetas: {
            tarjeta: tarjeta,
          },
        },
      },
      (error) => {
        if (error) {
          error = error
        }
      }
    )
  })
  if (error) {
    return res.json({
      resultado: false,
      msj: 'No se pudo agregar la tarjeta, ocurrio el siguiente error:',
      error,
    })
  } else {
    return res.json({
      resultado: true,
      msj: 'Tarjeta agregada',
    })
  }
})

/*  */
router.post('/roles/insertar_permiso', async (req, res) => {
  let body = req.body
  let error
  const permiso = await Permiso.findOne({ nombre: body.permiso })
  const rol = await Rol.updateOne(
    { _id: body._id },
    {
      $push: {
        permisos: permiso,
      },
    }
  )
  console.log(rol)
  if (error) {
    return res.json({
      resultado: false,
      msj: 'No se pudo agregar la tarjeta, ocurrio el siguiente error:',
      error,
    })
  } else {
    return res.json({
      resultado: true,
      msj: 'Rol actualizado',
    })
  }
})

module.exports = router
