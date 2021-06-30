import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ContextFun from "./context/ContextProvider";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="outermain__container">
        <ContextFun>
          <Navbar />
          <Home />
        </ContextFun>

      </div>
    </>
  );
}

export default App;
