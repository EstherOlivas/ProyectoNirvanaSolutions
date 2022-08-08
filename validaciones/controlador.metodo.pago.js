const btnAceptar = document.getElementById("btnaceptar");
const inputNumero = document.getElementById("txtnumero");
const inputCvv = document.getElementById("txtcvv");
const inputFecha = document.getElementById("txtfecha");

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
function validarNumero() {
    let error = false;
    let numero_usuario = inputNumero.value;
    let expresion_numero = /[0 -16]/;
    if (expresion_numero.test(numero_usuario) == false) {
        error = true;
        inputNumero.classList.add("error");
    } else {
        inputNumero.classList.remove("error");
    }
    return error;
}
function validarCvv() {
    let error = false;
    let cvv_usuario = inputCvv.value;
    let expresion_cvv = /[0 - 4]/;
    if (expresion_cvv.test(cvv_usuario) == false) {
        error = true;
        inputCvv.classList.add("error");
    } else {
        inputCvv.classList.remove("error");
    }
    return error;
}
function validarFecha() {
    let error = false;
    let fecha_usuario = inputFecha.value;
    let expresion_fecha = /[0 - 4]/;
    if (expresion_fecha.test(fecha_usuario) == false) {
        error = true;
        inputFecha.classList.add("error");
    } else {
        inputFecha.classList.remove("error");
    }
    return error;
}
function confirmarinfo () {
    let error_campos_vacios =validarCamposVacios();
    let error_numero =validarNumero();
    let error_cvv =validarCvv();
    let error_fecha =validarFecha();
    if(error_campos_vacios){
        Swal.fire({
            icon: "warning",
            title:"Campos Vacios",
            text: "Todos los campos son obligatorios"
        });
    }
    else if (error_numero) {
        Swal.fire({
            icon: "warning",
            title: "Numero inválido",
            text: "El formato permitido es 1111-1111-1111"
        });
    } else if (error_cvv) {
        Swal.fire({
            icon: "warning",
            title: "Numero inválido",
            text: "El formato permitido es 1111"
        });
    } else if (error_fecha) {
        Swal.fire({
            icon: "warning",
            title: "Numero inválido",
            text: "El formato permitido es 09-11"
        });
    } else{        
        Swal.fire({
            icon: "success",
            title: "exito",
            text:"informacion Almacenada",
    });
    }
} 

btnAceptar.addEventListener("click", confirmarinfo)