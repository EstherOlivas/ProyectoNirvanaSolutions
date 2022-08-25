const btn_enviar = document.getElementById("btn-enviar");
const inputNombre = document.getElementById("name");
const inputApellidos = document.getElementById("Apellidos");
const inputNumero = document.getElementById("numero");
const inputCedula = document.getElementById("cedula");
const inputPassword = document.getElementById("password");
const inputCorreo = document.getElementById("email");
const inputDireccion = document.getElementById("address");
const checkbox = document.getElementById('termsAcceptance');
const tyc = document.getElementById('TyC');


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
const validar_nombre = () => {
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
    let expresion = /^[\d]{4}-[\d]{4}$/;
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
    let expresion = /^[1-9]{1}-[\d]{4}-[\d]{4}$/;
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
    let expresion_correo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (expresion_correo.test(texto_usuario) == false) {
        error = true;
        inputCorreo.classList.add("error");
    } else {
        inputCorreo.classList.remove("error");
    }
    return error;
}
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox(){
    let error;
    let checked = checkbox.checked;
    if(checked==false){
        error = true;
    }
    return error;
}

let limpiarCampos =()=>{
    inputNombre.value="";
    inputApellidos.value="";
    inputNumero.value="";
    inputCedula.value="";
    inputPassword.value="";
    inputCorreo.value="";
    inputDireccion.value="";
    checkbox.checked=false
}

let obtener_datos = () => {
    let error_campos_vacios =validarCamposVacios();
    let error_nombre = validar_nombre();
    let error_apellidos = validar_apellidos();
    let error_numero = validar_numero();
    let error_cedula = validar_cedula();
    let error_correo = validarCorreo();
    let error_checkbox=validaCheckbox();
    

    if(error_campos_vacios){
        Swal.fire({
            icon: "warning",
            title:"Campos Vacios",
            text: "Todos los campos son obligatorios"
        });
    }else if (error_nombre) {
        Swal.fire({
            icon: "warning",
            title: "Nombre inválido",
            text: "El nombre no puede llevar numeros"
        });   
    }else if (error_apellidos) {
        Swal.fire({
            icon: "warning",
            title: "Apellidos inválidos",
            text: "Los apellidos no pueden llevar numeros"
        });
    }
    else if (error_numero) {
        Swal.fire({
            icon: "warning",
            title: "Número inválido",
            text: "El formato permitido es 8888-8888"
        });  
    }    else if (error_cedula) {
        Swal.fire({
            icon: "warning",
            title: "Cedula inválida",
            text: "El formato permitido es 1-1111-1111"
        });  
    }else if (error_correo) {
        Swal.fire({
            icon: "warning",
            title: "Correo inválido",
            text: "El formato permitido es example@example.com"
        });
    }else if (error_checkbox) {
        Swal.fire({
            icon: "warning",
            title: "Falto algo...",
            text: "Debe aceptar los terminos y condiciones"
        });
    }else {       
        let nombre =inputNombre.value;
        let apellidos =inputApellidos.value;
        let numero =inputNumero.value;
        let cedula =inputCedula.value;
        let contrasenna =inputPassword.value;
        let correo =inputCorreo.value;
        let direccion = inputDireccion.value;
        registrar_usuario(nombre, apellidos, numero, cedula, contrasenna, correo, direccion);
        limpiarCampos();
        window.location.href="index-MokaLandingPage-SI.html";
        Swal.fire({
            icon: "success",
            title: "Éxito",
            text: "La información se registró de forma correcta",
        });

    }
} 
btn_enviar.addEventListener("click", obtener_datos)
