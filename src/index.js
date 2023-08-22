import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  // createBrowserRouter,
  // RouterProvider
  Routes,
  Route
} from "react-router-dom";
import './index.css';
// import ErrorBoundary from "./pages/error-page";
import Product from './components/ecomm/productDetails';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './pages/error-page';

// Working, minus the product id white screen
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} errorElement=<ErrorBoundary /> />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<ErrorBoundary />} />
    </Routes>
  </BrowserRouter>
)

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorBoundary />,
//     children: [
//       {
//         path: "/product/:id",
//         element: <Product />
//       }
//     ]
//   }
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
