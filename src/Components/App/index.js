import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Home from "../../pages/Home";
import ProductDetails from "../../pages/ProductDetails";
import Checkout from "../../pages/Checkout";
import ThankYou from "../../pages/ThankYou";

import "../../assets/style/index.css";

export default function App() {

  const [userCart, setUserCart] = React.useState([]);


  return (
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
          path="/home/:category"
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
  );
}
