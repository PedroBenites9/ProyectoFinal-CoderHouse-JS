let stockProductos = [
    { id: 1, nombre: "Remera Vue", tipo: "Remera", cantidad: 1, description: "una remera facherita de VUE", precio: 1200, talle: "S", img: "./assets/img/1.jpg" },
    { id: 2, nombre: "Remera Vue", tipo: "Remera", cantidad: 1, description: "una remera facherita de VUE", precio: 1200, talle: "M", img: "./assets/img/1.jpg" },
    { id: 3, nombre: "Remera Vue", tipo: "Remera", cantidad: 1, description: "una remera facherita de VUE", precio: 1200, talle: "L", img: "./assets/img/1.jpg" },
    { id: 4, nombre: "Remera Angular", tipo: "Remera", cantidad: 1, description: "una remera facherita de Angular", precio: 1400, talle: "S", img: "./assets/img/2.jpg" },
    { id: 5, nombre: "Remera Angular", tipo: "Remera", cantidad: 1, description: "una remera facherita de Angular", precio: 1400, talle: "M", img: "./assets/img/2.jpg" },
    { id: 6, nombre: "Remera Angular", tipo: "Remera", cantidad: 1, description: "una remera facherita de Angular", precio: 1400, talle: "L", img: "./assets/img/2.jpg" },
    { id: 7, nombre: "Remera React", tipo: "Remera", cantidad: 1, description: "una remera facherita de React", precio: 1800, talle: "S", img: "./assets/img/3.jpg" },
    { id: 8, nombre: "Remera React", tipo: "Remera", cantidad: 1, description: "una remera facherita de React", precio: 1800, talle: "M", img: "./assets/img/3.jpg" },
    { id: 9, nombre: "Remera React", tipo: "Remera", cantidad: 1, description: "una remera facherita de React", precio: 1800, talle: "L", img: "./assets/img/3.jpg" },
    { id: 10, nombre: "Remera Redux", tipo: "Remera", cantidad: 1, description: "una remera facherita de Redux", precio: 1400, talle: "S", img: "./assets/img/4.jpg" },
    { id: 11, nombre: "Remera Redux", tipo: "Remera", cantidad: 1, description: "una remera facherita de Redux", precio: 1400, talle: "M", img: "./assets/img/4.jpg" },
    { id: 12, nombre: "Remera Redux", tipo: "Remera", cantidad: 1, description: "una remera facherita de Redux", precio: 1400, talle: "L", img: "./assets/img/4.jpg" },
    { id: 13, nombre: "Remera Node", tipo: "Remera", cantidad: 1, description: "una remera facherita de Node", precio: 1300, talle: "S", img: "./assets/img/5.jpg" },
    { id: 14, nombre: "Remera Node", tipo: "Remera", cantidad: 1, description: "una remera facherita de Node", precio: 1300, talle: "M", img: "./assets/img/5.jpg" },
    { id: 15, nombre: "Remera Node", tipo: "Remera", cantidad: 1, description: "una remera facherita de Node", precio: 1300, talle: "L", img: "./assets/img/5.jpg" },
    { id: 16, nombre: "Remera Sass", tipo: "Remera", cantidad: 1, description: "una remera facherita de Sass", precio: 1400, talle: "S", img: "./assets/img/6.jpg" },
    { id: 17, nombre: "Remera Sass", tipo: "Remera", cantidad: 1, description: "una remera facherita de Sass", precio: 1400, talle: "M", img: "./assets/img/6.jpg" },
    { id: 18, nombre: "Remera Sass", tipo: "Remera", cantidad: 1, description: "una remera facherita de Sass", precio: 1400, talle: "L", img: "./assets/img/6.jpg" },
    { id: 19, nombre: "Remera HTML", tipo: "Remera", cantidad: 1, description: "una remera facherita de Angular", precio: 1400, talle: "S", img: "./assets/img/2.jpg" },
    { id: 20, nombre: "Remera HTML", tipo: "Remera", cantidad: 1, description: "una remera facherita de Angular", precio: 1400, talle: "M", img: "./assets/img/2.jpg" },
    { id: 21, nombre: "Remera HTML", tipo: "Remera", cantidad: 1, description: "una remera facherita de Angular", precio: 1400, talle: "L", img: "./assets/img/2.jpg" },
]; //array de objetos
// modal
const contenedorModal = document.getElementsByClassName('modal__contenedor')[0]
const botonAbrir = document.getElementById('boton__carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal__carrito')[0]

// capturadores
const contenedorProducto = document.getElementById('main__contenedor');
const contenedorCarrito = document.getElementById('carrito__contenedor');
const botonVaciar = document.getElementById('vaciar__carrito');
const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');
const confirmarPago = document.getElementById('confirmar__pago');
const filtroTalle = document.getElementById('filtro__talle');
let carrito = [];


