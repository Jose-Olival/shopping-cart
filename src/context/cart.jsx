import { createContext, useState } from "react";

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    const newCart = structuredClone(cart)
    if (productInCartIndex >= 0){
      newCart[productInCartIndex].quantity += 1
    }else {
      product.quantity = 1
      newCart.push(product)
    }
    setCart(newCart)
  }

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  } 

  const reduceQuantity = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    if (productInCartIndex === -1) return
    const newCart = structuredClone(cart) 
    newCart[productInCartIndex].quantity -= 1
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <cartContext.Provider value={{cart, addToCart, clearCart, removeFromCart, reduceQuantity}} >
      {children}
    </cartContext.Provider>
  )
}