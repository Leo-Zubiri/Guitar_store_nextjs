import React from 'react'
import styles from '../styles/SeccionCursos.module.css'

const SeccionCurso = ({seccion}) => {
   
    const {titulo,Contenido,imagen} = seccion;

    const urlImagen = `${process.env.NEXT_PUBLIC_API_URL}${imagen[0].url}`
    //console.log(urlImagen)
    return (
    <section>
        <div className={`contenedor ${styles.grid}`}>
            <div className={styles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p className={styles.texto}>{Contenido}</p>

                <a href='#' className={styles.enlace}>Más Información</a>
            </div>
        </div>

        <style jsx>{`
            section{
                padding: 10rem 0;
                margin-top: 10rem;
                background-image: linear-gradient(to right,rgb(0 0 0 / .65),rgb(0 0 0 / .7)), url(${urlImagen});
                background-size: cover;
                background-position: 50%;
            }
        `}</style>
    </section>
  )
}

export default SeccionCurso