 let miNumero = "10";
 //console.log(typeof miNumero);

 let edad = Number(miNumero);
 console.log(typeof edad);

 if (edad >= 18){
    console.log("La persona puede votar");
 }
 else{
    console.log("Muy joven para votar");
 }

//  mismo ejercicio en ternario
 persona = (edad >= 18) ? "Puede votar" : "Es muy joven para votar";
 console.log(persona);