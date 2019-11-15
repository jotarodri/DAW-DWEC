window.onload = function() {
    
document.querySelector("video").addEventListener("click",ejecutarVideo);

}

function ejecutarVideo() {
    this.play();
}