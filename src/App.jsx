import { Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/organisms/Banner";
import Home from "./components/pages/Home";
import NavBottomBar from "./components/organisms/NavBottomBar";
import Marketplace from "./components/pages/Marketplace";
import Cart from "./components/pages/Cart";
import Profile from "./components/pages/Profile";
import Test from "./components/pages/Test";
import ProductScreen from "./components/pages/ProductScreen";

function App() {
  return (
    <div className="App">
      <Banner />
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
      <NavBottomBar />
    </div>
  );
}

export default App;
