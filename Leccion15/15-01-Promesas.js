let miPromesa = new Promise((resolver, rechazar) =>{
    let expresion = true;
    if ( expresion)
        resolver('Resolvió correcto');
    else
        rechazar('Se produjo un error');
});

/**miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);**/

/**miPromesa
.then(valor => console.log(valor))
.catch(error=> console.log(error));**/

let promesa = new Promise((resolver)=>{
  //  console.log('Inicio de la promesa');
    setTimeout( ()=>resolver("Saludos con promesa y timeout"),3000);
   // console.log('fin promesa');
});

//promesa.then(valor => console.log(valor));

//async indica que una funci+on regresa una promesa
async function miFuncionConPromesa(){
    return 'Saludos con promesa y async';
}

//miFuncionConPromesa().then(valor => console.log(valor));

//async/await
async function FuncionConPromesaYAwait(){
    let miPromesa = new Promise(resolver =>{
        resolver('Promesa con await');
    });
    console.log(await miPromesa);
}
//FuncionConPromesaYAwait();

// promesa , await, async y setTimeout
async function funcionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolver =>{
        setTimeout(()=> resolver('promesa con await y timeout'),3000);
    });
    console.log(await miPromesa);

}
funcionConPromesaAwaitTimeout();
