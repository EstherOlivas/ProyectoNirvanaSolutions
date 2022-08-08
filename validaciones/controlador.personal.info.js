const btnGuardar = document.getElementById("btnguardar");
const inputCorreo = document.getElementById("txtcorreo");
const inputNumero = document.getElementById("txtnumero");

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
    let expresion_correo = /[a-zA-Z0-9].+@[a-zA-Z0-9]+.[a-z]+/;

    if (expresion_correo.test(texto_usuario) == false) {
        error = true;
        inputCorreo.classList.add("error");
    } else {
        inputCorreo.classList.remove("error");
    }

    return error;
}
function validarNumero() {
    let error = false;
    let numero_usuario = inputNumero.value;
    let expresion_numero = /[0-8]/;
    if (expresion_numero.test(numero_usuario) == false) {
        error = true;
        inputNumero.classList.add("error");
    } else {
        inputNumero.classList.remove("error");
    }
    return error;
}
function guardarinfo () {
    let error_campos_vacios =validarCamposVacios();
    let error_correo = validarCorreo();
    let error_numero =validarNumero();

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
    } else if (error_numero) {
        Swal.fire({
            icon: "warning",
            title: "Numero inválido",
            text: "El formato permitido es 1111-1111-1111"
        });
    } else {        
        Swal.fire({
            icon: "success",
            title: "exito",
            text:"informacion Almacenada",
    });
    }
} 
btnGuardar.addEventListener("click", guardarinfo)