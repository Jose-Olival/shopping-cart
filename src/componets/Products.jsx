import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const {cart, addToCart, removeFromCart} = useCart()

  const handleClick = (product, isProductInCart) => {
    isProductInCart ? removeFromCart(product) : addToCart(product) 
  }
 
  return (
    <main className='products'>
      <ul>
        {products.slice(0, 15).map(product => {
          const isProductInCart = cart.some(item => item.id === product.id)
          return(
            <li key={product.id}>
              <img 
                src={product.thumbnail} 
                alt={product.title}
              />
              <div>
                <h3>{product.title}</h3> <p>${product.price}</p>
              </div>
              <button className={isProductInCart ? 'remove-button': 'add-button'}
                onClick={(e) => handleClick(product, isProductInCart)}
              >
                { 
                isProductInCart 
                ? <RemoveFromCartIcon />
                : <AddToCartIcon/>
                }
              </button>
            </li>
          )
        })}
      </ul>
    </main>
  )
}