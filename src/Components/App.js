import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import CheckoutPage from "./CheckoutPage";
import ThankYouPage from "./ThankYouPage";

export default function App() {

    return (
        // <UserContext.Provider value={}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/product" element={<ProductPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/thankyou" element={<ThankYouPage />} />
                </Routes>
            </BrowserRouter>
        // </UserContext.Provider>
    )
};
