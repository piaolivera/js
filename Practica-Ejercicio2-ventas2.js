/**
 * Crea una clase Producto con propiedades como nombre, precio y cantidad disponible.
Crea una clase CarritoDeCompras que pueda almacenar una lista de productos.
La clase CarritoDeCompras debería tener métodos para agregar productos, 
eliminar productos, calcular el total de la compra y mostrar los productos en el carrito.
 */

class Producto {
    static contadorProductos =0;

    constructor (nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){ 
        return `
        ${this._idProducto} :
        ${this._nombre} 
        $ ${this._precio}`;
    }

}

class CarritoDeCompras{
    static contadorOrdenes =0;

    static get MAX_PRODUCTOS(){
        return 3;
    }
    constructor(){
    this._productos= [];
    this._idOrden = ++CarritoDeCompras.contadorOrdenes;
    }
    agregarProductos(producto){
        if (this._productos.length < CarritoDeCompras.MAX_PRODUCTOS){
            this._productos.push(producto);
        }
        else{
            console.log('Superaste el maximo de productos');
        }
    }
    eliminarProductos(idProducto){
        this._productos = this._productos.filter(producto => producto.idProducto !== idProducto);
    }
    calcularTotal(){
        let totalVentas =0;
        for (let producto of this._productos){
            totalVentas += producto.precio;
        }
        return totalVentas;
    }
    mostrarOrden(){
        let productosOrden =' ';
        for(let producto of this._productos){
            productosOrden += producto.toString()+ ' ';
        }
        console.log(`Òrden: ${this._idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);

    }

}

let producto1 = new Producto('Camisa', 1000);
console.log(producto1.toString());

let producto2 = new Producto('Pantalon', 1500);
console.log(producto2.toString());

let carrito = new CarritoDeCompras();
carrito.agregarProductos(producto1);
carrito.agregarProductos(producto2);
carrito.mostrarOrden()

carrito.mostrarOrden()
