import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "../../Contexts/UserContext";

import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Home from "../../pages/Home";
import ProductDetails from "../../pages/ProductDetails";
import Checkout from "../../pages/Checkout";
import ThankYou from "../../pages/ThankYou";

import "../../assets/style/index.css";

export default function App() {
  const [token, setToken] = React.useState(null);
  const [userCart, setUserCart] = React.useState([]);

  const getToken = { token, setToken };

  React.useEffect(() => {
    const tokenLS = localStorage.getItem("token");
    if (tokenLS) setToken(tokenLS);
  }, []);

  return (
    <UserContext.Provider value={getToken}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SignIn />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={<Home userCart={userCart} setUserCart={setUserCart} />}
        />
        <Route
          path="/product-details/:productId"
          element={
            <ProductDetails userCart={userCart} setUserCart={setUserCart} />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}
