// Concatenar cada valor de cada propiedad
let persona = {
    nombre : 'ROBERTO',
    apellido: 'Campos',
    email: 'campos@gmail.com',
    edad: 28,
    nombreCompleto: function(){ //ESTO ES UN MÉTODO/FUNCIÓN
        return this.nombre +' '+ this.apellido;
    }
}

console.log(persona.nombre + ', '+ persona.apellido);

//for in
for (nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let personaArray =Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);

