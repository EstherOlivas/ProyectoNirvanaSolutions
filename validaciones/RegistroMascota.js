// Ligar inputs con JS 

const btnEnviar = document.getElementById("btn-enviar");

//ligar el espacio del nombre
const inputNombre = document.getElementById("nombreMascota");

//ligar el espacio de la raza
const inputRaza = document.getElementById("petsRace");

//ligar el espacio de la fecha de nacimiento.
const inputFechaNacimiento = document.getElementById("diaDeNacimiento")


// Validar campos en blanco

function validarCamposVacios(){
    let error = false;
    let campos_requeridos = document.querySelectorAll("#contenedor_form [required]");
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

function enviarInformacion() {
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
            text: "Mascota Registrada"
        });
    }

btnEnviar.addEventListener("click", enviarInformacion);
