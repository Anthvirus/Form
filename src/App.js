import React from "react";
import Header from "./Header";
import SignUp from "./SignUp";
import Footer from "./Footer";
import './index.css';

function App() {
  return (
    <div className="min-h-96 background">
      <Header />
      <SignUp/>
      <Footer/>
    </div>
  );
}

export default App;