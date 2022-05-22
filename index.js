import { actualizarCarrito } from "./actualizarCarrito.js";
import { mostrarProductos } from "./App.js";
import { eliminarProductoCarrito } from "./carritoIndex.js";
import { productos } from "./stock.js";

const contenedorCarrito = document.getElementById('carrito-contenedor');
let carritoStorage = [];

document.addEventListener("DOMContentLoaded", () => {

  mostrarProductos(productos);

  if (localStorage.getItem("carrito")) {
    carritoStorage = JSON.parse(localStorage.getItem("carrito"))
    carritoStorage.map((producto) => {
      let div = document.createElement('div');
      div.classList.add('productoEnCarrito');
      div.innerHTML = ` <p>${producto.nombre}</p>
                        <p>Precio:${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                        <img src=${producto.img} class="imagenCarrito">
                        <button id=eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                      `
      contenedorCarrito.appendChild(div);

      actualizarCarrito(carritoStorage);
      console.log(producto.id)
      eliminarProductoCarrito(producto.id)
    })
  }
})