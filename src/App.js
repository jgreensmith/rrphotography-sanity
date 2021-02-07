import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import About from './routes/about';
import Home from './routes/home';
import Footer from './components/footer/footer';
import Landscape from './routes/gallery/landscape';
import Wildlife from './routes/gallery/wildlife';
import Cyanotype from './routes/gallery/cyanotype';
import BlackWhite from './routes/gallery/black-white';
import Gallery from './routes/gallery/gallery';

const App = () => (
  <Router>
    <div className="App">
        <Navbar/>
        <div className="page-container">
            <Switch>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/gallery">
                <Gallery/>
              </Route>
              <Route path="/landscape">
                <Landscape/>
              </Route>
              <Route path="/wildlife">
                <Wildlife/> 
              </Route>
              <Route path="/cyanotype">
                <Cyanotype/>
              </Route>
              <Route path="/black-white">
                <BlackWhite/> 
              </Route>
              <Route path="/contact">
                  <h1>Giz a ring</h1> 
              </Route>
              <Route path="/">
                <Home/>
              </Route>

            </Switch>
        </div>
        <Footer/>
          
        
    </div>
  </Router>
);
export default App;