import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer, {initialState} from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems)
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [state, dispatch] = useReducer(reducer, initialState, init)

  const clearCart = ()=>{
    dispatch({type: 'CLEAR_CART'});
  }

  const remove = (id) =>{
    dispatch({type: 'REMOVE', payload: id});
  }

  const increase = (id) =>{
    dispatch({type: 'INC', payload: id});
  }
  
  const decrease = (id) =>{
    dispatch({type: 'DEC', payload: id});
  }

  const fetchData = async ()=>{
    dispatch({type: 'LOADING'});
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: 'DISPLAY_ITEMS', payload: cart});
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
