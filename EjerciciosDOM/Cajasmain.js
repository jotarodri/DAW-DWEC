function hacerCircular(contenedor) {
    contenedor.style.borderRadius = "145px";
    contenedor.style.transition = "1s";

}


function hacerCuadrado(contenedor) {
    contenedor.style.borderRadius = "";

}


function perderSombra(contenedor) {

    contenedor.style.boxShadow = "none";

}

function recuperarSombra(contenedor) {
    contenedor.style.boxShadow = "7px 7px 7px black";
}

function sombraInterior(contenedor) {

    contenedor.style.boxShadow = "inset 7px 7px 7px 0px  ";



    contenedor.onnmousedown = "";
    contenedor.onmouseup = "";
    contenedor.onmouseout = "";
    contenedor.onmouseover = "";



}

function eliminarCuadrado(caja) {


}


function eliminarTransicion(boton) {



    boton.parentNode.classList.add('prueba');

    boton.style.display = "none";

    setTimeout(function() { boton.parentNode.remove() }, 3000);

}