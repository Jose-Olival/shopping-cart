import { useState } from 'react'
import { Products } from './componets/Products'
import { Header } from './componets/Header'
import { products as initialProducts } from './mocks/products.json'


function App( ) {
  const [products, setProducts] = useState(initialProducts)
  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: -1
  })

  const productsFilter = (products) => {
    return products.filter((product) => {
      return filter.minPrice <= product.price &&
      (filter.maxPrice === -1 || filter.maxPrice >= product.price ) &&
      (filter.category === 'all' || filter.category === product.category )
    })
  }

  const filteredProducts = productsFilter(products)

  return (
    <>
    <h1>Tienda</h1>
    <Header/>
    <Products products={filteredProducts}/>
    </>
  )
}

export default App