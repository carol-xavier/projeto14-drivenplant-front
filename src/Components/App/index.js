import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";
import Home from "../../pages/Home";
import Product from "../../pages/Product";
import Checkout from "../../pages/Checkout";
import ThankYou from "../../pages/ThankYou";

import "./index.css";

export default function App() {
  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    const tokenLS = localStorage.getItem("token");
    if (tokenLS) setToken(tokenLS);
  }, []);

  return (
    // <UserContext.Provider value={}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SignIn token={token} setToken={setToken} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
    // </UserContext.Provider>
  );
}
