import React, {useContext} from 'react';
import AppContext from '@contexts/AppContext.js'
import '@styles/OrderItem.scss';
import icon from '@icons/icon_close.png'

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = product => {
		removeFromCart(product);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}$</p>
			<img src={icon} alt="close" onClick={() => handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;
