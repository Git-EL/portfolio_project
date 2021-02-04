import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react';
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Curriculum from "./components/Curriculum";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/curriculum" component={Curriculum} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
