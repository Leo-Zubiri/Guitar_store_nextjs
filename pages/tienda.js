import React from 'react'

import Layout from '../components/Layout'

import Listado from '../components/Listado'

const Tienda = ({guitarras}) => {

  console.log(guitarras)

  return (
    <Layout
        pagina='Tienda Virtual'
        > 
        <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <Listado guitarras={guitarras}/>
        </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`;
  const response = await fetch(url);
  const result = await response.json();

  return {
    props:{
      guitarras: result
    }
  }
}

export default Tienda