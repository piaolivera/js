class Persona {


    static contadorPersona =0; //Atributo de nuestra clase

    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersona <Persona.MAX_OBJ){
            this.idPersona= ++Persona.contadorPersona;
        }
        else{
            console.log('Se han superado el maximo de objetos permitidos')
        }
        
    }

    get nombre(){
        return this._nombre
    }
    
    set nombre (nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' '+this._nombre + ' ' + this._apellido;
    }
    toString (){
        return this.nombreCompleto();
    }
    static saludar (){
        console.log("Saludo desde el metodo static")
    }
    static saludar2(persona){
        console.log(persona.nombre + ' '+ persona.apellido);
    }
}


class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //SobreEscritura
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido +', '+ this._departamento;
    }

}



let persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Carlos'; // set nombre (metodo set permite cambiar el valor)
console.log(persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
//console.log(empleado1.toString());

console.log(Persona.contadorPersona);

let persona2 = new Persona ('Camila', 'Castro');
console.log(persona2.toString());


console.log(Persona.MAX_OBJ);

let persona3 = new Persona ('Lili', 'Pereyra');

let empleado2 = new Empleado ('Osvaldo', 'Torres');
console.log(empleado2.toString());

let empleado3 = new Empleado ('Sofia', 'Torres');
console.log(empleado3.toString());
