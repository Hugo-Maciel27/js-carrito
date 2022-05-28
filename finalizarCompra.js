
// Funcion Boton "FINALIZAR COMPRA".


const btnFinalizarCompra = document.getElementById('btn-fincompra');
btnFinalizarCompra.addEventListener('click', (e) => {
    e.preventDefault();

    // *****Validacion de Formulario Tarjeta*****
    if (carritoDeCompras.length > 0) {

        let error = false;
        let errorMensaje = "";
        const radio2 = document.getElementById("pago2");
        const nombre = document.getElementById("nombre");
        const numero = parseInt(document.getElementById("numero").value);
        const ccv = parseInt(document.getElementById("ccv").value);
        const fecha = document.getElementById("fecha");


        if (radio2.checked && radio2.value === "tarjeta") {

            if (nombre.value == "") {
                error = true;
                errorMensaje += "El Nombre es obligatorio<br>"
            }
            if (isNaN(numero)) {
                error = true;
                errorMensaje += "El Numero es obligatorio<br>"
            }
            if (isNaN(ccv)) {
                error = true;
                errorMensaje += "El CCV es obligatorio<br>"
            }
            if (fecha.value == "") {
                error = true;
                errorMensaje += "La Fecha de Vencimiento es obligatorio<br>"
            }
            if (error) {
                Swal.fire({
                    title: 'Error',
                    html: '<h3>Datos no ingresados: </h3><br>' + errorMensaje,
                    icon: 'error',
                    showConfirmButton: false,
                    timer: '3000'
                })
                return 0;
            }

        }


        // Contador de segundos Sweet Alert
        let timerInterval
        Swal.fire({
            title: 'Realizando Compra',
            html: 'Cargando datos en <b></b> seg.',
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                }, 100)
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {

            // 
            if (result.dismiss === Swal.DismissReason.timer) {

                //Al finalizar el contador elimina producto del carrito y accion en el carrito.
                localStorage.clear();
                carritoDeCompras = [];
                contadorCarrito.innerHTML = 0;
                precioTotal.innerHTML = "";
                limpiarHTML();

                Swal.fire({
                    title: '¡COMPRA REALIZADA!',
                    html:
                        '<h4>Numero de orden: </h4> <h3>' +
                        getRandomInt(0, 10000000000),
                    footer:'Presentar el numero de compra para adquirir el producto',

                    icon: 'success',
                    backdrop: true,
                    allowOutsideClick: false,
                    confirmButtonText: 'OK'
                })



            }
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
})


// funcion de numero de orden Random
function getRandomInt(min, max) {
    
    return Math.floor(Math.random() * (max - min)) + min;
}