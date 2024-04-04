 let mes = 1;
 let estacion;

 if ( mes == 1 || mes == 2 || mes ==12){
    estacion = "Verano";
 }
 else if ( mes == 3 || mes== 4 || mes ==5){
    estacion = "Otoño";
 }
 else if (mes == 6 || mes == 7 || mes == 8){
    estacion = "Invierno";
}
else if (mes == 9 || mes == 10 || mes == 11){
    estacion = "Primavera";
}

 else{
    estacion = "Ese mes no existe";
 }
 console.log(estacion);

/*
EJERCICIO 2:
6AM-11AM - BUENOS DIAS
12PM- 18PM - BUENAS TARDES
19- 24PM - BUENAS NOCHES
0AM- 6AM- DURMIENDO
*/
let hora = 12;
let mensaje;
if ( hora >=6 && hora <= 11){
    mensaje = "Buenos días..";
}
else if (hora >= 12 && hora <= 18){
    mensaje= "Buenas tardes..";
}
else if (hora >= 19 && hora <= 24){
    mensaje = "Buenas noches..";
}
else if (hora >= 0 && hora <= 6){
    mensaje = "Durmiendo ...";
}
else{
    mensaje = "Horario incorrecto."
}
console.log(mensaje);

