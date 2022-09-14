//CONSTRUCTOR
function Producto(id, categoria, nombre, precio){
    this.id = id;
    this.categoria =categoria;
    this.nombre = nombre;
    this.precio = precio;
}
//ARRAY DE PRODUCTOS
let productos = [
    //Burger
    new Producto(1, "Burger", "Burger Simple", 6390),
    new Producto(2, "Burger", "Kids Burger", 4990),
    new Producto(3,"Burger","Classic Burger",6790),
    new Producto(4,"Burger","Chilean Burger",7390),
    //Pizzas
    new Producto(5,"Pizza","La Pepperoni",12900),
    new Producto(6,"Pizza","La Pesto",13900),
    new Producto(7,"Pizza","La Italiana",12900),
    new Producto(8,"Pizza","La Vegetariana",12900),
    //Cocteles
    new Producto(9,"Cocteles","Mojito",4900),
    new Producto(10,"Cocteles","Daiquiri",4900),
    new Producto(11,"Cocteles","Piña Colada",6000),
    new Producto(12,"Cocteles","Tom Collins",4900),
]

//ARRAY CARRITO VACIO
let carrito = []

//funcion para comprar productos
function addToCart(){
    let productoId = Number(prompt(`Menú
    /Burgers      
    1.- Burger Simple   $6390
    2.- Kids Burger     $4990
    3.- Classic Burger  $6790
    4.- Chilean Burger  $7390
    /Pizzas
    5.- La Pepperoni    $12900
    6.- La Pesto        $13900
    7.- La Italiana     $12900
    8.- La Vegetariana  $12900
    /Cócteles
    9.- Mojito          $4900
    10.- Daiquiri       $4900
    11.- Piña Colada    $6000
    12.- Tom Collins    $4900
    `))
    let cantidad = Number(prompt('Cantidad:'))
    let producto = productos.find(product => product.id===productoId)
    producto.cantidad = cantidad
    producto.total = producto.precio * cantidad
    carrito.push(producto)
}
alert('Bienvenido a Restaurant FW')
//CICLO DE COMPRA
let cliente = prompt(`Pulse cualquier tecla para mostrar el Menú

"ESC" para finalizar`)
while(cliente != 'ESC'){
    addToCart()
    cliente = prompt(`Pulse cualquier tecla para mostrar el Menú

    "ESC" para finalizar`)
}

console.log(productos)
console.log(carrito)

function calcularTotal(carrito){
    
    let total = 0;
    carrito.forEach(producto => {
        total+= producto.total
    })
    return total
}
alert(`Su cuenta es:

Consumo: $${calcularTotal(carrito)}
10% de propina sugerida: ${(calcularTotal(carrito)* 0.10)}

TOTAL: $${calcularTotal(carrito) + (calcularTotal(carrito)* 0.10)}`)


//funcion para crear productos
function crearProducto(id, categoria, nombre, precio){
    let nuevoProducto= new Producto (id, categoria, nombre, precio)
    productos.push(nuevoProducto)
}


///////////////////////////////////////////////////////////////////////////

//DOM
let section = document.getElementById("seccion-productos")
let temp = document.querySelector("template")
let card = temp.content.querySelector("div")

productos.forEach((Producto)=>{
    let cardClonada = card.cloneNode(true)
    section.appendChild(cardClonada)

   cardClonada.children[0].innerText = Producto.nombre
   cardClonada.children[1].innerText = Producto.precio
   cardClonada.children[2].innerText = Producto.categoria
})
