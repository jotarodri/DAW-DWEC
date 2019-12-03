function descargar(metodo, ruta, envio, xml, funcion) {
    // Obtener la instancia del objeto XMLHttpRequest
    let peticion_http = new XMLHttpRequest();
    // Preparar la función de respuesta
    peticion_http.onreadystatechange = mostrar;
    // Realizar petición HTTP
    peticion_http.open(metodo, ruta,
        true);
    peticion_http.send(envio);

    function mostrar() {
        if (peticion_http.readyState == 4 && peticion_http.status == 200) {
            //alert(peticion_http.responseText);
            if (xml) funcion(peticion_http.responseXML);
            else return peticion_http.responseText;
        }
    }
}
//var json = JSON.parse(descargar());