// Funcion evento Boton "Vaciar Carrito"
const contenedorCarrito = document.getElementById('vaciarCarrito');
function limpiarHTML() {
    contenedorCarrito.innerHTML = "";
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

const btnVaciar = document.getElementById("btn-vaciar");
const vaciarCarrito = () => {
    if (carritoDeCompras.length > 0) {

        // limpia el carrito y el localStorage
        localStorage.clear();
        carritoDeCompras = [];
        contadorCarrito.innerHTML = 0;
        precioTotal.innerHTML = "";
        limpiarHTML();

        Swal.fire({
            title: 'Vaciaste el Carrito',
            text: 'Todos tus productos se han quitado',
            icon: 'success',
            backdrop: true,
            allowOutsideClick: false,
            confirmButtonText: 'OK'
        })

    } else {
        // Muestro mensaje de advertencia.
        Swal.fire({
            title: 'Atención',
            text: 'El carrito no contiene productos',
            icon: 'warning',
            showConfirmButton: false,
            timer: '3000'
        })
    }
};
btnVaciar.addEventListener("click", vaciarCarrito)