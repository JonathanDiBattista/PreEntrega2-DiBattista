import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MovieDetails from "./components/items/MoviesDetails";
import CartContextProvider from './context/cartContext/CartContextProvider'
import UserContextProvider from './context/userContext/UserContextProvider'
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
      <CartContextProvider>
        <UserContextProvider>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path='/checkout' element={<Checkout/>} />
            <Route path='/cart' element={<Cart/>} />
          </Routes>
        </div>
        </UserContextProvider>
      </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App
