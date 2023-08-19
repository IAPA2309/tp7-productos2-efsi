import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Product/Products";
import NotFound from "./components/404Error/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home products={products} />}></Route>
            <Route
              path="/products/:productId"
              element={<Products products={products} />}
            ></Route>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
