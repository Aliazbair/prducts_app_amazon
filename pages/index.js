import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import Products from '../components/Products'
export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>AMAZON APP</title>
      </Head>

      {/* header */}
      <Header />

      <main className='max-w-screen-2xl mx-auto'>
    
        {/* Banner */}
        <Banner />

        {/* products */}
        <Products products={products} />
      </main>
    </div>
  )
}

// get all products from api
export async function getServerSideProps(content) {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  return {
    props: {
      products,
    },
  }
}
