
// DECLARACION DE LA FUNCION.
function miFuncion(a, b){
    return a + b;
}


// 2) llamamos la funcion
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaracion de una funcion tipo expresion 
let x = function (a, b){return a + b};
resultado = x(1,2);
console.log(resultado);

(function(a, b){
    console.log("Ejecutando la funcion: " +(a+b));
})(3, 4); // con los parentesis llamamos la funcion y se ejecuta. en el caso
// de no colocar los parentesis, no se ejecuta el console.log.

