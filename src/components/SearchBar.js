import React, { useState, useContext } from "react"
import { SearchResultsContext } from "../context/SearchResultsContext"

const SearchBar = (props) => {
  const [text, setText] = useState("")
  const [searchResults, setSearchResults] = useContext(SearchResultsContext)

  const handleSearch = () => {
    fetch(`http://localhost:3001/products/name/${text}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((response) => {
        console.log("returned data", response)
        setSearchResults(response)
      })
  }

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Search for Item..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </React.Fragment>
  )
}

export default SearchBar
