 export  class Cliente{

    constructor(nombre, dni, direccion, telefono ){

        this.nombre = nombre;
        this.dni = dni;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    getNombre () {
        return "El nombre del cliente es= " + this.nombre;
    } 


}

export default class Libro{

    constructor( titulo, autor, pais, isbn){

        this.titulo = titulo;
        this.autor = autor;
        this.pais = pais;
        this.isbn = isbn;

    }


     getTitulo () {
        return "El titulo del libro es= " + this.titulo;
    } 



}    
 
   