import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Banner from "./components/organisms/Banner";
import Home from "./components/pages/Home";
import NavBottomBar from "./components/organisms/NavBottomBar";
import Marketplace from "./components/pages/Marketplace";
import Cart from "./components/pages/Cart";
import Profile from "./components/pages/Profile";
import ProductScreen from "./components/pages/ProductScreen";
import { useEffect } from "react";
import Login from "./components/pages/Login";
import CreateAccount from "./components/pages/CreateAccount";

function App() {
  const location = useLocation();

  const hideBanner =
    location.pathname.startsWith("/product") ||
    location.pathname.startsWith("/marketplace") ||
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/create-account");

  const hideNavBottomBar =
    location.pathname.startsWith("/product") ||
    location.pathname.startsWith("/login") ||
    location.pathname.startsWith("/create-account");

  useEffect(() => {
    if (
      location.pathname.startsWith("/product") ||
      location.pathname.startsWith("/marketplace")
    ) {
      document.body.style.backgroundColor = "#121212";
    } else {
      document.body.style.backgroundColor = "var(--background-color-2)";
    }
  }, [location.pathname]);

  return (
    <div className="App">
      {!hideBanner && <Banner />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product/:id" element={<ProductScreen />} />
        </Routes>
      </main>
      {!hideNavBottomBar && <NavBottomBar />}
    </div>
  );
}

export default App;
