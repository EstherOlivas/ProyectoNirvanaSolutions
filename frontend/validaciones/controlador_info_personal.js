let correo=localStorage.getItem("correo")
const btn_guardar = document.querySelector("#btnguardar");
const btn_eliminar = document.querySelector("#btneliminar");
const inputCorreo = document.querySelector("#txtcorreo");
const inputNombre = document.querySelector("#txtnombre");
const inputApellidos = document.querySelector("#txtapellidos");
const inputDireccion = document.querySelector("#txtdireccion");
const inputCedula = document.querySelector("#txtcedula");
const inputNumero = document.querySelector("#txtnumero");
 let _id;

//crear una funcion para llenar los campos del form edita
const llenar_campos=async()=>{
    let Usuario= await obtener_persona_correo(correo);
    _id =Usuario[0]._id;
    inputCorreo.value=Usuario[0].correo;
    inputNombre.value=Usuario[0].nombre;
    inputApellidos.value=Usuario[0].apellidos;
    inputDireccion.value=Usuario[0].direccion;
    inputCedula.value=Usuario[0].cedula;
    inputNumero.value=Usuario[0].numero;
    console.log("hola");

}


let campos_vacios = () => {
    let campos_requeridos = document.querySelectorAll("#frm-registro [required]");
    let error = false;
    for (let i = 0; i < campos_requeridos.length; i++) {
        if (campos_requeridos[i].value == "") {
            campos_requeridos[i].classList.add("error");
            error = true;
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
let obtener_datos = () => {
    let error_campos_vacios =campos_vacios();
    let error_nombre = validar_nombre();
    let error_apellidos = validar_apellidos();
    let error_numero = validar_numero();
    let error_cedula = validar_cedula();
    let error_correo = validarCorreo();
    

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
    }else {       
        let nombre =inputNombre.value;
        let apellidos =inputApellidos.value;
        let numero =inputNumero.value;
        let cedula =inputCedula.value;
        let correo =inputCorreo.value;
        let direccion = inputDireccion.value;
        modificar_info_persona(_id,nombre, apellidos, numero, cedula, correo, direccion);

    }
} 

const eliminar=()=>{
    eliminar_persona(_id);
}
btn_eliminar.addEventListener("click",eliminar);
btn_guardar.addEventListener("click", obtener_datos)
llenar_campos();