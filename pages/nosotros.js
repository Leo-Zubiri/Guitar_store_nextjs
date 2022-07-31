import React from 'react'

import Image from 'next/image'

import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout pagina='Nosotros'>
       <main className='contenedor'>
          <h2 className='heading'>Nosotros</h2>
          <div className={styles.contenido}>
            <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Imagen nosotros' />
            <div>
              <p>
                Ex proident tempor sunt ullamco labore ea esse ad in irure. Nisi officia eu Lorem dolore in et ea ea officia velit. Ad proident est fugiat velit aliquip incididunt excepteur cillum nisi. Exercitation veniam commodo sunt eiusmod occaecat irure sunt enim laboris ut esse esse. Exercitation consequat nostrud veniam ex voluptate commodo aliquip id quis. Aliquip pariatur amet do officia Lorem pariatur deserunt nostrud occaecat elit.
              </p>
            </div>
          </div>
       </main>
    </Layout>
  )
}

export default Nosotros