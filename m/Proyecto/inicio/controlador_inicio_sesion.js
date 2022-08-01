/* inicio */
const btn_inicio = document.getElementById("btninicio");
/* correo */
const inputCorreo = document.getElementById("txtcorreo")


function validarCamposVacios() {
    let error = false;
    let campos_requeridos = document.querySelectorAll("#datos [required]");
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

//validar correo electrónico
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



const enviar_info = () =>{
    let error_campos_vacios =validarCamposVacios();
    let error_correo= validarCorreo();


    
    if(error_campos_vacios){
        Swal.fire({
            icon: "warning",
            title:"Campos Vacios",
            text: "Los campos en rojo son obligatorios"

        });
    }
    else if(error_correo){
        Swal.fire({
            icon: "warning",
            title: "Correo inválido",
            text: "El formato permitido es example@example.com"
        });
    }
    else{        
        Swal.fire({
            icon: "success",
            title:"Sesion iniciada",
    });
    }
} 

btn_inicio.addEventListener("click", enviar_info);