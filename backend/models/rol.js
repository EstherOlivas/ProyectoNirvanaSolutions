const mongoose = require("mongoose");
const { Schema } = mongoose;
require("../models/permiso");


const schema_rol = new mongoose.Schema({
    nombre:{type: String},
    permisos:[{ type: Schema.Types.ObjectId, ref: 'Permiso' }]
});

module.exports = mongoose.model("Rol", schema_rol, "roles");
