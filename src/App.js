import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Product/Products";

function App() {
  const [products, setProducts] = useState([{}]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  console.log(products);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home products={products}/>}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
            <Route path="/products/:productId" element={<Products products={products}/>}></Route>
            <Route path="/home" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
