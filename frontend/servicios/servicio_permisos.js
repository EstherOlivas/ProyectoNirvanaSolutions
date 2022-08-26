const permisos_BD = async() => {
    
    let lista_permisos = [];

    await axios({
            method: "get",
            url: "http://localhost:8000/api/permisos",
            responseType: "json",
        })
        .then((res) => {
            lista_permisos = res.data.lista;
            console.log(lista_permisos);
        })
        .catch((err) => {
            console.log(err);
        });
    

    return lista_permisos;
}

const registrar_permiso = async(ppermiso) => {
    await axios({
        method: "post",
        url: "http://localhost:8000/api//permisos/registrar_permiso",
        responseType: "json",
        data: {
            nombre: ppermiso,
        }
    }).
    then((res) => {
        if (res.data.resultado == false) {
            switch (res.data.error.code) {
                case 11000:
                    Swal.fire({
                        title: "No se completo el registro",
                        text: "asd",
                        icon: "warning"
                    });
                    break;
            }
        } else {
            Swal.fire({
                title: "Registro exitoso",
                text: "Permisos guardado correctamente",
                icon: "success"
            });
        }
    }).
    catch((err) => {
        console.log(err);
    });

}