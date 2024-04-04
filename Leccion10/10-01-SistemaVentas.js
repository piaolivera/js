class Producto {
static contadorProducto =0;

constructor (nombre, precio){
    this._idProducto = ++Producto.contadorProducto;
    this._nombre = nombre;
    this._precio = precio;
}
get idProducto(){
    return this._idProducto;
}
get nombre(){
    return this._nombre;
}
set nombre(nombre){
    this._nombre = nombre;
}
get precio (){
    return this._precio;
}
set precio(precio){
    this._precio = precio;
}

toString(){
    return `
    idProducto: ${this._idProducto} ,
    nombre ${this._nombre}, 
    Precio: $ ${this._precio}`;
}

}


class Orden{
    static contadorOrdenes =0;
    
    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
       // this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //this._productos[this._contadorProductosAgregados++] = producto;
        }else{
            console.log("No se pueden agregar mas productos")
        }
    }
    calcularTotal(){
        let totalVentas =0;
        for(let producto of this._productos){
           totalVentas+= producto.precio;
        }
        return totalVentas;
    }
    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden +=producto.toString() +' ';
        }
        console.log(`Òrden: ${this._idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);

    }
    

}

//Prueba clase Producto
let producto1 = new Producto('Celular', 5000);
console.log(producto1.toString());

let producto2 = new Producto("Notebook", 10000)
console.log(producto2.toString())

let orden1 = new Orden ();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Tablet', 1000);
let producto4 = new Producto('Auriculares', 2000);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
let producto5 = new Producto('Mouse', 500);
orden2.agregarProducto(producto5);
let producto6 = new Producto('teclado', 2400);
orden2.agregarProducto(producto6) // no se puede agregar mas producto
orden2.mostrarOrden();
