import React, {useContext} from 'react'
import {CartContext} from '../context/CartContext'
import {SearchResultsContext} from '../context/SearchResultsContext'
import Product from './Product'
import * as css from './SearchResults.css'

const SearchResults = (props) => {

    const [cart, setCart] = useContext(CartContext)
    const [searchResults, setSearchResults] = useContext(SearchResultsContext)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    return (
        <div>
            <h3 className="header">Search Results:</h3>
            <div className="results">
                {searchResults.map(item => (
                    <div className="card">
                        <Product name={item?.name} description={item?.description} price={item?.price}/>
                        <button className="button" onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SearchResults