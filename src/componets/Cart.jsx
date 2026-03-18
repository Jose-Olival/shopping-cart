import './Cart.css'
import { useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button' role='button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden/>

      <aside className="cart">
        <ul>
          <li>
            <img src="https://cdn.dummyjson.com/product-images/groceries/kiwi/thumbnail.webp" alt="kiwi" />
            <div>
              <h4>Kiwi</h4> - 2$
            </div>

            <footer>
              <small>Cantidad: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}