/*let miFuncionFlecha = () => {
    console.log("Saludos desde mi funcion flecha.")
}

miFuncionFlecha();
*/


//const miFuncionFlecha= () =>  console.log("Saludos desde mi funcion flecha.");

//miFuncionFlecha();

/*const saludar = ()=> {
    return 'Saludos desde mi función flecha'
}
*/

const saludar =() => 'Saludos desde mi función flecha';
console.log(saludar());

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'Lara'}); //Regresamos un objeto poniendo los parentesis() antes.
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos con parametros');

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
} 

const funcionConParametros2 = (op1, op2)=> {
    let resultado = op1 +op2
    return resultado;
};
console.log(funcionConParametros2(3,5));

