import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import First from "./components/first";
import Second from "./components/second";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <First />
      <Second />
      <Footer />
    </>
  );
}

export default App;
