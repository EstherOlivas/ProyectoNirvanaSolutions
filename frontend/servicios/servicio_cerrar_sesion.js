const btn_cerrar_sesion=document.getElementById("btn_cerrar_sesion");

const cerrar_sesion=()=>{
    console.log("entro");
    localStorage.clear();
    window.location.href="index-MokaLandingPage.html";

}

btn_cerrar_sesion.addEventListener("click",cerrar_sesion);