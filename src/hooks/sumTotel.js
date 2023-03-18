import { useContext } from 'react';
import AppContext from '@contexts/AppContext.js'

const sumTotel = () => {
    const {state} = useContext(AppContext);
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = state.cart.reduce(reducer, 0)
    return sum
}
export default sumTotel;