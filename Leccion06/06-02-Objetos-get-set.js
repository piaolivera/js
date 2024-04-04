let persona = {
    nombre : 'Juan',
    apellido: 'Perez',
    email: 'jperz@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase(); //convertimos de minuscula a mayuscula
    },
    set lang(lang){
        this.idioma = lang.toUpperCase(); // set = modificamos 
    },
    get nombreCompleto(){ // get =obtener . obtenemos informacion del objeto
        return this.nombre +' '+ this.apellido;
    }

}

console.log(persona.nombreCompleto);

console.log(persona.lang);

persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);