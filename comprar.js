// Funcion al evento click Comprar
const comprarContenedor = document.getElementById('comprar__contenedor');
const btnComprar = document.getElementById('btn-comprar');

const funcionComprar = () => {


  // DOM Comprar - Form formas de pago
  let modalCompra = document.createElement('div');

  modalCompra.className = 'modal__comprar comprar-active';
  modalCompra.innerHTML = `
            <hr>
            <h3> Seleccionar medio de pago:</h3>
            <form class="opcionesPago">
              <div class="pago">
                <label class="opcion">
                <input type="radio" name="pagos" value="efectivo" class="radio" id="pago1" checked>
                <i class="fas fa-money-check-alt icono"><span>Efectivo</span></i>
              </label>
              <label class="opcion">
                <input type="radio" name="pagos" value="tarjeta" class="radio" id="pago2">
                <i class="fas fa-credit-card icono"><span>Tarjeta de crédito</span></i>
              </label>
              </div>
              <div id="tarjeta" class="active">
              <label class="tarjeta">
              <input type="text" name="FormTarjeta" required  placeholder="Nombre"  id="nombre" class="radio">
              </label>
              
                <label class="tarjeta">
                <input type="number" name="FormTarjeta" required  placeholder="Numero"  id="numero"  maxlength="16" size="16" class="radio">
                </label>
               
                <label class="tarjeta">
                <input type="number" name="FormTarjeta" required  placeholder="CCV" id="ccv" size="3" maxlength="3" class="radio">
                </label>
                <label class="tarjeta">
                <input type="number" name="FormTarjeta" required  placeholder="Fecha de vencimiento" size="4"  maxlength="4"id="fecha" class="radio" >
                </label>
                
              </div>
            <hr>
            <div>
            <button id="btn-volver" class="btn-danger btn-modal">Volver</button>
                <button type="submit" id="btn-fincompra" class="btn-success  btn-modal">Finalizar Compra</button>
            </div>
   </form>
    `;

  comprarContenedor.appendChild(modalCompra);
}
funcionComprar();




// Evento Boton Comprar
const mostrarComprar = document.querySelector('.comprar-active');
btnComprar.addEventListener('click', () => {
  let carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) ?? [];
  if (carritoDeCompras.length > 0) {
    mostrarComprar.classList.toggle('comprar-active');

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

});

// Evento Boton Volver
const btnVolver = document.getElementById('btn-volver');
btnVolver.addEventListener("click", () => {

  mostrarComprar.classList.toggle('comprar-active');
});

// Event al input Radio Opciones de Pago
const opcionesPago = document.getElementsByName("pagos");
opcionesPago.forEach((radio) => {
  radio.addEventListener("change", () => {
    const contCuotas = document.getElementById("tarjeta");
    if (radio.checked && radio.value === "tarjeta") {
      contCuotas.classList.toggle("active");
    } else {
      contCuotas.classList.toggle("active");
    }
  });
});

const opcionTarjeta = document.getElementsByName("FormTarjeta");
