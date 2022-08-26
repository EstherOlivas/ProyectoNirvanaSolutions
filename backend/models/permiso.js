const mongoose = require("mongoose");

const schema_permiso = new mongoose.Schema({
    nombre:{type: String}
});

module.exports = mongoose.model("Permiso", schema_permiso, "permisos");
