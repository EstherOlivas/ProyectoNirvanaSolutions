const tbodyPermisosRol = document.getElementById('tbodyPermisosRol')
const selectPermisos = document.querySelector('#selectPermisos')
const btn_RegistrarPermisosRol = document.getElementById(
  'btnRegistrarPermisoRol'
)

let listado_permisos_select = []
let temp_listado_permisos_select = []
let lista_permisos_rol = []

const cargar_select_permisos = async () => {
  listado_permisos_select = await permisos_BD()

  selectPermisos.innerHTML = ''

  var option = document.createElement('option')
  option.value = ''
  option.text = 'Seleccione un permiso'
  selectPermisos.appendChild(option)

  cargaListaTemporal()

  for (let i = 0; i < temp_listado_permisos_select.length; i++) {
    var option = document.createElement('option')
    option.value = temp_listado_permisos_select[i]['_id']
    option.text = temp_listado_permisos_select[i]['nombre']
    selectPermisos.appendChild(option)
  }
}

const listar_permisos_rol = async () => {
  let nombre = localStorage.getItem('rolBuscado')

  rol = await rol_BD(nombre)

  if (rol != null) {
    lista_permisos_rol = rol.permisos

    tbodyPermisosRol.innerHTML = ''

    for (let i = 0; i < lista_permisos_rol.length; i++) {
      let fila = tbodyPermisosRol.insertRow()

      let celda_nombre = (fila.insertCell().innerHTML =
        lista_permisos_rol[i]['nombre'])

      //crear un boton de edita para cada registro
      // let celda_btn_editar = fila.insertCell()
      // let boton = document.createElement('button')
      // boton.innerText = 'Permisos'
      // boton.setAttribute('id', listado_de_roles[i]['_id'])
      // boton.addEventListener('click', () => {
      //   console.log('rol', listado_de_roles[i]['_id'])
      //   window.location.href = 'editar-rol.html'
      // })

      //celda_btn_editar.appendChild(boton)
    }
    cargar_select_permisos()
  }
}

function cargaListaTemporal() {
  let cont = 0
  let existe = false

  if (lista_permisos_rol != null) {
    for (let i = 0; i < listado_permisos_select.length; i++) {
      for (let j = 0; j < lista_permisos_rol.length; j++) {
        if (
          lista_permisos_rol[j].nombre === listado_permisos_select[i].nombre
        ) {
          existe = true
          break
        }
      }
      if (!existe) {
        temp_listado_permisos_select[cont] = listado_permisos_select[i]
        cont++
      }
      existe = false
    }
  } else {
    temp_listado_permisos_select = listado_permisos_select
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

let guardar_datos_permiso_rol = async () => {
  let error_campos_vacios = validarCamposVaciosRoles()

  if (error_campos_vacios) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos Vacios',
      text: 'Todos los campos son obligatorios',
    })
  } else {
    let rol = localStorage.getItem('rolBuscado')

    let permiso = selectPermisos.options[selectPermisos.selectedIndex].text

    let fila = tbodyPermisosRol.insertRow()
    let celda_nombre = (fila.insertCell().innerHTML = permiso)

    await registrar_permiso_rol(rol, permiso)

    lista_permisos_rol[lista_permisos_rol.length] = { nombre: permiso }

    selectPermisos.innerHTML = ''
    cargar_select_permisos()
  }
}

listar_permisos_rol()

btn_RegistrarPermisosRol.addEventListener('click', guardar_datos_permiso_rol)
