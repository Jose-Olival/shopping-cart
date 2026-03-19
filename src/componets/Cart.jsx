import './Cart.css'
import { useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";
import { useCart } from '../hooks/useCart';

function CartItem ({title, thumbnail, price, quantity, addToCart, reduceQuantity}){
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <h4>{title}</h4> - {price}$
      </div>

      <footer>
        <button onClick={reduceQuantity}>-</button>
        <small>Cantidad: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const { cart, addToCart, clearCart, reduceQuantity } = useCart()
  const cartCheckboxId = useId()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button' role='button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden/>

      <aside className="cart">
        <ul>
          {
            cart.map(product => (
              <CartItem key={product.id} 
              addToCart={() => addToCart(product)}
              reduceQuantity={() => reduceQuantity(product)}
              {...product} />
            ))
          }
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon/>
        </button>
      </aside>
    </>
  )
}