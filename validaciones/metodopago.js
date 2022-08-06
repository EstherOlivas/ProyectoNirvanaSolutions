// Ligar inputs con JS 

const btnaceptar = document.getElementById("btnaceptar");

//ligar el espacio del nombre
const inputcorreo = document.getElementById("txtnombre");

//ligar el espacio del numero de tarjeta
const inputnombre = document.getElementById("txttxtnumero");

//ligar el espacio de la fecha de vencimiento
const inputdireccion = document.getElementById("txtvencimiento");

//ligar el espacio de la direccion
const inputnumero = document.getElementById("txtdireccion");

//ligar el espacio del cvv
const inputcvv = document.getElementById("txtcvv");

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

function validarInformacion() 
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

btnaceptar.addEventListener("click", validarInformacion);