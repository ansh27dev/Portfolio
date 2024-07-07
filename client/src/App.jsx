import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import First from "./components/first";
import Second from "./components/second";
import Footer from "./components/footer";

function App() {
  return (
    <div className="page">
      <Navbar />
      <First />
      <Second />
      <Footer />
      <div className="side-element left"></div>
      <div className="side-element right"></div>
    </div>
  );
}

export default App;
