import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import ProductDesc from "./components/ProductDesc";
import ColdEmails from "./components/ColdEmails";
import Tweets from "./components/Tweets";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-desc" element={<ProductDesc />} />
        <Route path="cold-emails" element={<ColdEmails />} />
        <Route path="tweets" element={<Tweets />} />
      </Routes>
    </div>
  );
}

export default App;
