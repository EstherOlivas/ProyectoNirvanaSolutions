/* boton */
const btnEnviar = document.getElementById("btn-enviar");
/* fecha */
const inputLlegada =document.getElementById("dateDiaLlegada");
const inputSalida =document.getElementById("dateDiaSalida");

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
function valida_llegada() {
    let error = false;
    var hoy = new Date();
    var dias = new Date(inputLlegada.value);
     var calculado = new Date();
     var diassumar = calculado.setDate(
       hoy.getDate() + 15
      );

      if (dias > diassumar||dias<hoy)
      {
        error=true;
        inputLlegada.classList.add("error");

     }
     return error;
}


function valida_salida() {
    let error = false;
    var diallegada = new Date(inputLlegada.value);
    var dias = new Date(inputSalida.value);

      if (dias<diallegada)
      {
        error=true;
        inputSalida.classList.add("error");

     }
     return error;
}


const limpiarCampos =()=>{
    inputLlegada.value="";
    inputSalida.value="";
    txtarea.value="";
}

const enviar_info = () =>{
    let error_campos_vacios =valida_CamposVacios();
    let error_llegada= valida_llegada();
    let error_salida = valida_salida();
   
    if(error_campos_vacios){
        Swal.fire({
            icon: "warning",
            title:"Campos Vacios",
            text: "Los campos en rojo son obligatorios"

        });
    }
    else if(error_llegada){
        Swal.fire({
            icon: "warning",
            title:"Llegada invalida",
            text: "La fecha debe ser dentro de los proximos 15 dias"
        });
    }
    else if(error_salida){
        Swal.fire({
            icon: "warning",
            title:"Salida invalida",
            text: "La fecha de salida no puede ser antes de la llegada"
        });
    }
    else{        
        Swal.fire({
            icon: "success",
            title:"Cita Agendada",
            text: "Se le enviara un correo con la confimación de su cita"
    });
    limpiarCampos();
    }
} 

btnEnviar.addEventListener("click", enviar_info);
