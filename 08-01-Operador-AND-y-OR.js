//EJEMPLO AND (&&), regresa true solo si las dos condiciones son true

let a = 5;
let valMin =0, valMax= 10;

if (a >= valMin && a<= valMax){
    console.log("Dentro de rango");
}
else{
    console.log("Fuera de rango")
}

//EJEMPLO OR(||), REGRESA TRUE SI CUALQUIER CONDICION ES TRUE

let vacaciones = false, diaDescanso = false;

if (vacaciones  || diaDescanso){
    console.log("Puede ir a ver jugar a su hijo");
}
else{
    console.log("No puede ir a ver jugar a su hijo");
}
