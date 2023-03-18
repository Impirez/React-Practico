import React, { useContext } from 'react';
import OrderItem from '@components/OrderItem.jsx';
import '@styles/MyOrder.scss';
import AppContext from '@contexts/AppContext.js'
import sumTotel from '@hooks/sumTotel.js';

const MyOrder = () => {
	const {state} = useContext(AppContext);
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(item => (
					<OrderItem product={item} key={`order-item-${item.id}`}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>{sumTotel()}$</p>
				</div>  
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
