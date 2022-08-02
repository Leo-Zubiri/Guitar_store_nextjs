import React from 'react'

import {formatearFecha} from '../helpers'
import Link from 'next/link';
import Image from 'next/image';

const Entrada = ({entrada}) => {

    const {titulo,resumen,imagen,published_at,id} = entrada;

    console.log(imagen.url)

  return (
    <article> 
        <div>

            <Image width={800} height={600} src={`http://localhost:1337${imagen.url}`} alt={`Imagen blog ${titulo}`}/>
            <h1>{titulo}</h1>
            <p>{formatearFecha(published_at)}</p>
            <p>{resumen}</p>

            <Link href={`/blog/${id}`}>
                Leer Entrada
            </Link>
        </div>
    </article>
  )
}

export default Entrada