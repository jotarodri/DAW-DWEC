var hayNum;
var hayComa;
var haySigno;
var numCalculado; //Será el resultado que se actualizará cuando hayan 2 nums;
var signo;
var operacion;
var pantalla = document.getElementById("pantalla");

var num1;
var num2;



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
    esNum = true;





    if (!hayComa && numero == ".") {
        document.getElementById("pantalla").value += ".";
        hayComa = true;
    }

    if (numero == "+" && hayNum) {
        document.getElementById("pantalla").value += "+";
        signo = "+";
        hayNum = false;

    }

    if (numero == "-" && hayNum) {
        document.getElementById("pantalla").value += "-";
        signo = "-";
        hayNum = false;

    }
    if (numero == "x" && hayNum) {
        document.getElementById("pantalla").value += "x";
        signo = "x";
        hayNum = false;
    }

    if (numero == "/" && hayNum) {
        document.getElementById("pantalla").value += "/";
        signo = "/";
        hayNum = false;
    }

    if (numero == "%" && hayNum) {

        document.getElementById("pantalla").value += "%";
        signo = "%";
        hayNum = false;
    }

    /*if (numero == "C") {
        resetear();
    }

    if (numero == "«") {
        retroceder();
    }

    if (numero == "«") {
        retroceder();
    }*/




    if (numero != "." && numero != "+" && numero != "-" && numero != "/" && numero != "x" && numero != "%" && numero != "C" && numero != "«") {

        operacion = document.getElementById("pantalla").value;


        if (document.getElementById("pantalla").value == "0") {

            document.getElementById("pantalla").value = numero;

        } else {
            document.getElementById("pantalla").value += numero;
        }

        hayNum = true;

    }



    switch (numero) {

        case "C":
            resetear();
            break;

        case "«":
            retroceder();
            break;

        case "()":
            parentesis(operacion);
            break;

    }


    if (signo == "%" && numero == "=") {
        porcentaje(operacion, signo);
    } else if (numero == "=") {
        calcular(operacion, "%");
    }


}


//document.getElementById("pantalla")

function calcular(numero, signo) {


    numero = numero.replace("x", "*");

    numCalculado = eval(numero);
    document.getElementById("pantalla").value = numCalculado;
    num1 = numCalculado;

}

function resetear() {

    operacion = "";
    numCalculado = "";
    document.getElementById("pantalla").value = "0";


}

function retroceder() {

    document.getElementById("pantalla").value = document.getElementById("pantalla").value.slice(document.getElementById("pantalla").length, -1);
    if (document.getElementById("pantalla").value.length <= 0) {
        document.getElementById("pantalla").value = "0";
    }
}

function porcentaje(operacion, signo) {


    var num1 = operacion.split(["%"], 1);
    var aux = operacion.split(["%"], operacion.length);
    var num2 = aux[1];

    numCalculado = ((num1 * num2) / 100);
    document.getElementById("pantalla").value = numCalculado;
}

function parentesis(operacion) {
    operacion = "(" + operacion + ")";
    document.getElementById("pantalla").value = operacion;
}