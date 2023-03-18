import React, {useState, useContext} from "react";
import '@styles/header.scss'
import Menu from '@components/Menu.jsx'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import MyOrder from "@containers/MyOrder.jsx";
import shoppiCart from '@icons/icon_shopping_cart.svg'
import AppContext from '@contexts/AppContext.js'
import verifyBuy from "@hooks/verifyBuy.js";
const correo = 'ceazoffi@gmail.com'

const Header = () => {
    const [toggle, setToggle]= useState(false);
    const { state } = useContext(AppContext);
    const [toggleOrders, setToggleOrders] = useState(false);

    return ( 
        <nav>
    <img src={menu} alt="menu" className="menu"/>
    <div className="navbar-left">
    <img src={logo} alt="logo" className="nav-logo"/>
    <ul>
        <li>
        <a href="/">All</a>
        </li>
        <li>
        <a href="/">Clothes</a>
        </li>
        <li>
        <a href="/">Electronics</a>
        </li>
        <li>
        <a href="/">Furnitures</a>
        </li>
        <li>
        <a href="/">Toys</a>
        </li>
        <li>
        <a href="/">Others</a>
        </li>
    </ul>
    </div>
    <div className="navbar-right">
    <ul>
        <li className="navbar-email" onClick={() => setToggle(!toggle)}>{correo}</li>
        <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
        <img src={shoppiCart} alt="shopping cart"/>
        <div>{verifyBuy(state.cart.length)}</div>
    </li>
    </ul>
</div>
{toggle ? <Menu /> : null}
{toggleOrders ? <MyOrder /> : null}
</nav>
    )
} 

export default Header;