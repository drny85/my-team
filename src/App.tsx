import React from "react";
import Home from "./components/Home";
import "./App.css";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
