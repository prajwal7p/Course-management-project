import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./context/CartContext";

import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/Auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AuthProvider>
    <Toaster/>
    <CartProvider>
    <App />
    </CartProvider>
    </AuthProvider>
);