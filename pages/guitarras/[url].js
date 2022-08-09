import React from 'react'

import Image from 'next/image';

import styles from '../../styles/Guitarra.module.css'
import Layout from '../../components/Layout';

const Producto = ({guitarra}) => {
    
    const {descripcion,imagen,nombre,precio,url} = guitarra;

  return (
   <Layout pagina={`Guitarra ${nombre}`}>
     <div className={styles.guitarra}>
    <Image layout='responsive' width={180} height={350} 
    src={`${process.env.NEXT_PUBLIC_API_URL}${imagen[0].url}`} 
    alt='Imagen guitarra'/>

    <div className={styles.contenido}>
      <h3>{nombre}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <p className={styles.precio}>${precio}</p>
      
    </div>
    </div>
   </Layout>
  )
}

export async function getServerSideProps({query: {url}}){
    

    const urlConsulta = `${process.env.API_URL}/guitarras?url=${url}`

    const response = await fetch(urlConsulta);
    const result = await response.json();

    //console.log(result[0])

    return {
        props: {
            guitarra: result[0]
        }
    }
}

export default Producto