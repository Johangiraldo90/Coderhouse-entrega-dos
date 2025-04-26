const contenedorTarjetas =document.getElementById("productos-container");

function crearTarjetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoSuscripcion = document.createElement
        ("div");
        nuevoSuscripcion.classList = "tarjeta-producto";
        nuevoSuscripcion.innerHTML =`
        <img src=${producto.img}>
        <h3>Suscripción ${producto.nombre}</h3>
        <p>${producto.precio}Euros</p>
        <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoSuscripcion);

        
    });
}
crearTarjetasProductosInicio(suscripciones);
