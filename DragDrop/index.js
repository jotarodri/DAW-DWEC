
let equipo;
var jugadores;

function establecerEquipo() {
    equipo = this.value;
   // console.log(equipo);
    ponerImagen();
}

function ponerImagen(jugadores) {
    console.log(jugadores);
    let posicion;

    for (let i = 0; i < jugadores.length; i++) {
        
        if (i == 0) posicion = 'porteria';
        if (i > 0 && i < 5) posicion = 'defensa';
        if (i > 4 && i < 10) posicion = 'medio';
        if (i > 8 && i < 11) posicion = 'delantera';
       

        let jugador = document.createElement("div");
       /* jugador.addEventListener('dragover', allowDrop);
        jugador.addEventListener('drop', drop);*/
        jugador.dataset.img = "yes";
        
        if (jugadores[i].estado != "banquillo") {
       

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
                jugador.setAttribute("class","jugador")
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
                jugador.setAttribute("id","delantero"+i);
                
                let imagenDelantero = document.createElement("img");
                imagenDelantero.addEventListener('dragstart', drag);
                imagenDelantero.setAttribute('id', jugadores[i]._idjugador);
                imagenDelantero.setAttribute("src", "img/"+jugadores[i].imagen);
                jugador.appendChild(imagenDelantero);
                delanteros.appendChild(jugador);
                

            }
        }

        }else{
            mostrarJugadoresBanquillo(jugadores,posicion);
        }
        
    }
    
    
   
   
  
}

function allowDrop(ev) {

    //Permitir que reciba algún elemento
   //console.log(ev.target.parentNode.dataset.img);
   if (ev.target.parentNode.dataset.img != "yes") {
    ev.preventDefault();
   }
       
    
    
    
    }
    
    function drag(ev) {
    
    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);
    
    }
    
    function drop(ev) {
   //console.log(ev.target.dataset.img);
    //console.log(ev.target.classList.value);
 
    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();
    
    //Guardamos el elemento, llamado "text" en una variable.
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
        
            ev.target.appendChild(document.getElementById(data));
           // ev.target.dataset.img = "no";
            if (ev.target.classList.value == "jugadoresB") {
                //SE ENVIAN AL BANQUILLO 
                ev.target.dataset.img = "no";
                actualizarBaseDeDatos(data,"banquillo");
            }else{
                //SE PONEN DE TITULARES
                ev.target.classList.value = "yes";
                actualizarBaseDeDatos(data,"titular");
            }
            
       
    
 
    }

    function actualizarBaseDeDatos(id,estado) {
        let url = 'modifyDatabase.php';
    let data = new FormData();

    data.append('id', id);
    data.append('estado', estado);

    fetch(url, {
        method: 'POST',
        body: data
    })
        .then(async function (response) {
            if (response.ok) {
                return await response.text();
            } else {

                throw "Error en la llamada al carrito";
            }
        
        })
        .then(ponerImagen);
    }

function mostrarJugadoresBanquillo(jugadores,posicion) {
    
let banquillo = document.getElementsByClassName("jugadoresB");
let img;
let imgJugador;

for (let i = 0; i < jugadores.length; i++) {

    if (posicion == "porteria") {
        if (jugadores[i].posicion == "Portero" && jugadores[i].estado == "banquillo") {
            img = jugadores[i].imagen;
            imgJugador = document.createElement("img");
           imgJugador.setAttribute("src","img/"+img);
           imgJugador.setAttribute("id",jugadores[i]._idjugador);
           imgJugador.addEventListener('dragstart', drag);
        }
    }

    if (posicion == "defensa") {
        if (jugadores[i].posicion == "Defensa"&& jugadores[i].estado == "banquillo") {
            img = jugadores[i].imagen;
            imgJugador = document.createElement("img");
           imgJugador.setAttribute("src","img/"+img);
           imgJugador.setAttribute("id",jugadores[i]._idjugador);
           imgJugador.addEventListener('dragstart', drag);

        }
    }

    if (posicion == "medio") {
        if (jugadores[i].posicion == "Centrocampista"&& jugadores[i].estado == "banquillo") {
           img = jugadores[i].imagen;
         imgJugador = document.createElement("img");
        imgJugador.setAttribute("src","img/"+img);
        imgJugador.setAttribute("id",jugadores[i]._idjugador);
        imgJugador.addEventListener('dragstart', drag);
        }
    }

    if (posicion == "delantera") {
        if (jugadores[i].posicion == "Delantero"&& jugadores[i].estado == "banquillo") {
            img = jugadores[i].imagen;
         imgJugador = document.createElement("img");
        imgJugador.setAttribute("src","img/"+img);
        imgJugador.setAttribute("id",jugadores[i]._idjugador);
        imgJugador.addEventListener('dragstart', drag);

        }
    }
  
    
}

for (let i = 0; i < banquillo.length; i++) {
         
    if (banquillo[i].firstChild== null) {
        banquillo[i].appendChild(imgJugador);
    }

    
}
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
        for (let i = 0; i < 9; i++) {
            let pos = document.getElementById('banquillo');
            let jug = document.createElement('div');
        
            jug.addEventListener('dragover', allowDrop);
            jug.addEventListener('drop', drop);
            jug.setAttribute("id", "banquillo"+i);
            if (i != 4) {
                jug.classList.add('jugadoresB');
            }
            pos.appendChild(jug);
            
        }
}



window.onload = init;