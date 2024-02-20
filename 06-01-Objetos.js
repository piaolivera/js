

//OBJETOS
let persona = {
    nombre : 'Juan',
    apellido: 'Perez',
    email: 'jperz@gmail.com',
    edad: 28,
    nombreCompleto: function(){ //ESTO ES UN MÉTODO/FUNCIÓN
        return this.nombre +' '+ this.apellido;
    }
}


console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());


let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.telefono = '5622836';

console.log(persona2.telefono);

//TAMBIÉN PODEMOS  ACCEDER AL ELEMENTO USANDO [], COMO SI FUERA UN ARREGLO

console.log( persona['apellido']);

//accedemos al elemento utilizando el ciclo for

let persona3 = {
    nombre : 'ROBERTO',
    apellido: 'Campos',
    email: 'campos@gmail.com',
    edad: 28,
    nombreCompleto: function(){ //ESTO ES UN MÉTODO/FUNCIÓN
        return this.nombre +' '+ this.apellido;
    }
}
// FOR IN
for (nombrePropiedad in persona3){ // recorremos el objeto
    console.log(nombrePropiedad);
    console.log(persona3[nombrePropiedad]); 
}

