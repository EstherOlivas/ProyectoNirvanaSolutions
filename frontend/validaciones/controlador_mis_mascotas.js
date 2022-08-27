const tbody = document.querySelector("#informacion_citas tbody");
let _id=localStorage.getItem("_id")
let listado_de_mascotas = [];

const mostrar_datos_en_tabla = async() => {
    listado_de_mascotas = await mascotas_BD(_id);

    tbody.innerHTML = "";

    for (let i = 0; i < listado_de_mascotas.length; i++) {
        let fila = tbody.insertRow();

        let celda_nombreMascota = (fila.insertCell().innerHTML = listado_de_mascotas[i]["nombreMascota"]);
        let celda_raza = (fila.insertCell().innerHTML = listado_de_mascotas[i]["raza"]);
        let celda_nacimiento = (fila.insertCell().innerHTML = listado_de_mascotas[i]["nacimiento"]);

        
    }
}
mostrar_datos_en_tabla();
