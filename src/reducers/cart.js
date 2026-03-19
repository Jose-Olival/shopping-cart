
export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

const updateLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state))
}

export const CART_ACTION_TYPES = {
  ADD_TO_CART:'ADD_TO_CART',
  REMOVE_FROM_CART:'REMOVE_FROM_CART',
  REDUCE_QUANTITY:'REDUCE_QUANTITY',
  CLEAR_CART:'CLEAR_CART'
}

export const UPDATE_STATE_BY_ACTION = {
  [CART_ACTION_TYPES.ADD_TO_CART]: (state, action) => {
    const product = action.playload 
    const productInCartIndex = state.findIndex(item => item.id === product.id)
    const newState = structuredClone(state)
    if (productInCartIndex >= 0){
      newState[productInCartIndex].quantity += 1
    }else {
      product.quantity = 1
      newState.push(product)
    } 
    return newState
  },
  [CART_ACTION_TYPES.REMOVE_FROM_CART]: (state, action ) => {
    const { id } = action.playload 
    return state.filter(item => item.id !== id)
  },
  [CART_ACTION_TYPES.REDUCE_QUANTITY]: (state, action ) => {
    const product = action.playload 
    const id = state.findIndex(item => item.id === product.id)
    const newState = structuredClone(state) 
    newState[id].quantity -= 1
    return newState
  },
  [CART_ACTION_TYPES.CLEAR_CART]: () => {
    return []
  }
}

export const reducerCart = (state, action ) => {
  const { type } = action
  const updateState = UPDATE_STATE_BY_ACTION[type] 
  const newState = updateState ? updateState(state, action) : state
  updateLocalStorage(newState)
  return newState
}