import { Products } from './componets/Products'
import { Header } from './componets/Header'
import { useFilter } from './hooks/useFilter'
import { products as initialProducts } from './mocks/products.json';
import { Cart } from './componets/Cart';
import { CartProvider } from './context/cart.jsx';

function App( ) {
  const { filter, productsFilter } = useFilter()

  const filteredProducts = productsFilter(initialProducts)

  return (
    <CartProvider>
      <h1>Tienda</h1>
      <Header/>
      <Cart /> 
      <Products products={filteredProducts}/>
    </CartProvider>
  )
}

export default App