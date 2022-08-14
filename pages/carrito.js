import React from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'

import styles from '../styles/Carrito.module.css'
import Image from 'next/dist/client/image'

const Carrito = ({carrito}) => {
  console.log(carrito)
  const [productos, setProductos] = useState([]);

  return (
    <Layout pagina={'Carrito de Compras'}> 
        <h1 className='heading'>Carrito</h1>
        <main className={`${styles.contenido} contenedor`}>
            <div className={styles.carrito}>
              {carrito.length === 0 ? 'Carrito Vacío' : (
                carrito.map(producto => (
                  <div key={producto.id} className={styles.producto}>
                    <div>
                      <Image layout='responsive' width={250} height={480} src={`${process.env.NEXT_PUBLIC_API_URL}${producto.imagen}`} alt={producto.nombre} />
                    </div>
                    <div></div>
                  </div>
                ))
              )}
            </div>
            <div>2</div>
        </main>
    </Layout>
  )
}

export default Carrito