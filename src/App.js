import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import About from './routes/about';
import Home from './routes/home';
import Footer from './components/footer/footer';

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
                <h2>Gallery</h2>
              </Route>
              <Route path="/landscape">
                <h1>landz</h1> 
              </Route>
              <Route path="/wildlife">
                <h1>birdz</h1> 
              </Route>
              <Route path="/cyanotype">
                <h1>cyano</h1>
              </Route>
              <Route path="/black-white">
                <h1>b/w</h1> 
              </Route>
              <Route path="/blog">
                  <h1>Calendar</h1> 
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