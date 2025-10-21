import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Banner from "./components/organisms/Banner";
import Home from "./components/pages/Home";
import NavBottomBar from "./components/organisms/NavBottomBar";
import Marketplace from "./components/pages/Marketplace";
import Cart from "./components/pages/Cart";
import Profile from "./components/pages/Profile";
import Test from "./components/pages/Test";
import ProductScreen from "./components/pages/ProductScreen";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  const hideLayout = location.pathname.startsWith("/product");

  useEffect(() => {
    if (location.pathname.startsWith("/product")) {
      document.body.style.backgroundColor = "#121212"; // oscuro
    } else {
      document.body.style.backgroundColor = "var(--background-color-2)"; // normal
    }
  }, [location.pathname]);

  return (
    <div className="App">
      {!hideLayout && <Banner />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Test />} />
          {/* Rutas relacionadas a elementos especificos */}
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
      {!hideLayout && <NavBottomBar />}
    </div>
  );
}

export default App;
