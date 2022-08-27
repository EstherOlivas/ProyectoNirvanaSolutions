const registrar_cita = async(pdia,phora,pdoctor,pdescripcion) => {
    await axios({
        method: "post",
        url: "http://localhost:8000/api/citas/registrar_citas",
        responseType: "json",
        data: {
            dia: pdia,
            hora: phora,
            doctor: pdoctor,
            descripcion: pdescripcion,

        }
    }).
    then((res) => {
        if (res.data.resultado == false) {
            switch (res.data.error.code) {
                case 11000:
                    Swal.fire({
                        title: "No se completo el registro",
                        text: "Ya existe una cita a esa hora",
                        icon: "warning"
                    });
                    break;
            }
        } else {
            Swal.fire({
                title: "Registro exitoso",
                text: "Se le enviara un correo con la confimación de su cita",
                icon: "success"
            });
        }
    }).
    catch((err) => {
        console.log(err);
    });

}
const citas_BD = async(p_id) => {
    
    let lista_citas = [];

    await axios({
            method: "get",
            url: "http://localhost:8000/api/usuarios",
            responseType: "json",
            params: {
                _id: p_id,
              },
        })
        .then((res) => {
            lista_citas = res.data.lista.citas;
            console.log(lista_citas);
        })
        .catch((err) => {
            console.log(err);
        });
    

    return lista_citas;
}