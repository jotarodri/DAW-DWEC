function init() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(element => {
        element.addEventListener("input",comprobarInput);
        element.addEventListener("blur",comprobarInput);
    });
    let button = document.querySelector("button");
    button.addEventListener("click",comprobarDatos);
}

function comprobarInput() {
    console.log(this.value)
    let inputName = this.getAttribute('id');

    if (this.value == '') {

        document.getElementById('e' + inputName).classList.add('visible');
        this.classList.add('vacia');

    }else{
        document.getElementById('e' + inputName).classList.remove('visible');
        this.classList.remove('vacia');
    }
}

function comprobarDatos() {
    let inputs = document.querySelectorAll("input");

    let datosInput = [];

    inputs.forEach(input => {

        if(input.value != '') datosInput.push(input.value);
        
    });
    if(datosInput.length == 6){

        mostrarFicha(datosInput);

    }else{

        alert('Error. No se han completado todos los campos');
    }
}

function mostrarFicha(datos) {
    console.log(datos);
    let container = document.getElementById("contenedorFichas");

    container.innerHTML += 
        '<img src="'+datos[5]+'">'+
        '<div class="datos">'+
        '<div class="small cabecera">Nombre</div>'+
        '<div class="medium cabecera">Apellidos</div>'+
        '<div class="small dato">'+datos[0]+'</div>'+
        '<div class="medium dato">'+datos[1]+'</div>'+
        '<div class="medium cabecera">Padres</div>'+
        '<div class="small cabecera">Casa</div>'+
        '<div class="medium dato">'+datos[3]+'</div>'+
        '<div class="small dato">'+datos[2]+'</div>'+
        '<div class="big cabecera">Titulo</div>'+
        '<div class="big dato">'+datos[4]+'</div>'+
         '</div>'
}

window.onload = init;