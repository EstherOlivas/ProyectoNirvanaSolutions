const mongoose = require("mongoose");

const schema_cita = new mongoose.Schema({
    dia:{type: String, required: true},
    hora:{type: String, required: true},
    doctor:{type: String, required: true},
    descripcion:{type: String, required: false}
});

module.exports = mongoose.model("Cita", schema_cita, "citas");
