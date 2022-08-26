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
            localStorage.setItem("conectado",res.data.resultado);
            localStorage.setItem("rol",res.data.usuario.rol);
            window.location.href="index-MokaLandingPage-SI.html";
            Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "Datos correctos",
            });
        }
    })
}