const registrar_mascota = async(p_id,pnombreMascota, praza, pnacimiento) => {
    await axios({
        method: "post",
        url: "http://localhost:8000/api/registrar_mascota",
        responseType: "json",
        data: {
            _id:p_id,
            nombreMascota: pnombreMascota ,
            raza: praza,
            nacimiento: pnacimiento,
        }
    }).
    then((res) => {
        if (res.data.resultado == false) {
            Swal.fire({
                title: "No se completo el registro",
                text: "Problema de ID comuniquese con el administrador",
                icon: "warning"
            });

        } else {
            Swal.fire({
                title: "Registro exitoso",
                text: "Mascota guardado correctamente",
                icon: "success"
            });
        }
    }).
    catch((err) => {
        console.log(err);
    });

}

const mascotas_BD = async(p_id) => {
    
    let lista_mascotas = [];

    await axios({
            method: "get",
            url: "http://localhost:8000/api/usuarios",
            responseType: "json",
            params: {
                _id: p_id,
              },
        })
        .then((res) => {
            lista_mascotas = res.data.lista.mascotas;
            console.log(lista_mascotas);
        })
        .catch((err) => {
            console.log(err);
        });
    

    return lista_mascotas;
}