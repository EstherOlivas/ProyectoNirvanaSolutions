const tbody = document.querySelector("#informacion_citas tbody");
let _id=localStorage.getItem("_id")
let listado_de_citas = [];

const mostrar_datos_en_tabla = async() => {
    listado_de_citas = await citas_BD(_id);

    tbody.innerHTML = "";

    for (let i = 0; i < listado_de_citas.length; i++) {
        let fila = tbody.insertRow();

        let celda_dia = (fila.insertCell().innerHTML = listado_de_citas[i]["dia"]);
        let celda_hora = (fila.insertCell().innerHTML = listado_de_citas[i]["hora"]);
        let celda_doctor = (fila.insertCell().innerHTML = listado_de_citas[i]["doctor"]);

        
    }
}
mostrar_datos_en_tabla();
