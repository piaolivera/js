//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' '+ this.apellido;
    }
}

let padre = new Persona ('Juan', 'Perez', 'jperez@gmail.com');
console.log(padre);

let madre = new Persona ('Maria', 'Martinez', 'maria@gmail.com');
console.log(madre);

padre.nombre = 'Carlos';
console.log(padre);

console.log(madre);

console.log(madre.nombreCompleto());
console.log(padre.nombreCompleto());

let miObjeto = new Object();// no es tan recomendable
let miObjeto2 ={} // es recomendable este

