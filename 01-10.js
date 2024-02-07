 let miNumero = "18";
 //console.log(typeof miNumero);

 let edad = Number(miNumero);
 console.log( edad);

if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    if (edad >= 18){
    console.log("La persona puede votar");
 }
 else{
    console.log("Muy joven para votar");
 }
}
if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    //  mismo ejercicio en ternario
    persona = (edad >= 18) ? "Puede votar" : "Es muy joven para votar";
    console.log(persona);
}

 

