import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import NavbarNav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Favorites from "./components/Favorites.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <div>
      <NavbarNav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
