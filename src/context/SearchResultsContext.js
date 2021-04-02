import React, {useState, createContext} from 'react'

export const SearchResultsContext = createContext()

export const SearchResultsProvider = (props) => {

    const [searchResults, setSearchResults] = useState([])

    return (
        <SearchResultsContext.Provider value={[searchResults, setSearchResults]}>
            {props.children}
        </SearchResultsContext.Provider>
    )

}