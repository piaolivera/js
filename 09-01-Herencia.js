class Persona {
    static ContadorPersonas =0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.ContadorPersonas;

    }
    get idPersona (){
        return this._idPersona;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido (apellido){
        this._apellido = apellido
    }
    get edad (){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad
    }
    toString(){
        return `${this._idPersona}:
        ${this._nombre}
        ${this._apellido}, 
        ${this._edad}`;
    }
}


class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(sueldo, nombre, apellido, edad){
        super(nombre ,apellido, edad);
         this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
       
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo (sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }
}

class Cliente extends Persona {
    static contadorCliente =0;

    constructor ( fechaRegistro, nombre, apellido,edad){
        super (nombre, apellido,edad)
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}`;
    }
}

 
//Prueba clase persona
let persona = new Persona ('Amanda', 'Juarez', 32);
console.log(persona.toString());

let persona2 = new Persona('Carlos', 'Ramirez', 35);
console.log(persona2.toString());

//Prueba clase Empleado
let empleado1 = new Empleado(2000, 'Cesar', 'Pereyra', 45);
console.log(empleado1.toString());

let empleado2 = new Empleado(2000, 'Camila', 'Torres', 25);
console.log(empleado2.toString());

//Prueba clase Cliente 
let cliente1 = new Cliente (new Date(),'Miguel', 'Castro', 54 );
console.log(cliente1.toString());

let cliente2 = new Cliente (new Date(), 'Maria', 'Lara', 22);
console.log(cliente2.toString());