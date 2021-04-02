import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import Product from './Product'
import * as css from './ShoppingList.css'


const ShoppingList = (props) => {

    const [cart, setCart] = useContext(CartContext)

    const renderEmptyCart = () => (
        <p>Your cart is empty. Use the search bar to find products to add.</p>
    )

    const renderCart = () => (
        <div className="cart">
            {cart.map(item => (
                <Product className="card" name={item?.name} description={item?.description} price={item?.price}/>
            ))}
        </div>
    )

    return (
        <div>
            <h3>Shopping Cart:</h3>
            {cart.length > 0 ? renderCart() : renderEmptyCart()}
        </div>
    )
}

export default ShoppingList