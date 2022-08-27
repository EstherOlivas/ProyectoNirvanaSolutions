const tbodyRoles = document.getElementById('tbodyRoles')
const btn_Registrar = document.getElementById('btnRegistrarRoles')
const inputRol = document.getElementById('txtRol')

let listado_de_roles = []

const mostrar_datos_en_tabla_roles = async () => {
  listado_de_roles = await roles_BD()

  tbodyRoles.innerHTML = ''

  for (let i = 0; i < listado_de_roles.length; i++) {
    let fila = tbodyRoles.insertRow()

    let celda_nombre = (fila.insertCell().innerHTML =
      listado_de_roles[i]['nombre'])

    //crear un boton de edita para cada registro
    let celda_btn_editar = fila.insertCell()
    let boton = document.createElement('button')
    boton.innerText = 'Permisos'
    //boton.setAttribute('id', listado_de_roles[i]['_id'])
    boton.addEventListener('click', () => {
      localStorage.setItem('rolBuscado', listado_de_roles[i]['_id'])

      window.location.href = 'index_roles_permisos.html'
    })

    celda_btn_editar.appendChild(boton)
  }
}

function validarCamposVaciosRoles() {
  let error = false
  let campos_requeridos = document.querySelectorAll('#formulario [required]')

  for (let i = 0; i < campos_requeridos.length; i++) {
    if (campos_requeridos[i].value == '') {
      error = true
      campos_requeridos[i].classList.add('error')
    } else {
      campos_requeridos[i].classList.remove('error')
    }
  }
  return error
}

let obtener_datos_roles = () => {
  let error_campos_vacios = validarCamposVaciosRoles()

  if (error_campos_vacios) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos Vacios',
      text: 'Todos los campos son obligatorios',
    })
  } else {
    let rol = inputRol.value
    let id = registrar_rol(rol)
    if (id != 0) {
      let fila = tbodyRoles.insertRow()
      let celda_nombre = (fila.insertCell().innerHTML = rol)
      //crear un boton de edita para cada registro
      let celda_btn_editar = fila.insertCell()
      let boton = document.createElement('button')
      boton.innerText = 'Permisos'

      boton.addEventListener('click', () => {
        localStorage.setItem('rolBuscado', id)

        window.location.href = 'index_roles_permisos.html'
      })

      celda_btn_editar.appendChild(boton)
    }

    inputRol.value = ''

    inputRol.value = ''
  }
}

mostrar_datos_en_tabla_roles()

btn_Registrar.addEventListener('click', obtener_datos_roles)
