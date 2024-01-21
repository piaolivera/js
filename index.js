/* Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz"*/


let fizzbuzz =0, fizz=0, buzz=0;

for(let numero =1; numero <= 100; numero++){
     if( numero % 3 === 0 && numero % 5=== 0){
        fizzbuzz++;
        console.log("Fizzbuzz (Multiplos de 3 y 5): "+numero);
    }else if(numero % 3 === 0){
        fizz++;
        console.log("Fizz (Multiplos de 3): "+numero);
    }else if(numero % 5 === 0){
        buzz++;
        console.log("Buzz(Multiplos de 5): "+numero);
    }
    else{
        console.log(numero);
    }
}
console.log("Cantidad de fizzbuzz: "+fizzbuzz);
console.log("Cantidad de fizzbuzz: "+fizz);
console.log("Cantidad de fizzbuzz: "+buzz);
