import React from 'react'

import Layout from '../components/Layout'

import ListadoBlog from '../components/ListadoBlog'

const Blog = ({entradas}) => {

  console.log(entradas)

  return (
    <Layout
        pagina='Blog'
        > 
        
      <main className='contenedor'>
          <ListadoBlog
            entradas={entradas}
          />
      </main>

    </Layout>
  )
}
//getServerSideProps()
export async function getStaticProps(){

  const url = `${process.env.API_URL}/blogs`
  const response = await fetch(url);
  const result = await response.json();
  //console.log(result);

  return{
    props:{
      entradas: result
    }
  }
}

export default Blog