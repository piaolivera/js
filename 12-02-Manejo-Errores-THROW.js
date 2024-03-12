'use strict'
let resultado = '';

try {
    if (isNaN(resultado)) throw 'No es un número';
    else if (resultado === '') throw 'Es cadena vacia';
    else if (resultado >=0) throw 'Valor positivo'

}catch(error){
    console.log(error);
    //console.log(error.name);
    //console.log(error.message)
}
finally{
    console.log('Termina la recisión de errores.')
}