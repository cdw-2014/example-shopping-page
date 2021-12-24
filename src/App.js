import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import { CartProvider } from "./context/CartContext"
import { SearchResultsProvider } from "./context/SearchResultsContext"

const App = () => {
  return (
    <div className="App">
      <SearchResultsProvider>
        <CartProvider>
          <NavBar />
          <Home />
        </CartProvider>
      </SearchResultsProvider>
    </div>
  )
}

export default App
