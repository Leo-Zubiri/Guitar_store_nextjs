

import Layout from '../components/Layout'

import Listado from '../components/Listado'

function Home({guitarras,seccion}) {
  console.log(seccion) 

  return (
    <div >

      <Layout pagina='Inicio'>
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Colección</h1>

          {/* <Listado guitarras={guitarras}/> */}
        </main>
      </Layout>

    </div>
  )
}


export async function getServerSideProps() {
  // const url = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`;
  // const response = await fetch(url);
  // const result = await response.json();
  //console.log(result)

  const urlGuitarras = `${process.env.API_URL}/guitarras?_sort=createdAt:desc`;
  const urlSeccionCursos = `${process.env.API_URL}/seccion-cursos`;

  const [resGuitarras,resSeccion] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlSeccionCursos)
  ])

  const [guitarras,seccion] = await Promise.all([
    resGuitarras.json(),
    resSeccion.json()
  ])

  return {
    props:{
      guitarras: guitarras,
      seccion: seccion
    }
  }
}

export default Home