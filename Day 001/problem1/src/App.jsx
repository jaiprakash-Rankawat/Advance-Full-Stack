import React from "react";
import Greet from "./Components/Greet";
import Students from "./Components/Students";
import Header from "./Task/Header";
import Footer from "./Task/Footer";
import MainContent from "./Task/MainContent";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <Greet />
      <Students /> */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;
