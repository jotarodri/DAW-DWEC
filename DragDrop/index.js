
let equipo;
var jugadores;

function establecerEquipo() {
    equipo = this.value;
    console.log(equipo);
    ponerImagen();
}

function ponerImagen(jugadores) {
    
    let posicion;

    for (let i = 0; i < jugadores.length; i++) {
        
        if (i == 0) posicion = 'porteria';
        if (i > 0 && i < 5) posicion = 'defensa';
        if (i > 4 && i < 10) posicion = 'medio';
        if (i > 8 && i < 11) posicion = 'delantera';
       

        let jugador = document.createElement("div");
       /* jugador.addEventListener('dragover', allowDrop);
        jugador.addEventListener('drop', drop);
        jugador.dataset.img = "yes";*/
        

        if (posicion == "porteria") {
            if (jugadores[i].posicion == "Portero") {
                let portero = document.getElementById("portero");
                jugador.setAttribute("id","portero");
                portero.addEventListener('dragover', allowDrop);
                portero.addEventListener('drop', drop);
                let imagenPortero = document.createElement("img");
                imagenPortero.addEventListener('dragstart', drag);
                imagenPortero.setAttribute('id', jugadores[i]._idjugador);
                imagenPortero.setAttribute("src", "img/"+jugadores[i].imagen);
                jugador.appendChild(imagenPortero);
                portero.appendChild(jugador);

            }
        }

        if (posicion == "defensa") {
            if (jugadores[i].posicion == "Defensa") {
                let defensas = document.getElementById("defensas");
                defensas.setAttribute("id","defensas");
                defensas.addEventListener('dragover', allowDrop);
                defensas.addEventListener('drop', drop);
                jugador.setAttribute("id","defensa"+i)
                let imagenDefensa = document.createElement("img");
                imagenDefensa.addEventListener('dragstart', drag);
                imagenDefensa.setAttribute('id', jugadores[i]._idjugador);
                imagenDefensa.setAttribute("src", "img/"+jugadores[i].imagen);
                jugador.appendChild(imagenDefensa);
                defensas.appendChild(jugador);
                

            }
        }

        if (posicion == "medio") {
            if (jugadores[i].posicion == "Centrocampista") {
                let medios = document.getElementById("medios");
                medios.setAttribute("id","medios");
                medios.addEventListener('dragover', allowDrop);
                medios.addEventListener('drop', drop);
                jugador.setAttribute("id","medio"+i)
                let imagenMedio = document.createElement("img");
                imagenMedio.addEventListener('dragstart', drag);
                imagenMedio.setAttribute('id', jugadores[i]._idjugador);
                imagenMedio.setAttribute("src", "img/"+jugadores[i].imagen);
                jugador.appendChild(imagenMedio);
                medios.appendChild(jugador);
                

            }
        }

        if (posicion == "delantera") {
            if (jugadores[i].posicion == "Delantero") {
                let delanteros = document.getElementById("delanteros");
                delanteros.setAttribute("id","delanteros");
                delanteros.addEventListener('dragover', allowDrop);
                delanteros.addEventListener('drop', drop);
                jugador.setAttribute("id","delantero"+i)
                let imagenDelantero = document.createElement("img");
                imagenDelantero.addEventListener('dragstart', drag);
                imagenDelantero.setAttribute('id', jugadores[i]._idjugador);
                imagenDelantero.setAttribute("src", "img/"+jugadores[i].imagen);
                jugador.appendChild(imagenDelantero);
                delanteros.appendChild(jugador);
                

            }
        }
        
    }
    
    
    for (let i = 0; i < 9; i++) {
        let pos = document.getElementById('banquillo');
        let jug = document.createElement('div');
       /* let defecto = document.getElementsByClassName("jugadoresB");
        defecto.addEventListener('dragover', allowDrop);
        defecto.addEventListener('drop', drop);
        defecto.setAttribute("id", "banquillo"+i);*/
    
        jug.addEventListener('dragover', allowDrop);
        jug.addEventListener('drop', drop);
        jug.setAttribute("id", "banquillo"+i);
        if (i != 4) {
            jug.classList.add('jugadoresB');
        }
        pos.appendChild(jug);
        
    }
    let posi = document.getElementById('banquillo');
    let separador = document.createElement("hr");
    posi.appendChild(separador);
  
}

function allowDrop(ev) {

    //Permitir que reciba algún elemento
   
        ev.preventDefault();
    
    
    
    }
    
    function drag(ev) {
    
    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);
    
    }
    
    function drop(ev) {
  console.log(ev.target.firstChild);
    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();
    
    //Guardamos el elemento, llamado "text" en una variable.
    var data = ev.dataTransfer.getData("text");
    
    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
        
        ev.target.appendChild(document.getElementById(data));
    
    
 
    }


function init() {
    //document.querySelector("select").addEventListener("change",establecerEquipo);
    
    let url = 'conexion.php';
  
    fetch(url)
        .then(function (response) {

            if (response.ok) {
                return response.json();

            } else {
                throw 'Error en la llamada';
            }
        })
        .then(jugadores => {
            
            jugadores = jugadores;
            ponerImagen(jugadores);
        });
       
}



window.onload = init;