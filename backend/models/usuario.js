const mongoose = require("mongoose");
const { Schema } = mongoose;
require("../models/rol");
require("../models/cita");


const schema_usuario = new mongoose.Schema({
    nombre:{type: String, required: true, unique: false},
    apellidos:{type: String, required: true, unique: false},
    numero:{type: String, required: true, unique: true},
    cedula:{type: String, required: true, unique: true},
    contrasenna:{type: String, required: true, unique: false},
    correo:{type: String, required: true, unique: true},
    direccion:{type: String, required: true, unique: false},
    mascotas:[        
        {nombreMascota:{type:String,require:true, unique:false},  
        raza:{type:String,require:true, unique:false},  
        nacimiento:{type:String,require:true, unique:false}},  
    ],
    estado:{type:String, default:"Activo"},
    rol:[{ type: Schema.Types.ObjectId, ref: 'Rol' }],
    citas:[{ type: Schema.Types.ObjectId, ref: 'Cita', require: false}]

});

module.exports = mongoose.model("Usuario", schema_usuario, "usuarios");
