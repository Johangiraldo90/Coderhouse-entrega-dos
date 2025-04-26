const contenedorTarjetas =document.getElementById("productos-container");

function crearTarjetasProductosInicio(){
    const productos = JSON.parse(localStorage.getItem("suscripciones"));
    console.log(productos)
    if(productos && productos.length>0){
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
            contenedorTarjetas.getElementsByTagName("button")[0].addEventListener("click", ()=>agregarCarrito
        (producto))
    
            
        });
    }
    }

    

    
crearTarjetasProductosInicio(suscripciones);
