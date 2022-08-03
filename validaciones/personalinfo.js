// Ligar inputs con JS 

const btnguardar = document.getElementById("btnguardar");

//ligar el espacio del correo
const inputcorreo = document.getElementById("txtcorreo");

//ligar el espacio del correo
const inputnombre = document.getElementById("txtnombre");

//ligar el espacio del correo
const inputdireccion = document.getElementById("txtdireccion");

//ligar el espacio del correo
const inputnumero = document.getElementById("txtnumero");


// Validar campos en blanco

function validarCamposVacios(){
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor [required]");
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

function enviarInformacion() 
    let error_campos_vacios = validarCamposVacios();

    if (error_campos_vacios) {
        Swal.fire({
            icon: "warning",
            title: "Campos vacios",
            text: "Ops! Olvidaste mencionarnos algo."
        });
    } else {
        Swal.fire({
            icon: "success",
            title: "Completado!",
            text: "Informacion Registrada"
        });
    }

btnguardar.addEventListener("click", enviarInformacion);