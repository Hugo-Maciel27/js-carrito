import { actualizarCarrito } from "./actualizarCarrito.js";
import { productos } from "./stock.js";
const vaciarCarrito = document.getElementById('btn-vaciar');
const contenedorCarrito = document.getElementById('carrito-contenedor');
export let carritoDeCompras = [];

vaciarCarrito.addEventListener('click', () => {
  carritoDeCompras.length = 0
  actualizarCarrito(carritoDeCompras);
})

export const carritoIndex = (productoId) => {
  if (localStorage.getItem("carrito")) {
    carritoDeCompras = JSON.parse(localStorage.getItem("carrito"));
  }
  console.log(carritoDeCompras)
  let productoRepetido = carritoDeCompras.find(producto => producto.id == productoId);
  contarProductosRepetidos(productoRepetido, productoId);
  eliminarProductoCarrito(productoId);
}

export const eliminarProductoCarrito = (productoId) => {
  if (localStorage.getItem("carrito")) {
    carritoDeCompras = JSON.parse(localStorage.getItem("carrito"));
  }
  let botonEliminar = document.getElementById(`eliminar${productoId}`);
  botonEliminar.addEventListener('click', () => {
    Swal.fire({
      title: '¿Desea eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
  }).then((result) => {
    if (result.isConfirmed){
    botonEliminar.parentElement.remove();
    console.log("antes",carritoDeCompras)
    carritoDeCompras = carritoDeCompras.filter(el => el.id != productoId);
    console.log("despues",carritoDeCompras)
    actualizarCarrito(carritoDeCompras);
    }
  });
});
}  

const contarProductosRepetidos = (prodRepetido, productoId) => {
  if (prodRepetido) {
    prodRepetido.cantidad++
    document.getElementById(`cantidad${prodRepetido.id}`).innerHTML = `<p id=cantidad${prodRepetido.id}>Cantidad:${prodRepetido.cantidad}</p>`;
    actualizarCarrito(carritoDeCompras);
  } else {
    renderProductosCarrito(productoId);
  }
}

const renderProductosCarrito = (productoId) => {
  let producto = productos.find(producto => producto.id == productoId);
  carritoDeCompras.push(producto);
  producto.cantidad = 1;
  let div = document.createElement('div');
  div.classList.add('productoEnCarrito');
  div.innerHTML = ` <p>${producto.nombre}</p>
                    <p>Precio:${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad:${producto.cantidad}</p>
                    <button id=eliminar${producto.id} class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                  `
  contenedorCarrito.appendChild(div);
  actualizarCarrito(carritoDeCompras);
}
