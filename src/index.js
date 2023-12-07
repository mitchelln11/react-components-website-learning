import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import Product from './components/ecomm/productDetails';
import { CartItem } from './components/ecomm/Cart';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './pages/error-page';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} errorElement=<ErrorBoundary /> />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<ErrorBoundary />} />
    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
