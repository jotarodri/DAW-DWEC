function init() {
    mostrarFichas();
}

function mostrarFichas() {

fetch('http://localhost/GOT/got.json')
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    
    console.log(myJson);

    
});
}

window.onload = init;