import DataDownload from 'components/DataDownload'
import Layout from 'components/Layout'
import ListOfCategories from 'components/ListOfCategories'
import Profile from 'components/Profile'

export default function Home ({ datosPersonales }) {
  return (
    <Layout>
      <Profile datosPersonales={datosPersonales} />
      {/* <DataDownload /> */}
    </Layout>
  )
}

export async function getStaticProps () {
  const datosPersonales = await fetch('http://localhost:4000/datos').then(res => { return res.json() })
  
  return {
    props: {
      datosPersonales
    }
  }
}
