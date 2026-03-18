import './Products.css'
import { AddToCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const {addToCart} = useCart()

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 15).map(product => (
          <li key={product.id}>
            <img 
              src={product.thumbnail} 
              alt={product.title}
            />
            <div>
              <h3>{product.title}</h3> <p>${product.price}</p>
            </div>
            <button onClick={e => addToCart(product)}>
              <AddToCartIcon/>
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}