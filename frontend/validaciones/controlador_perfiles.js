let btnperfil=document.getElementById("perfil")

const redireccion=()=>{
    let rol=JSON.parse(localStorage.getItem("rol"))[0].nombre;
    if (rol=="Admin"){
        window.location.href="index_perfil_admin.html";
    }else if (rol=="Cliente"){
        window.location.href="index_perfil_cliente.html";
    }else if (rol=="Secretaria"){
        window.location.href="index_perfil_secretaria.html";
    }else if (rol=="Veterinario"){
        window.location.href="index_perfil_doctor.html";
    }

}

btnperfil.addEventListener("click", redireccion)
