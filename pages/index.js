

import Layout from '../components/Layout'

import Listado from '../components/Listado'
import SeccionCurso from '../components/SeccionCurso'
import ListadoBlog from '../components/ListadoBlog'

function Home({guitarras,seccion,blogs}) {
  console.log(blogs) 

  return (


      <Layout pagina='Inicio'>
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>

          <Listado guitarras={guitarras}/>
        </main>

        <SeccionCurso seccion={seccion}/>

        <section className='contenedor'>
          <ListadoBlog entradas={blogs}/>
        </section>

      </Layout>

  )
}


export async function getServerSideProps() {
  // const url = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`;
  // const response = await fetch(url);
  // const result = await response.json();
  //console.log(result)

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`;
  const urlSeccionCursos = `${process.env.API_URL}/seccion-cursos`;
  const urlBlogs = `${process.env.API_URL}/blogs?_limit=3`

  const [resGuitarras,resSeccion,resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlSeccionCursos),
    fetch(urlBlogs)
  ])

  const [guitarras,seccion,blogs] = await Promise.all([
    resGuitarras.json(),
    resSeccion.json(),
    resBlogs.json()
  ])

  return {
    props:{
      guitarras: guitarras,
      seccion: seccion,
      blogs: blogs
    }
  }
}

export default Home