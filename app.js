import { actualizarCarrito } from "./actualizarCarrito.js";
import { carritoIndex } from "./carritoIndex.js";


let carrito = []

export const mostrarProductos = (productos) => {

  const contenedorProductos = document.getElementById("producto-contenedor");
  

  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          
                          <p class="precio">$ ${producto.precio}</p>
                          
                      </div>
                     `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`boton${producto.id}`);
      boton.addEventListener('click', () => {
      carritoIndex(producto.id);
      Toastify({
  
        text: "Agregaste "+ producto.nombre + " al carrito",
        
        duration: 3000,

        position: 'center',
  
        style: {
          background: 'linear-gradient(to right, #006AF2, black )'
        }
        
        }).showToast();
    });
  });
}