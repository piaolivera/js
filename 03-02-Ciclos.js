 //While

//let contador = 0;
 /*
 while (contador < 3){
    console.log(contador);
    contador++;
 }
console.log("Fin ciclo while");
*/

//DO WHILE
/*do{
    console.log(contador);
    contador ++;
}while (contador <3);
console.log("Fin ciclo do while");*/


//ciclo FOR
/**
for (let contador =0; contador <3; contador++){
    console.log(contador);
}
console.log("Fin del ciclo for");

 */



// PALABRA BREAK
/** 
for (let contador = 0; contador <=10; contador++){
    if (contador % 2 ==0){
        console.log (contador);
        break;
    }
    
}
console.log("Fin del ciclo for");
*/

//uso de la palabra CONTINUE


for (contador = 0; contador <=10; contador++){
    if ( contador % 2 !==0){
        continue; // Ir a la siguiente interaccion
    }
    else{
        console.log(contador);
    }
}

