class Persona {
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
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
        return this._nombre + ' ' + this._apellido;
    }
    toString (){
        return this.nombreCompleto();
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
console.log(empleado1.toString());




