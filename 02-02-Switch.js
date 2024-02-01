
// EJERCICIO 1
let numero = 3;

 let numeroTexto = "valor desconocido";

 switch(numero){
    case 1:
        numeroTexto = 'Numero uno';
        break;
    case 2:
        numeroTexto = 'Numero dos';
        break;
    case 3:
        numeroTexto = 'Numero tres';
        break;
    case 4:
        numeroTexto = 'Numero cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
 }
 console.log(numeroTexto);


 //EJERCICIO 2
 let mes = 4;
 let estacion = 'Estacion desconocida';

 switch(mes){
    case 1: case 2: case 12:
        estacion = 'Verano';
        break;
    case 3: case 4: case 5:
        estacion= 'Otoño';
        break;
    case 6: case 7: case 8:
        estacion = 'Invierno';
        break;
    case 9: case 10: case 11:
        estacion = 'Primavera';
        break;
    default:
        estacion = 'Valor incorrecto';    
 }
 console.log(estacion);


