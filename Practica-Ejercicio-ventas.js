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

    
}
class Consecionario {
    static contadorCompras =0;

    static get MAX_VEHICULOS(){
        return 5;
    }
    constructor(){
        this.idVehiculo = ++Consecionario.contadorCompras;
        this._vehiculo = [];
    }

    agregarProductos(producto){
        if (Vehiculo.length < MAX_VEHICULOS){
            this._vehiculo.push(Vehiculo);
        }else {
        console.log("No se pueden agregar mas productos")
    }
    }

    
}


/**
 * Crea una clase Libro con propiedades como título, autor, número de páginas, y una propiedad para el estado del libro (por ejemplo, prestado/disponible).
Crea una clase Biblioteca que pueda almacenar una lista de libros.
La biblioteca debería tener métodos para agregar libros, prestar libros, devolver libros y mostrar todos los libros disponibles.
Clase Vehículo y Concesionario:

Crea una clase Vehículo con propiedades como marca, modelo, año de fabricación y precio.
Crea una clase Concesionario que pueda almacenar una lista de vehículos en venta.
La clase Concesionario debería tener métodos para agregar vehículos, vender vehículos, mostrar todos los vehículos en venta y calcular el total de ventas.
Clase Película y Videoclub:

Crea una clase Película con propiedades como título, director, año de lanzamiento y género.
Crea una clase Videoclub que pueda almacenar una lista de películas disponibles para alquiler.
La clase Videoclub debería tener métodos para agregar películas, alquilar películas, devolver películas y mostrar todas las películas disponibles.
Clase Producto y Carrito de Compras:

Crea una clase Producto con propiedades como nombre, precio y cantidad disponible.
Crea una clase CarritoDeCompras que pueda almacenar una lista de productos.
La clase CarritoDeCompras debería tener métodos para agregar productos, eliminar productos, calcular el total de la compra y mostrar los productos en el carrito.
 */