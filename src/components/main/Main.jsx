import React from 'react'
import Hero from '../hero/Hero'
import Products from '../products/Products'
import Table from '../table/Table'
import { Toaster } from 'react-hot-toast'
import { HEROS } from '../../static'
import Cards from '../cards/Cards'
import Footer from '../footer/footer'
import Summer from '../summer/Summer'

const Main = () => {
  return (
    <main>
      <Products/>
      <Table/>
      {
        HEROS?.map((hero) => (
          <Hero key={hero.id} {...hero}/>
        ))
      }
      <Cards />
      <Summer />
      <Toaster position="top-center" reverseOrder={false} />
    </main>
  )
}
export default Main