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
        return this._idPersona + ': '+ this._nombre + ' '+ this._apellido + ', ' + this._edad;
    }
}


class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad,sueldo){
        super(nombre,apellido,edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }
    get _idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo (sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return this._idPersona + ': '+ this._nombre + ' '+ this._apellido + ', ' + this._edad + ' salario: '+this._sueldo;
    }
}

class Cliente extends Persona {
    static contadorCliente =0;
    constructor (nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return this._idPersona + ': '+ this._nombre + ' '+ this._apellido + ', ' + this._edad +' '+this._fechaRegistro;
    }
}

let cliente = new Date(Cliente)

let persona = new Persona ('Amanda', 'Juarez', 32);
console.log(persona.toString());

let empleado = new Empleado('Lucas', 'Lopez', 25, 1000);
console.log (empleado.toString());