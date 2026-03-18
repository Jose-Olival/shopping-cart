import { useState } from 'react'
import { Products } from './componets/Products'
import { Header } from './componets/Header'
import { useFilter } from './hooks/useFilter'
import { products as initialProducts } from './mocks/products.json';

function App( ) {
  const { filter, productsFilter } = useFilter()

  const filteredProducts = productsFilter(initialProducts)

  return (
    <>
      <h1>Tienda</h1>
      <Header/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App