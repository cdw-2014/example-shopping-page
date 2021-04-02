import React, {useState, useContext} from 'react'
import {SearchResultsContext} from '../context/SearchResultsContext'

const SearchBar = (props) => {

    const [text, setText] = useState('')
    const [searchResults, setSearchResults] = useContext(SearchResultsContext)

    const productsList = [
        {
            name: 'T-Shirt',
            description: 'Blue graphic t-shirt. Size L.',
            price: 15.00
        },
        {
            name: 'T-Shirt',
            description: 'Black V-neck t-shirt. Size L.',
            price: 11.00
        },
        {
            name: 'Sunglasses',
            description: 'Polarized sunglasses. 54mm.',
            price: 75.00
        },
        {
            name: 'iPhone Charging Cable',
            description: '6 ft black/red braided lightning cable.',
            price: 22.00
        },
        {
            name: 'HDMI Cable',
            description: '10 ft HDMI cable. 4K.',
            price: 8.00
        },
        {
            name: 'Sweatshirt',
            description: 'Cotton, hooded sweatshirt. Size M.',
            price: 40.00
        },
        {
            name: 'Hat',
            description: 'White baseball cap.',
            price: 15.00
        },
        {
            name: 'Water Bottle',
            description: '24 Fl oz bottle.',
            price: 12.00
        }
    ]

    const handleSearch = () => {
        const results = productsList.filter(product => product.name.toUpperCase().includes(text.toUpperCase()))
        setSearchResults(results)
    }

    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Search for Item..."
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </React.Fragment>
    )
    
}

export default SearchBar