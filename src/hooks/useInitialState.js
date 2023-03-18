import {useState} from 'react'

const initialState = {
    cart: [],
}// objeto cart vacio 
const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = (product) => {
        setState({
            ...state, 
            cart: [...state.cart, product]
        })
    }
    const removeFromCart = (products) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== products.id),
        })
    }
    return {
        state,
        addToCart,
        removeFromCart,
    }
}
export default useInitialState;