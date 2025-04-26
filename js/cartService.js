function agregarCarrito(producto){
    const memoria =JSON.parse(localStorage.getItem("suscripciones"));
    console.log(memoria);
    if(memoria){
        const nuevoProducto = getNuevoproductoParaMemoria (producto);
        nuevoProducto.cantidad=1;
        localStorage.setItem("suscripciones",JSON.stringify[nuevoProducto])
    }else{
        const indiceProducto=memoria.findIndex(suscripcion =>suscripcion.id==producto.id)
        console.log(indiceProducto)
        if(indiceProducto== -1){
            const nuevaMemoria = memoria;
            nuevaMemoria.push(getNuevoproductoParaMemoria(producto))
            localStorage.setItem("suscripciones",JSON.stringify[nuevaMemoria]);
        }else{
            nuevaMemoria[indiceProducto].cantidad++;
        }
    }
}
// toma un producto, le agrega cantidad 1 y lo devuelve
function getNuevoproductoParaMemoria(producto){
    const nuevoProducto = producto;
    producto.cantidad  = 1;
    return nuevoProducto;
    
}

const cuentaCarritoElement = document.getElementById("cuenta-carrito")
function actualizarNumeroCarrito(){
    const memoria =JSON.parse(localStorage.getItem("suscripciones"));
    const cuenta = memoria.reduce((acum, current)=> acum+current.cantidad,0);
    cuentaCarritoElement.innerHTML=cuenta;


}