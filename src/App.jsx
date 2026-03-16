import { Products } from './componets/Products'
import { products } from './mocks/products.json'


function App( ) {
  return (
    <>
    <h1>Tienda</h1>
        <Products products={products}/>
    </>
  )
}

export default App