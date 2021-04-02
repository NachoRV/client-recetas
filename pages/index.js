import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getRecipes } from '../services/recipe.service'
import Layout from '../components/layout'
import Nav from '../components/nav'

function Home({res}) {
  return (
    <Layout>
    <Nav></Nav>
      <div>
        {
          res.map((r) => <h1 key={r._id}>{r.title}</h1>)
        }
      </div>     
    </Layout>
  )
}

export async function getStaticProps(context) {
  const res = await getRecipes()
  return {
    props: {res}, // will be passed to the page component as props
  }
}
export default Home