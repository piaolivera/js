//Tipo de dato String
var nombre = "Carlos";
console.log(nombre);

//Reutilizacion de una variable
nombre = 10;
console.log(nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "265545"
}

console.log(objeto);
console.log(typeof objeto);

//Tipo de dato boolean 
var bandera = true;
console.log(bandera);

//Tipo de dato función

function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una funcion
class Persona {
    constructor(nombre, apellido){
       this.nombre = nombre; 
       this.apellido = apellido;
    }   
}
console.log(typeof Persona);


//Tipo undefine
var x;
console.log(x);

x = undefined;
console.log(x)

//null = ausencia de valor, es un tipo object
var y = null;
console.log(y);

//Array, son de tipo object
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
