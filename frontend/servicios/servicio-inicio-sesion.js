const validar_usuario= async(pcorreo,pcontrasenna)=>{
    await axios({
        method:"post",
        url:"http://localhost:8000/api/validar_credenciales",
        responseType:"json",
        data:{
            correo:pcorreo,
            contrasenna:pcontrasenna
        }
    }).then((res)=>{
        if(res.data.resultado==false){
            Swal.fire({
                title:"Datos incorrectos",
                text:"La contraseña o el correo son incorrectos",
                icon:"warning"
            });


        }else{
            sessionStorage.setItem("conectado",res.data.resultado);
            /* sessionStorage.setItem("rol","res.data.usuario.rol"); */
            /* sessionStorage.setItem("rol","admin"); */
            window.location.href="index-MokaLandingPage-SI.html";
            Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "Datos correctos",
            });
        }
    })
}