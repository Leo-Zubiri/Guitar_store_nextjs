import React from 'react'

const EntradaBlog = ({entrada}) => {

    console.log(entrada)

  return (
    <div>
        <h1>Desde Entrada Blog</h1>
    </div>
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