import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignInPage from "../SignInPage";
import SignUpPage from "../SignUpPage";
import HomePage from "../HomePage";
import ProductPage from "../ProductPage";
import CheckoutPage from "../CheckoutPage";
import ThankYouPage from "../ThankYouPage";

import "./App.css";

export default function App() {
  return (
    // <UserContext.Provider value={}>
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
    // </UserContext.Provider>
  );
}
