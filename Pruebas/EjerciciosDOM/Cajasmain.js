function hacerCircular(contenedor) {
    contenedor.style.borderRadius = "145px";
    
}

function hacerCuadrado(contenedor) {
    contenedor.style.borderRadius = "";

}


function perderSombra(contenedor) {
    contenedor.style.boxShadow = "none";
}

function sombraInterior(contenedor) {
    contenedor.style.boxShadow = "7px 7px 7px 0px inset";
}

function eliminarCuadrado(caja){
    var contenedor = document.getElementById("contenedor");
    contenedor.removeChild(document.getElementById(caja));
}