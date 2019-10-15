var hayNum;
var hayComa;
var haySigno;
var numCalculado; //Será el resultado que se actualizará cuando hayan 2 nums;
var signo;
var operacion;

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

    if ( numero == "+" && hayNum) {
        num1 = document.getElementById("pantalla").value;
        document.getElementById("pantalla").value += "+";
        signo = "+";
        hayNum = false;
      
    }

    if ( numero == "-" && hayNum) {
        num1 = document.getElementById("pantalla").value;
        document.getElementById("pantalla").value += "-";
        signo = "-";
        hayNum = false;

    } if ( numero == "x" && hayNum) {
           num1 = document.getElementById("pantalla").value;
        document.getElementById("pantalla").value += "x";
        signo = "x";
        hayNum = false;
    }

    if ( numero == "/" && hayNum) {
        num1 = document.getElementById("pantalla").value;
        document.getElementById("pantalla").value += "/";
        signo = "/";
        hayNum = false;
    }

    if ( numero == "%" && hayNum) {
        num1 = document.getElementById("pantalla").value;
        document.getElementById("pantalla").value += "%";
        signo = "%";
        hayNum = false;
    }

 if (numero != "." && numero != "+" && numero != "-" && numero != "/" && numero != "x" && numero != "%") {
    
    num2 = document.getElementById("pantalla").value.split([signo],[document.getElementById("pantalla").value.length]);
   
    if (document.getElementById("pantalla").value == "0") {

        document.getElementById("pantalla").value = numero;
        
    } else {
        document.getElementById("pantalla").value += numero;
    } 
      
    hayNum = true;
    
   }

   if (numero == "=") {
       calcular(num1,signo, num2[1]);
   }

 
    calcularSegundoPlano(num1,signo, num2[1]);
   
 }




function calcular(num1,signo, num2){
    
    switch (signo) {
        case "+":
            numCalculado = parseInt(num1) + parseInt(num2);
        break;
    
        case "-":
            numCalculado = num1 - num2;
        break;

        case "x":
            numCalculado = num1 * num2;
        break;

        case "/":
            numCalculado = num1 / num2;
        break;

        case "%":
            numCalculado = num1 % num2;
        break;
    }

    //document.getElementById("pantalla").value =numCalculado;
    console.log(numCalculado);
    num1 = numCalculado;
    numCalculado = "";
}


function calcularSegundoPlano(num1,signo, num2){
    switch (signo) {
        case "+":
            numCalculado = parseInt(num1) + parseInt(num2);
        break;
    
        case "-":
            numCalculado = num1 - num2;
        break;

        case "x":
            numCalculado = num1 * num2;
        break;

        case "/":
            numCalculado = num1 / num2;
        break;

        case "%":
            numCalculado = num1 % num2;
        break;
    }

   
    console.log(numCalculado);
}
