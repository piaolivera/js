//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' '+ this.apellido;
    }
}


//agregar nueva propiedad
Persona.prototype.tel = '3556235977'

let padre = new Persona ('Juan', 'Perez', 'jperez@gmail.com');
console.log(padre);

let madre = new Persona ('Maria', 'Martinez', 'maria@gmail.com');
console.log(madre);

console.log(padre.tel);
console.log(madre.tel);

//cambiar el tel de el objeto padre
padre.tel = '21685688';
console.log(padre.tel);
console.log(madre.tel);


