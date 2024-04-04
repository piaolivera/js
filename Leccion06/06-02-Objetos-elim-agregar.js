let persona = {
    nombre : 'ROBERTO',
    apellido: 'Campos',
    email: 'campos@gmail.com',
    edad: 28,
    nombreCompleto: function(){ //ESTO ES UN MÉTODO/FUNCIÓN
        return this.nombre +' '+ this.apellido;
    }
}


//agregar nueva propiedad
persona.tel = '5268962';
console.log(persona);

//eliminas propiedad 
delete persona.tel;
console.log(persona);
