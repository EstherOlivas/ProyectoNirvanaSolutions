const mongoose = require("mongoose");
const { Schema } = mongoose;
require("../models/rol");

const schema_usuario = new mongoose.Schema({
    nombre:{type: String, required: true, unique: false},
    apellidos:{type: String, required: true, unique: false},
    numero:{type: String, required: true, unique: true},
    cedula:{type: String, required: true, unique: true},
    contrasenna:{type: String, required: true, unique: false},
    correo:{type: String, required: true, unique: true},
    direccion:{type: String, required: true, unique: false},
    estado:{type:String, default:"Activo"},
    rol:[{ type: Schema.Types.ObjectId, ref: 'Rol' }]
});

module.exports = mongoose.model("Usuario", schema_usuario, "usuarios");
