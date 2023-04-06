import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Menu from "./components/Menu";


function App() {
  return (
    <div className="App">

    <BrowserRouter>

      <Menu />

      <Routes>{/* section dedicated to displaying the URL user is in */}
        <Route exact path="about" element={<About />}></Route>{/*in this path display this element which in this is a component called About */}

        <Route exact path="clients" element={<Clients />}></Route>

        <Route exact path="contact" element={<Contact />}></Route>

      </Routes>


    
    </BrowserRouter>

    </div>
  );
}

export default App;
