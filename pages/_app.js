import '../styles/normalize.css'
import '../styles/globals.css'

import { useState,useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {  
    // cargar del localStorage ?? nullish coalesing 
    const carritoLS = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoLS);
  },[]);

  useEffect(()=>{
    localStorage.setItem('carrito',JSON.stringify(carrito));
  },[carrito]);

  const agregarCarrito = (producto) => {
    if(carrito.some(pdto => pdto.id === producto.id)){
      // Actualizar producto en el carrito
      const carritoActualizado = carrito.map((articulo) => { 
        if(articulo.id === producto.id){
          articulo.cantidad = producto.cantidad;
        }
        return articulo;
       });

       setCarrito(carritoActualizado);
    }else {
      // Nuevo producto
      setCarrito([...carrito, producto]);
    }
    
  }

  return <Component {...pageProps} 
    carrito={carrito}
    agregarCarrito={agregarCarrito}
  />
}

export default MyApp
