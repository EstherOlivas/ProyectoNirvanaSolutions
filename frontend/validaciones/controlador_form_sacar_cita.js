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
let _id=localStorage.getItem("_id");


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


function valida_fecha(){
    let error = false;
    var hoy = new Date();
    var dias = new Date(inputFecha.value);
     var calculado = new Date();
     var diassumar = calculado.setDate(
       hoy.getDate() + 15
      );

     if (dias > diassumar||dias<hoy)
     {
        error=true;
        inputFecha.classList.add("error");
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
            text: "La fecha debe ser dentro de los proximos 15 dias"
        });
    }
    else{        
        let dia= inputFecha.value;
        let hora=inputHora.value;
        let doctor=sctDoctor.value;
        let descripcion=txtarea.value;

        registrar_cita(dia,hora,doctor,descripcion);
        citas_usuario(_id);
        limpiarCampos();
    }

} 

btnEnviar.addEventListener("click", enviar_info);