document.addEventListener('DOMContentLoaded', () => { //nos aseguramos que carge todo el DOM y luego obtenemos el carrito
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
    }
});

botonVaciar.addEventListener('click', () => { //Vaciamos el array y luego actualizamos para que en el localStorage no quede ningun producto
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
})

const card = (producto) => { //Armamos y creamos las cards donde estaran los productos
    const div = document.createElement('div'); //creamos un div
    div.classList.add('producto'); // le damos estilo
    div.innerHTML = `
                <img src = ${producto.img} alt="" >
                <h3 class="producto__nombre">${producto.nombre}</h3>
                <p class="producto__nombre">${producto.description}</p>
                <p>Talle: ${producto.talle}</p>
                <p class="producto__precio">Precio :$ ${producto.precio}</p>
                <button id="agregar${producto.id}" class="boton__agregar">Agregar<i class="fas fa-shopping-cart"></i></button>
            `;
    contenedorProducto.appendChild(div); // insertamos las cards en el archivo html desde este script

    const boton = document.getElementById(`agregar${producto.id}`); // capturamos el boton que esta dentro de la card para luego ponerlo al carrito

    boton.addEventListener('click', () => { //agregamos el evento al boton card
        agregarCarrito(producto.id)
    });
};

stockProductos.forEach(card); //recorremos el array de objetos y le "inyectamos" a la funcion 'card'


filtroTalle.addEventListener('change', () => { //capturamos el select para poder filtar los productos segun la talla
    contenedorProducto.innerHTML = '';
    stockProductos.filter(producto => producto.talle === filtroTalle.value || filtroTalle.value === 'All').forEach(card); //filtramos utilizando el metodo .filter en el array de objetos
})

const agregarCarrito = (prodId) => { //agregamos los productos al carrito (carrito es otro array)
    const existe = carrito.some(prod => prod.id === prodId); // comparamos si el producto existe, si el producto existe entonces aumentamos la cantidad
    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++;
            }
        });
    } else { //si no el producto no existe, entoces lo ponemos la carrito
        const item = stockProductos.find((prod) => prod.id === prodId);
        carrito.push(item);
    }
    Swal.fire({ //Mostramos un alerta 
        position: 'top-end',
        icon: 'success',
        title: `Se agrego al carrito`,
        showConfirmButton: false,
        timer: 800
    })
    actualizarCarrito();//actualizamos carrito
}

const actualizarCarrito = () => { // la funcion de actualizarCarrito hace que el carrito este en plena actualiza cuando se realize un evento, como agregar un producto a elimiar
    contenedorCarrito.innerHTML = "";
    if (carrito.length === 0) { //comparamos si el producto esta vacio entonce se le avisa al cliente que debe comprar para poder pagar el producto
        console.log(confirmarPago)
        confirmarPago.addEventListener('click', () => {
            Swal.fire({
                icon: 'error',
                title: 'Vacio',
                text: 'Porfavor seleccione algún producto',
            })
        });
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>Carrito vacio</h3>
        `;
        contenedorCarrito.appendChild(div);
        contadorCarrito.innerHTML = 0;
        precioTotal.innerHTML = 0;

    } else { //Cuando hay producto en el carrito entonces se le habilita el boton de pagar y a la vez se le muestra los datalles de los productos que selecciono
        carrito.forEach((prod) => {
            const div = document.createElement('div');
            div.className = ('productoEnCarrito');
            div.innerHTML = `
            <p>${prod.nombre}</p>    
            <p>Precio: ${prod.precio}</p>    
            <p>Talle: ${prod.talle}</p>
            <p>Cantidad: <span id='cantidad'>${prod.cantidad}</span></p>
            <button  onclick="eliminarDelCarrito(${prod.id})" class="boton__eliminar" ><i class="fas fa-trash-alt"></i></button>
            `;
            contenedorCarrito.appendChild(div);

            localStorage.setItem('carrito', JSON.stringify(carrito)); // los productos seleccionados lo almacenamos en un localStorage
        });
        contadorCarrito.innerText = carrito.length; // se muestra el carrito (en la nav) con el numero de productos dentro del mismo
        precioTotal.innerText = carrito.reduce((acc, prod) => acc + (prod.precio * prod.cantidad), 0); // le mostramos cuanto es el costo total de los productos que selecciono
        confirmarPago.addEventListener('click', () => {
            location.href = 'pages/confirmarPago.html'; // se redirecciona a una pagina donde esta el checkout
        })
    }
};

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => {
        prod.id === prodId.id
    });
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal__active')
})
botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal__active')
})

contenedorModal.addEventListener('click', (event) => {
    contenedorModal.classList.toggle('modal__active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() //cuando clickeo sobre el modal se finaliza la propagacion del click a los elementos
    //padre
})