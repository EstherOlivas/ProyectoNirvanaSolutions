const btnAceptar = document.getElementById( btnaceptar);
//const numero = document.getElementById("txtnumero");
//const fecha = document.getElementById("txtfecha");
//const direccion = document.getElementById("txtdireccion");
//const cvv = document.getElementById("txtcvv");

function validarCampos(){
    let error = false;
    let campos = document.querySelectorAll("formulario [required]");

    for (let i = 0; i < campos.length; i++) {
        if (campos[i].value == "") {
            error = true;
            campos[i].idList.add("error");
        } else {
            campos[i].idList.remove("error");
        }
    }
    return error;
}

function validarInformacion() 
    let error_campos = validarCampos();

    if (error_campos) {
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

btnAceptar.addEventListener("click", validarInformacion);