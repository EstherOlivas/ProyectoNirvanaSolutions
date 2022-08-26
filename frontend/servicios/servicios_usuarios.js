const registrar_usuario = async(pnombre,papellidos,pnumero,pcedula,pcontrasenna,pcorreo,pdireccion) => {
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
            direccion:pdireccion
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
