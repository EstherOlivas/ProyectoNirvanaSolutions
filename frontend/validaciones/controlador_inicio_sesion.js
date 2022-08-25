const btnInicio = document.getElementById("btninicio");
const inputCorreo = document.getElementById("txtcorreo");
const inputContrasenna = document.getElementById("txtcontrasenna");


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
function validarCorreo() {
    let error = false;
    let texto_usuario = inputCorreo.value;
    let expresion_correo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (expresion_correo.test(texto_usuario) == false) {
        error = true;
        inputCorreo.classList.add("error");
    } else {
        inputCorreo.classList.remove("error");
    }

    return error;
}
function guardarinfo () {
    let error_campos_vacios =validarCamposVacios();
    let error_correo = validarCorreo();
    if(error_campos_vacios){
        Swal.fire({
            icon: "warning",
            title:"Campos Vacios",
            text: "Todos los campos son obligatorios"
        });
    }
    else if (error_correo) {
        Swal.fire({
            icon: "warning",
            title: "Correo inválido",
            text: "El formato permitido es example@example.com"
        });
    } else {      
        let correo=inputCorreo ;
        let contrasenna = inputContrasenna.value;   
        validar_usuario(correo,contrasenna);
    }
} 
btnInicio.addEventListener("click", guardarinfo)