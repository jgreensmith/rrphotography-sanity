import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Navbar from './components/navbar';
import About from './routes/about';
import Home from './routes/home';
import Footer from './components/footer/footer';
import Landscape from './routes/gallery/landscape';
import Wildlife from './routes/gallery/wildlife';
import Cyanotype from './routes/gallery/cyanotype';
import BlackWhite from './routes/gallery/black-white';
import Gallery from './routes/gallery/gallery';
import Contact from './routes/contact/contact';

library.add(fab);

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
                  <Contact/> 
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