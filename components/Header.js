import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'

// Para importar el modulo de css
import styles from '../styles/Header.module.css'

const Header = ({guitarra}) => {
  const router = useRouter();

  return (
   <header className={styles.header}> 
     <div className='contenedor'>
        <div className={styles.barra}>
          <div>
            <Link href='/'>
              <a>
             <Image width={400} height={100} src='/img/logo.svg' alt='logo'/>
              </a>
            </Link>
          </div>
          
          
          <nav className={styles.navegacion}>
              <Link href='/'>Inicio</Link>
              <Link href='/nosotros'>Nosotros</Link>
              <Link href='/blog'>Blog</Link>
              <Link href='/tienda'>Tienda</Link>
          </nav>
        </div>

        {
          guitarra && (
            <div className={styles.modelo}>
              <h2>Modelo {guitarra.nombre}</h2>
              <p>{guitarra.descripcion}</p>
              <p className={styles.precio}>${guitarra.precio}</p>
              <Link href={`/guitarras/${guitarra.url}`}>
                <a className={styles.enlace}>Ver Producto</a>
              </Link>
            </div>
          )
        }
     </div>

        {router.pathname === '/' && (
          <img src='/img/header_guitarra.png' alt='imagen header guitarra' 
          className={styles.guitarra}/>
        )}

   </header>
  )
}

export default Header