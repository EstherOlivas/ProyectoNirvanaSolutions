/* boton */
const btnEnviar = document.getElementById("btn_Enviar");
/* fecha */
const inputFecha =document.getElementById("dateDiaCita");
/* hora */
const inputHora =document.getElementById("timeCita");
/* veterinario */
const sctDoctor = document.getElementById("Doctor");
/* cuidados */
const txtarea = document.getElementById("txtDescripcion");

function valida_CamposVacios() {
    let error = false;
    let campos_requeridos = document.querySelectorAll("#formulario_cita [required]");
    for (let i = 0; i < campos_requeridos.length; i++) {
        if(campos_requeridos[i].value== ""){
            error=true;
            campos_requeridos[i].classList.add("error");
        }   
        else{
            campos_requeridos[i].classList.remove("error");
        }
    }
    return error;
}
function valida_fecha() {
    let error = false;
    let fecha_cita = inputFecha.value;
    let expresion_fecha = /^(2[0][2][2-3])\-(0[1-9]|1[0-2])\-(0[1-9]|1\d|2\d|3[0-1])$/;

    if (expresion_fecha.test(fecha_cita)==false) {
        error=true;
        inputFecha.classList.add("error");
    }
    else{
        inputFecha.classList.remove("error");
    }
    return error;
}

const limpiarCampos =()=>{
    inputFecha.value="";
    inputHora.value="";
    sctDoctor.value="";
    txtarea.value="";
}

const enviar_info = () =>{
    let error_campos_vacios =valida_CamposVacios();
    let error_fecha= valida_fecha();

    
    if(error_campos_vacios){
        Swal.fire({
            icon: "warning",
            title:"Campos Vacios",
            text: "Los campos en rojo son obligatorios"

        });
    }
    else if(error_fecha){
        Swal.fire({
            icon: "warning",
            title:"Fecha invalida",
            text: "La fecha debe coincidir con el año actual o siguiente"
        });
    }
    else{        
        Swal.fire({
            icon: "success",
            title:"Cita Agendada",
            text: "Se le enviara un correo con la confimación de su cita"
    });
    }
} 

btnEnviar.addEventListener("click", enviar_info);
