window.onload = function() {

    let arrayBotones = document.getElementsByClassName("boton");

    for (let i = 0; i < arrayBotones.length; i++) {
        arrayBotones[i].addEventListener("mousedown", sombraBoton);
        arrayBotones[i].addEventListener("mouseup", quitarSombra);
        arrayBotones[i].addEventListener("click", insertarNumero);
    }

}

function sombraBoton(boton) {

    this.style.boxShadow = "inset 5px 5px 5px black";

}

function quitarSombra(boton) {

    this.style.boxShadow = "";

}

function insertarNumero(boton) {

    var numero = this.innerText;

    if (numero == ".") {
        comprobarComa(boton);
    }



    if (document.getElementById("pantalla").value == "0") {

        document.getElementById("pantalla").value = numero;

    } else {
        document.getElementById("pantalla").value += numero;
    }





}


function comprobarComa(boton) {

    var numero = this.innerText;
    hayComa = false;

    if ((numero == ".") && (hayComa == false)) {
        document.getElementById("pantalla").value += numero;
        hayComa = true;
    }

}