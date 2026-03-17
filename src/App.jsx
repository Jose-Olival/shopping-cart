import { useState } from 'react'
import { Products } from './componets/Products'
import { Header } from './componets/Header'
import { useFilter } from './hooks/useFilter'

function App( ) {
  const [products, setProducts] = useState(initialProducts)
  const { filteredProducts } = useFilter({ products })
  

  return (
    <>
      <h1>Tienda</h1>
      <Header/>
      <Products products={filteredProducts}/>
    </>
  )
}

export default App