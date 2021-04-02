import './App.css';
import NavBar from './components/NavBar'
import SearchResults from './components/SearchResults'
import ShoppingList from './components/ShoppingList'
import {CartProvider} from './context/CartContext'
import {SearchResultsProvider} from './context/SearchResultsContext'

const App = () => {
  return (
    <div className="App">
      <SearchResultsProvider>
        <CartProvider>
          <NavBar />
          <SearchResults />
          <ShoppingList />
        </CartProvider>
      </SearchResultsProvider>
      
    </div>
  )
}

export default App;
