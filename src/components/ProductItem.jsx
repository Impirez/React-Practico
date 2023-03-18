import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import AppContext from '@contexts/AppContext'
import icon from '@icons/bt_add_to_cart.svg'
import addedToCartIcon from '@icons/bt_added_to_cart.svg'
import addToCartIcon from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	const { addToCart, isInCart } = useContext(AppContext);

	const handleClick = ( item ) => {
		addToCart(item);
		console.log(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>{product.price}$</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					{isInCart(product.id)
					? <img src={addedToCartIcon} alt="Add another to cart"/>
					: <img src={addToCartIcon} alt="Add to cart" /> 
					}
				</figure>
			</div>
		</div>
	);
}
export default ProductItem;
