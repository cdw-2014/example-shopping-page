import React from 'react'
import SearchResults from '../components/SearchResults'
import ShoppingList from '../components/ShoppingList'

const Home = () => {
  return (
    <div className="Home">
        <SearchResults />
        <ShoppingList />
    </div>
  )
}

export default Home;