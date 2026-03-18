import './Cart.css'
import { useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";
import { useCart } from '../hooks/useCart';

export function Cart () {
  const { cart, addToCart, clearCart } = useCart()
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
            cart.map(item => (
              <li key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <h4>{item.title}</h4> - {item.price}$
                </div>

                <footer>
                  <small>Cantidad: {item.quantity}</small>
                  <button onClick={e => addToCart(item)}>+</button>
                </footer>
              </li>
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