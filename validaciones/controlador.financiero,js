const btnGuardar = document.getElementById("btnver");

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


function guardarinfo () {
    let error_campos_vacios =validarCamposVacios();
   
    if(error_campos_vacios){
        Swal.fire({
            icon: "warning",
            title:"Campos Vacios",
            text: "Todos los campos son obligatorios"
        });
    }
    else {        
        Swal.fire({
            icon: "success",
            title: "exito",
            text:"informacion Almacenada",
    });
    }
} 
btnGuardar.addEventListener("click", guardarinfo)