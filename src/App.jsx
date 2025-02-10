import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';

import NavbarNav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Favorites from "./components/Favorites.jsx";

function App() {
  return (
    <>
      <NavbarNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
