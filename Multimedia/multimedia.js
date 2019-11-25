var pausado = false;
var silenciado = false;

window.onload = function() {
        
let arrayVideos = document.getElementsByClassName(".miniVideo");

document.querySelector(".play").addEventListener("click",ejecutarVideo);
document.querySelector(".silenciar").addEventListener("click",silenciarVideo);
document.querySelector(".retroceder").addEventListener("click",retrocederVideo);
document.querySelector(".avanzar").addEventListener("click",avanzarVideo);
document.querySelector(".reiniciar").addEventListener("click",reiniciarVideo);
document.querySelector(".bajarvol").addEventListener("click",bajarVolumen);
document.querySelector(".subirvol").addEventListener("click",subirVolumen);
//document.querySelector(".miniVideo").addEventListener("click",ejemplo);

    arrayVideos.forEach(element => {
    element.addEventListener("click",ejemplo);
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


function ejemplo() {
    
let videoActivo = document.querySelector("#videoMain");
switch (this.id) {
    case "avengers":
            console.log("HOla avengers");
       // videoActivo.id = "avengersActivo";
        videoActivo.src = "videos/avengers.mp4";
        videoActivo.play();
        
       break;   
    case "falangista":
        console.log("HOla falangista");
            videoActivo.id = "falangistaActivo";
            videoActivo.src = "videos/falangista.mp4";
            videoActivo.play();
                
    break;
}

}