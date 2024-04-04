// let autos = new Array('BMW', 'Mercedes Benz', ' Volvo'); // Yano se usa de esta manera
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);


console.log(autos[2]);

for (let i = 0; i < autos.length; i ++ ){
    console.log(i +': '+autos[i]);

}

//Modificacion de valores
autos [1] = 'MercedesBenz';
console.log(autos[1]);

//Agregar valores
autos.push('Audi');
console.log(autos);

// cantidad de elemtnos que tiene nuestro arreglo
console.log(autos.length);
autos[autos.length] ='Cadillac';
console.log(autos);

//Agregamos un elemnto, dejando un lugar vacio. Pero no es recomendable !!!!
autos[6]= 'Porshe';
console.log(autos);

autos[5] = 'Ford';
console.log(autos);


//Preguntar si es un array
console.log(typeof autos); // no nos sirve asi porq solo nos dice que es de tipo object

console.log(Array.isArray(autos)); //Esta es la manera de preguntar

console.log( autos instanceof Array); //Esta es otra forma de preguntar si es un arreglo
