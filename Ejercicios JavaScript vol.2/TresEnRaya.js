var arrayDivs = new Array();
var turno = true; //TRUE es para el humano, FALSE para la CPU
var random;
var aux;
window.onload = function(){
    crearTablero();
}

function crearTablero() {
    
    const tablero = document.querySelector(".container");

    for (let i = 0; i < 9; i++) {
        
    let casilla = document.createElement("div");
    
    arrayDivs.push(casilla);
    
    casilla.setAttribute("class","caja");
   
    tablero.appendChild(casilla);        
    
    casilla.addEventListener("click",turnoPersona);    
    
    }
}

function turnoPersona(e) {
    if (!this.classList.contains("x")&& !this.classList.contains("circulo")) {
    this.classList.add("x");    
    turnoCPU();
    }
}

function turnoCPU() {

     random = Math.floor(Math.random() * 9); 
    
        if (!arrayDivs[random].classList.contains("x")&& !arrayDivs[random].classList.contains("circulo")) {

            arrayDivs[random].classList.add("circulo");

        }else{
            turnoCPU();
        }   
}
   