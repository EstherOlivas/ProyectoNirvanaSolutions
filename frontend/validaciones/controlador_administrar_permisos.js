const tbody = document.querySelector("#informacion-registro tbody");
const btn_Registrar= document.getElementById("btnRegistrar");
const inputPermiso=document.getElementById("txtpermiso");

let listado_de_permisos = [];

const mostrar_datos_en_tabla = async() => {
    listado_de_permisos = await permisos_BD();

    tbody.innerHTML = "";

    for (let i = 0; i < listado_de_permisos.length; i++) {
        let fila = tbody.insertRow();

        let celda_nombre = (fila.insertCell().innerHTML = listado_de_permisos[i]["nombre"]);
       
    }
}


function validarCamposVacios() {
    let error = false;
    let campos_requeridos = document.querySelectorAll("#formulario [required]");
    
    for (let i = 0; i < campos_requeridos.length; i++) {
        if (campos_requeridos[i].value == "") {
            error = true;
            campos_requeridos[i].classList.add("error");
        } else {
            campos_requeridos[i].classList.remove("error");
        }
    }
    return error;
}


let obtener_datos = () => {
    let error_campos_vacios =validarCamposVacios();

    if(error_campos_vacios){
        Swal.fire({
            icon: "warning",
            title:"Campos Vacios",
            text: "Todos los campos son obligatorios"
        });
    }
    else {      
        let permiso=inputPermiso.value;
        registrar_permiso(permiso);
        let fila = tbody.insertRow();
        let celda_nombre = (fila.insertCell().innerHTML = permiso);
        inputPermiso.value="";
    }
} 

mostrar_datos_en_tabla();

btn_Registrar.addEventListener("click", obtener_datos)