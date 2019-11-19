window.onload = function() {
    
document.querySelector("video").addEventListener("click",ejecutarVideo);
crearDivs();

}

function ejecutarVideo() {
    this.play();
}

function crearDivs() {
    
var containerVideos = document.getElementById("containerVideos");

for (let i = 0; i < 6; i++) {
    
    let div = document.createElement("div");
    div.classList.add("miniVideo");
    containerVideos.appendChild(div);

}

}
