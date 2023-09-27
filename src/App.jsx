import Contact from "./pages/Contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./components/items/MoviesDetails";
import MovieCategory from "./components/items/MovieCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/category/:category" element={<MovieCategory />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
