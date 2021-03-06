var pausado = false;
var silenciado = false;

let countDown;

window.onload = function() {
        
    ponerAnuncio();
    countDown = 10; //segundo

let arrayVideos = document.querySelectorAll("#minivideo");

document.querySelector(".play").addEventListener("click",ejecutarVideo);
document.querySelector(".silenciar").addEventListener("click",silenciarVideo);
document.querySelector(".retroceder").addEventListener("click",retrocederVideo);
document.querySelector(".avanzar").addEventListener("click",avanzarVideo);
document.querySelector(".reiniciar").addEventListener("click",reiniciarVideo);
document.querySelector(".bajarvol").addEventListener("click",bajarVolumen);
document.querySelector(".subirvol").addEventListener("click",subirVolumen);

setInterval(cuentaAtras, 1000);


    arrayVideos.forEach(element => {
        element.addEventListener("click",cambiarVideo);
    });

}

function ejecutarVideo() {
    
    let video = document.querySelector("video");
    if (!pausado) {
        video.play();    
        pausado = true;
    }else{
        video.pause();
        pausado = false;
    }
    
}

function silenciarVideo() {
    
    let video = document.querySelector("video");
    
    if (!silenciado) {
        video.muted= true;
        silenciado = true;
    }else{
        video.muted = false;
        silenciado = false;
    }

}

function retrocederVideo() {
    
    let video = document.querySelector("video");

    video.currentTime -= 10;
}

function avanzarVideo() {
    
    let video = document.querySelector("video");

    video.currentTime += 10;
}

function reiniciarVideo() {
    
    let video = document.querySelector("video");

    video.currentTime = 0;
    video.play();
}

function bajarVolumen() {
    
    let video = document.querySelector("video");

    video.volume -= 0.1;
}

function subirVolumen() {
    
    let video = document.querySelector("video");

    video.volume +=0.1;
}


function cambiarVideo() {
   
    let videoActivo = document.querySelector("#videoMain");
    let videoActivosrc = videoActivo.src;
    let videoClickado =this.src;
    console.log(videoActivosrc);
    
    videoActivo.src = videoClickado;
    this.src = videoActivosrc;

    
    switch (videoActivosrc) {
        
        case "file:///home/daw/GitHub/DAW-DWEC/Multimedia/videos/sonic.mp4":     this.poster = "miniaturas/sonic.jpg";      break;
        
        case "file:///home/daw/GitHub/DAW-DWEC/Multimedia/videos/luffy.mp4":      this.poster = "miniaturas/luffy.jpeg";      break;
            
        case "file:///home/daw/GitHub/DAW-DWEC/Multimedia/videos/wow.mp4":     this.poster = "miniaturas/wow.jpg";       break;
        
        case "file:///home/daw/GitHub/DAW-DWEC/Multimedia/videos/avengers.mp4":     this.poster = "miniaturas/avengers.jpeg";       break;

        case "file:///home/daw/GitHub/DAW-DWEC/Multimedia/videos/thor.mp4":     this.poster = "miniaturas/thor.jpeg";       break;

    }


    videoActivo.load();
    videoActivo.play();
 

}


async function ponerAnuncio() {
    let divVideo = document.getElementById("videoActivo");
    let anuncio = document.createElement("div");
    anuncio.classList.add("anuncio");
    divVideo.appendChild(anuncio);

   
}

function cuentaAtras() {
    
let anuncio = document.getElementsByClassName("anuncio")[0];
anuncio.innerText = countDown;
    if (countDown != 0) {
        countDown--;

        anuncio.innerText = countDown;

    } else {
        let padre = document.getElementsByClassName("anuncio")[0].parentNode;

        padre.removeChild(document.getElementsByClassName("anuncio")[0]);

        
    }

}

