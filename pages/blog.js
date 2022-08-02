import React from 'react'

import Layout from '../components/Layout'
import Entrada from '../components/Entrada'

const Blog = ({entradas}) => {

  console.log(entradas)

  return (
    <Layout
        pagina='Blog'
        > 
        
      <main className='contenedor'>
        <h2 className='heading'>Blog</h2>
        <div>
          {entradas.map(entrada =>(
            <Entrada 
              key={entrada.id}
              entrada={entrada}
            />
          ) )}
        </div>
      </main>

    </Layout>
  )
}
//getServerSideProps()
export async function getStaticProps(){

  const url = `http://localhost:1337/blogs`
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