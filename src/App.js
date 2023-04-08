import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

import store from './redux/store.js';
import { Provider } from 'react-redux'
import Counter from "./components/Counter";


function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <Container maxWidth="sm" sx={{ marginTop:"50px"}}>

          <BrowserRouter>
            <Box sx={{ mb:3}}>
              <Menu />  
            </Box>

            <Routes>{/* section dedicated to displaying the URL user is in */}
              <Route exact path="about" element={<About />}></Route>{/*in this path display this element which in this is a component called About */}

              <Route exact path="clients" element={<Clients />}></Route>

              <Route exact path="contact" element={<Contact />}></Route>

              <Route exact path='counter' element={<Counter />}></Route>

            </Routes>
          </BrowserRouter>

        </Container>
      </Provider>
    </div>
  );
}

export default App;
