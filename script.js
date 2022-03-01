//Constructor de Objetos
class Producto{
    constructor (id, categoria, marca, nombre, modelo, precio , color, stock){
        this.id = id;
        this.categoria = categoria;
        this.marca = marca;
        this.nombre = nombre;
        this.modelo =modelo
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}
const producto1 = new Producto (1, "celular", "Samsung", "Galaxy", "S21", 124999, "blanco", 20);
const producto2 = new Producto (2,"celular", "Apple", "Iphone", "13 pro", 395129, "oro", 5); 
const producto3 = new Producto (3,"camara", "Canon", "PowerShot", "sx540", 74990, "negro", 12);
const producto4 = new Producto (4,"camara","Nikon", "kit", "d7500", 455791, "negro", 5);
const producto5 = new Producto (5,"consola","Microsoft", "Xbox", "Serie S", 89999, "blanca", 4);
const producto6 = new Producto (6,"consola","Sony", "Playstation", "5", 207999, "blanco y negro", 3);
const producto7 = new Producto (7,"notebook","Hp", "DW1080LA", "15-Pulgadas", 62999, "negro", 5);
const producto8 = new Producto (8,"notebook", "Lenovo", "IdeaPad", "15IML05", 91999, "azul",6);
const producto9 = new Producto (9,"televisor","Philco", "Smart TV", "PLD32HS9A1 LED HD 32", 30399, "negro", 15);
const producto10 = new Producto (10,"televisor","Samsung", "Smart TV", "Series 7 UN50TU7000GCZB LED 4K 50", 83999, "negro", 11);

let arrayProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10]

let divProductos = document.getElementById("divProductos");

arrayProductos.forEach(productosEnArray => {
    divProductos.innerHTML += `
    <div id="producto${productosEnArray.id}" class="articulo" >
        <h1>${productosEnArray.categoria}</h1>
        <img src="img/${productosEnArray.id}.png" alt="" width="80px">
        <h2>${productosEnArray.marca} ${productosEnArray.nombre} ${productosEnArray.modelo} ${productosEnArray.precio} ${productosEnArray.color} ${productosEnArray.stock}</h2>
        <hr>
    </div>
    `
});




