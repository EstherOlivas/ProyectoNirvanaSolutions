const btn_enviar = document.getElementById("btn-enviar");
const inputNombre = document.getElementById("name");
const inputApellidos = document.getElementById("Apellidos");
const inputNumero = document.getElementById("numero");
const inputCedula = document.getElementById("cedula");
const inputPassword = document.getElementById("password");
const inputCorreo = document.getElementById("email");
const inputDireccion = document.getElementById("address");


function validarCamposVacios() {
    let error = false;
    let campos_requeridos = document.querySelectorAll(".form [required]");
    
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
/* const validar_nombre = () => {
    let error = false;
    let nombre = inputNombre.value;
    let expresion = /^[a-zA-Z]+$/;
    if (expresion.test(nombre) == false) {
        inputNombre.classList.add("error");
        error = true;
    } else {
        inputNombre.classList.remove("error");
    }
    return error;
}
const validar_apellidos = () => {
    let error = false;
    let apellidos = inputApellidos.value;
    let expresion = /^[a-zA-Z]+$/;
    if (expresion.test(apellidos) == false) {
        inputApellidos.classList.add("error");
        error = true;
    } else {
        inputApellidos.classList.remove("error");
    }
    return error;
}
const validar_numero = () => {
    let error = false;
    let numero = inputNumero.value;
    let expresion = /^[0-9]{4}-[0-9]{4}$/;
    if (expresion.test(numero) == false) {
        inputNumero.classList.add("error");
        error = true;
    } else {
        inputNumero.classList.remove("error");
    }
    return error;
}
const validar_cedula = () => {
    let error = false;
    let cedula = inputCedula.value;
    let expresion = /^[1-9]{1}-[0-9]{4}-[0-9]{4}$/;
    if (expresion.test(cedula) == false) {
        inputCedula.classList.add("error");
        error = true;
    } else {
        inputCedula.classList.remove("error");
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
} */

let limpiarCampos =()=>{
    inputNombre.value="";
    inputApellidos.value="";
    inputNumero.value="";
    inputCedula.value="";
    inputPassword.value="";
    inputCorreo.value="";
    inputDireccion.value="";

}

let obtener_datos = () => {
    let error_campos_vacios =validarCamposVacios();
/*     let error_nombre = validar_nombre();
    let error_apellidos = validar_apellidos();
    let error_numero = validar_numero();
    let error_cedula = validar_cedula();
    let error_correo = validarCorreo(); */
    

    if(error_campos_vacios){
        Swal.fire({
            icon: "warning",
            title:"Campos Vacios",
            text: "Todos los campos son obligatorios"
        });
    }
/*     else if (error_correo) {
        Swal.fire({
            icon: "warning",
            title: "Correo inválido",
            text: "El formato permitido es example@example.com"
        });
    } */ else {       
        let nombre =inputNombre.value;
        let apellidos =inputApellidos.value;
        let numero =inputNumero.value;
        let cedula =inputCedula.value;
        let contrasenna =inputPassword.value;
        let correo =inputCorreo.value;
        let direccion = inputDireccion.value;
        registrar_usuario(nombre, apellidos, numero, cedula, contrasenna, correo, direccion);
        Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "La información se registró de forma correcta",
        });
        limpiarCampos();

    }
} 
btn_enviar.addEventListener("click", obtener_datos)