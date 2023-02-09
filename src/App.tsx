import React from "react";
import { Navbar } from "./components/NavBar";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <body className="h-screen">
        <Navbar />
        <Home />
      </body>
    </>
  );
}

export default App;
