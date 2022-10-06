import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
          <Route exact path="*" element={<h1>404 Page Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
