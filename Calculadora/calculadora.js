window.onload = function() {

    let arrayBotones = document.getElementsByClassName("boton");

    for (let i = 0; i < arrayBotones.length; i++) {
        arrayBotones[i].addEventListener("mousedown", sombraBoton);
        arrayBotones[i].addEventListener("mouseup", quitarSombra);
    }

}

function sombraBoton(boton) {

    console.log(boton);
    this.style.boxShadow = "inset 5px 5px 5px black";

}