import { createContext, useReducer, useState } from "react";
import { reducerCart, initialState } from "../reducers/cart";

export const cartContext = createContext()

function useCartReducer () {
  const [state, dispatch] = useReducer(reducerCart, initialState)

  const addToCart = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      playload: product
    })
  }

  const removeFromCart = (product) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      playload: product
    })
  } 

  const reduceQuantity = (product) => {
    dispatch({
      type: 'REDUCE_QUANTITY',
      playload: product
    })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return {state, addToCart, clearCart, removeFromCart, reduceQuantity }
}

export const CartProvider = ({ children }) => {
  const {state, addToCart, clearCart, removeFromCart, reduceQuantity } = useCartReducer()

  return (
    <cartContext.Provider value={{
      cart: state, 
      addToCart, 
      clearCart, 
      removeFromCart, 
      reduceQuantity
    }} >
      {children}
    </cartContext.Provider>
  )
}