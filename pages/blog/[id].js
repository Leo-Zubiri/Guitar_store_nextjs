import React from 'react'
import Layout from '../../components/Layout';

import Image from 'next/image';

import { formatearFecha } from '../../helpers';

import styles from '../../styles/Entrada.module.css'

const EntradaBlog = ({entrada}) => {

    const {contenido,imagen,published_at,titulo} = entrada;

  return (
    <Layout>
        <main className='contenedor'>
            <h1 className='heading'>{titulo}</h1>
            <article className={styles.entrada}>
                <Image layout='responsive' width={800} height={600} 
                   src={`${process.env.NEXT_PUBLIC_API_URL}${imagen.url}`} 
                   alt={`Imagen entrada ${titulo}`}
                />

                <div className={styles.contenido}>
                    <p className={styles.fecha}>{formatearFecha(published_at)}</p>

                    <p className={styles.texto}>{contenido}</p>
                </div>
            </article>
        </main>
    </Layout>
    
  )
}

export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`
    const response = await fetch(url);
    const result = await response.json();

    const paths = result.map(entrada => ({
        params: {id: entrada.id.toString()}
    }))

    return {
        paths,
        // true -> Retornar algunas rutas estaticamente y las otras se generan como se van solicitando. Ideal para millones de entradas
        // false -> Pasar todas las rutas que se van a construir. Ideal para pocas.
        // 'blocking' 
        fallback: false
    }
}

export async function getStaticProps({params:{id}}){
    console.log(id)

    const url = `${process.env.API_URL}/blogs/${id}`
    const response = await fetch(url);
    const result = await response.json();

    return {
        props:{ 
            entrada: result,
        }
    }
}

// export async function getServerSideProps({query:{id}}){
//     console.log(id)

//     const url = `http://localhost:1337/blogs/${id}`
//     const response = await fetch(url);
//     const result = await response.json();

//     return {
//         props:{ 
//             entrada: result,
//         }
//     }
// }

export default EntradaBlog