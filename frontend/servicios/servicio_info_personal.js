const modificar_info_persona=async(p_id,pnombre, papellidos, pnumero, pcedula, pcorreo, pdireccion)=>{
    await axios({
        method:"put",
        url:"http://localhost:8000/api/modificar",
        responseType:"json",
        data:{
            _id:p_id,
            nombre:pnombre,
            apellidos:papellidos,
            numero:pnumero,
            cedula:pcedula,
            correo:pcorreo,
            direcion:pdireccion
        }
    }).then((res)=>{
        Swal.fire({
            title:"Actualizacion exitosa",
            text: "Informacion actualizada correctamente",
            icon:"success"
        });
    }).catch((error)=>{
        console.log(error);
    });
}


const obtener_persona_correo= async(correo)=>{
    let Usuario;
    try{
        const respuesta =await axios({
            method:"get",
            params:{correo:correo},
            url:"http://localhost:8000/api/buscar_persona_correo",
            responseType:"json"
        });
        Usuario= respuesta.data.Usuario;
        return Usuario
    } catch(error){
        console.log(error);
    }
}