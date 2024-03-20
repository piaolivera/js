

// Funcion de tipo callback

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar (op1, op2, functionCallBack){
    let res = op1 + op2;
    functionCallBack(`Resultado: ${res} `)
}

sumar (5,3, imprimir);

//Llamadas asincronicas con uso setTimeout 
function miFuncionCallBack(){
    console.log('Saludo asincrono después de 3 segundos');
}

setTimeout(miFuncionCallBack, 3000); // después de 3 seg

setTimeout(function(){console.log('Saludo asincrono 2'), 4000});

setTimeout (() => console.log('Saludo asincrono 3'), 5000);


// FUNCION SET INTERVAL = setInterval().
let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj,1000); // 1 seg