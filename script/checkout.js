const contenedorProductosCheckout = document.getElementById('div__items');

const boton__pagar = document.getElementById('button__pagar');

const items__localStorage = JSON.parse(localStorage.getItem('carrito'));
function obtenerProductos() {
    setTimeout(() => {
        items__localStorage.forEach((producto) => {
            const div = document.createElement('div');
            div.classList.add('producto__items');
            div.innerHTML = `
                            <img src = ${producto.img} alt="" >
                            <h3 class="producto__nombre">${producto.nombre}</h3>
                            <p>Talle: ${producto.talle}</p>
                            <p class="producto__precio">Cantidad: ${producto.cantidad}</p>
                            <p class="producto__precio">Precio :$ ${producto.precio}</p>
                            
                        `;
            contenedorProductosCheckout.appendChild(div);
        });

    }, 1000)

}


boton__pagar.addEventListener('click', () => {
    setTimeout(() => {
        Swal.fire({
            icon: 'sucess',
            title: 'Muchas gracias por su compra',
            text: 'Su compra ha sido completado con exito!'
        })
    }, 500);
    location.href = 'index.html';
})



obtenerProductos();





