import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './style.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Shop from "./pages/Shop";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import ViewProduct from "./pages/ViewProduct";
import { MoviesContext } from './pages/MoviesContext';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState([1])
  const [search, setSearch] = useState()

  useEffect (() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b04350807bfef511722d92175c56e060&language=en-US&page=${page}`)
    .then(resp => setMovies(resp.data.results))
    .catch(e => console.log(e))
  }, [search, page ])

  const getPage = (page) => {
    setPage(page)
  }

  return (
    <BrowserRouter>
      <Navbar />
      <MoviesContext.Provider value={movies}>
        <Routes>
          <Route path="/" exact element={<Home getPage={getPage}/>} />
          <Route path="/favourites" exact element={<Favourites />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/product/:id" exact element={<ViewProduct />} />
        </Routes>
      </MoviesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
