let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto : function(titulo, tel){
        return titulo+' '+ this.nombre + ' '+ this.apellido +', '+ tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//uso de APPLY para usar
// el metodo persona1.nombreCompleto con los datos de persona2

console.log(persona1.nombreCompleto('Lic', '355125'));

let arreglo = ['Ing', '656265']
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
