/**
 * Clase Vehículo y Concesionario:

1)Crea una clase Vehículo con propiedades como marca, modelo, año de fabricación y precio.
Crea una clase Concesionario que pueda almacenar una lista de vehículos en venta.
La clase Concesionario debería tener métodos para agregar vehículos, 
vender vehículos, mostrar todos los vehículos en venta y calcular el total de ventas.
 
 */

class Vehiculo{
    static contadorVehiculos =0;

    constructor(marca, modelo, anio, precio){
        this.idVehiculos = ++Vehiculo.contadorVehiculos;
        this._marca = marca;
        this._modelo = modelo;
        this._anio = anio;
        this._precio = precio;
    }
    get marca (){
        return this._marca;
    }
    set marca (marca){
        this._marca = marca;
    }
    get modelo (){
        return this._modelo;
    }
    set modelo (modelo){
        this._modelo = modelo;
    }
    get anio (){
        return this._anio;
    }
    set anio (anio){
        this._anio = anio;
    }
    get precio (){
        return this._precio;
    }
    set precio (precio){
        this._precio = precio;
    }
    toString (){
        return this._marca + ' '+this._modelo + ' '+this._anio + ' '+this._precio;
    }

    
}
class Consecionario {
    static contadorCompras =0;

    static get MAX_VEHICULOS(){
        return 5;
    }
    constructor(){
        this._idVehiculo = ++Consecionario.contadorCompras;
        this._vehiculos = [];
    }

    agregarProductos(producto){
        if (this._vehiculos.length < Consecionario.MAX_VEHICULOS){
            this._vehiculos.push(producto);
        }else {
        console.log("No se pueden agregar mas productos")
    }
    }
    totalVenta (){
        let totalVenta =0;
        for (let vehiculo of this._vehiculos){
            totalVenta += vehiculo.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden =0;
        for (let vehiculo of this._vehiculos){
            productosOrden += vehiculo.toString()+ '';
        }
        console.log(`Total: ${this.totalVenta()}, Productos: ${productosOrden}`);
    }
    
}



let vehiculo1 = new Vehiculo('Ford', 'Focus', '2015', 4000);
console.log(vehiculo1.toString());

let vehiculo2 = new Vehiculo('Chevrolet', 'Onix', 2020, 6000);
console.log(vehiculo2.toString());

let orden1 = new Consecionario();
orden1.agregarProductos(vehiculo1);
//let orden2 = new Consecionario();
orden1.agregarProductos(vehiculo2);

orden1.mostrarOrden();