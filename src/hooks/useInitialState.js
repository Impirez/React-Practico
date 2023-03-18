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
    const isInCart = (productId) => {
        return state.cart.some(product => product.id === productId)
    }
    return {
        state,
        addToCart,
        removeFromCart,
        isInCart
    }
}
export default useInitialState;