import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

// Para importar el modulo de css
import styles from '../styles/Header.module.css'

const Header = () => {
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
     </div>
   </header>
  )
}

export default Header