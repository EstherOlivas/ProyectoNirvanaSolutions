const registrar_usuario = async(pnombre,papellidos,pnumero,pcedula,pcontrasenna,pcorreo,pdireccion,prol) => {
    await axios({
        method: "post",
        url: "http://localhost:8000/api/registrar_usuario",
        responseType: "json",
        data: {
            nombre: pnombre,
            apellidos: papellidos,
            numero: pnumero,
            cedula:pcedula,
            contrasenna:pcontrasenna,
            correo:pcorreo,
            direccion:pdireccion,
            rol:prol
        }
    }).
    then((res) => {
        if (res.data.resultado == false) {
            switch (res.data.error.code) {
                case 11000:
                    Swal.fire({
                        title: "No se completo el registro",
                        text: "Ya existe un usuario con esas credenciales",
                        icon: "warning"
                    });
                    break;
            }
        } else {
            Swal.fire({
                title: "Registro exitoso",
                text: "Usuarios guardado correctamente",
                icon: "success"
            });
            window.location.href="index_inicio_sesion.html";
        }
    }).
    catch((err) => {
        console.log(err);
    });
}
const citas_usuario=async(p_id)=>{
    await axios({
        method: "post",
        url: "http://localhost:8000/api/usuarios/insertar_cita",
        responseType: "json",
        data: {
            _id:p_id
        }
    }).
    then((res) => {
        if (res.data.resultado == false) {
            switch (res.data.error.code) {
                case 11000:
                    Swal.fire({
                        title: "No se completo el registro",
                        text: "Ocurrio un problema",
                        icon: "warning"
                    });
                    break;
            }
        } else {

        }
    }).
    catch((err) => {
        console.log(err);
    });

}

url:"http://localhost:8000/api/usuarios/insertar_cita"
