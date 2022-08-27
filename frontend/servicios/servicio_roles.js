const roles_BD = async () => {
  let lista_roles = []

  await axios({
    method: 'get',
    url: 'http://localhost:8000/api/roles',
    responseType: 'json',
  })
    .then((res) => {
      lista_roles = res.data.lista
    })
    .catch((err) => {
      console.log(err)
    })

  return lista_roles
}

const rol_BD = async (id) => {
  let rol = {}

  await axios({
    method: 'get',
    url: 'http://localhost:8000/api/roles/nombre',
    responseType: 'json',
    params: {
      _id: id,
    },
  })
    .then((res) => {
      console.log('trae datos')
      rol = res.data.rol
      console.log(rol)
    })
    .catch((err) => {
      console.log(err)
    })

  return rol
}

const registrar_rol = async (rol) => {
  let returnMessage = 0
  await axios({
    method: 'post',
    url: 'http://localhost:8000/api/roles/registrar_rol',
    responseType: 'json',
    data: {
      nombre: rol,
    },
  })
    .then((res) => {
      console.log('***********   ' + res.data)
      if (res.data.resultado == false) {
        switch (res.data.error.code) {
          case 11000:
            Swal.fire({
              title: 'No se completo el registro',
              text: 'El rol ya se encuentra registrado',
              icon: 'warning',
            })
            break
          default:
            Swal.fire({
              title: 'No se completo el registro',
              text: 'res.data.error.code.message',
              icon: 'warning',
            })
            break
        }
      } else {
        returnMessage = res.data._id
        Swal.fire({
          title: 'Registro exitoso',
          text: 'Rol guardado correctamente',
          icon: 'success',
        })
      }
    })
    .catch((err) => {
      console.log(err)
      return 0
    })
  return returnMessage
}

const registrar_permiso_rol = async (_id, permiso) => {
  await axios({
    method: 'post',
    url: 'http://localhost:8000/api/roles/insertar_permiso',
    responseType: 'json',
    data: {
      permiso: permiso,
      _id: _id,
    },
  })
    .then((res) => {
      if (res.data.resultado == false) {
        switch (res.data.error.code) {
          case 11000:
            Swal.fire({
              title: 'No se completo el registro',
              text: 'res.data.error.message',
              icon: 'warning',
            })
            break
        }
      } else {
        Swal.fire({
          title: 'Registro exitoso',
          text: 'Permisos guardado correctamente',
          icon: 'success',
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
