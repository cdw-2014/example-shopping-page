import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import SearchBar from './SearchBar'
import * as css from './NavBar.css'

const NavBar = (props) => {

    const [cart, setCart] = useContext(CartContext)

    return (
        <div className="NavBar">
            <h3 className="NavBarTitle">Shopping App</h3>
            <SearchBar />
            <p className="NavBarCart">Items in Cart: {cart?.length}</p>
        </div>
    )
}

export default NavBar