//CONSTRUCTOR
class Producto {
  constructor(id, categoria, nombre, precio, img){
    this.id = id;
    this.categoria =categoria;
    this.nombre = nombre;
    this.precio = precio;
    this.img = img
    
    }
}
//ARRAY DE PRODUCTOS
const cartProducts = [];
    //Burger
    const prod1 = new Producto(1, "Burger", "Burger Simple", 5490, "/comision41090/img/simple_burger.jpg" );
    const prod2 = new Producto(2, "Burger", "Porky Burger", 7490, "/comision41090/img/porky_burger.jpg");
    const prod3 = new Producto(3,"Burger","Rings Burger",6990, "/comision41090/img/rings_burger.jpg");
    const prod4 = new Producto(4,"Burger","Bacon Cheese Burger",7490, "/comision41090/img/bacon_cheese_burger.jpg");
    //Pizzas
    const prod5 = new Producto(5,"Pizza","La Pepperoni",12900, "/comision41090/img/pizza1.jpg");
    const prod6 = new Producto(6,"Pizza","La Pesto",13900, "/comision41090/img/pizza2.jpg");
    const prod7 = new Producto(7,"Pizza","La Italiana",12900, "/comision41090/img/pizza3.jpg");
    const prod8 = new Producto(8,"Pizza","La Vegetariana",12900, "/comision41090/img/pizza4.jpg");
    //Cocteles
    const prod9 = new Producto(9,"Cocteles","Mojito",4900, "/comision41090/img/mojito.jpg");
    const prod10 = new Producto(10,"Cocteles","Daiquiri",4900, "/comision41090/img/daiquiri.jpg");
    const prod11 = new Producto(11,"Cocteles","Piña Colada",6000, "/comision41090/img/pina_colada.jpg");
    const prod12 = new Producto(12,"Cocteles","Tom Collins",4900, "/comision41090/img/tom_collins.jpg");

cartProducts.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10, prod11, prod12 )

//console.log(cartProducts)

//ARRAY CARRITO VACIO



//DOM
/*
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
*/
//  Crear funcion para mostrar los productos
const showProducts = (products) => {
    const productContainer = document.getElementById("product-container");    
    //console.log(productContainer)
   products.forEach(product => {
            const card = document.createElement('card');
            card.innerHTML += `<div class="card" style="width:18rem;">
                                <img src="${product.img}" class="card-img-top" width="350" height="350" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">${product.nombre}</h5>
                                        <p class="card-text">Price:$ ${product.precio}</p>
                                        <button class="btn btn-primary" id="button${product.id}">Add to Cart</button>
                                    </div>
                                    </div>`
            productContainer.appendChild(card);
            const button = document.getElementById(`button${product.id}`);
            button.addEventListener('click', () =>{
               // cart(`${product.id}`);
                alert(`Agregaste ${product.nombre}`)
            }) 
        })
    }

    showProducts(cartProducts)