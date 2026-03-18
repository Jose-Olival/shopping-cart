import { useContext } from "react"
import { cartContext } from '../context/cart.jsx'

export function useCart() {
  const context = useContext(cart)

  return context
}