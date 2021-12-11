import React, { Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import './App.css';
import GithubState from './context/github/GithubState';
import Alert from './components/layout/Alert';
import About from './components/layout/pages/About';
import NotFound from './components/layout/pages/NotFound'
import User from './components/layout/users/User';
import AlertState from './context/alert/AlertState';
import Home from './components/layout/pages/Home';


const App = () =>{
    
    return (
      <GithubState>
        <AlertState>
      <Router>
      <div className="App">
        <Navbar/>
        <div className="container">
          <Alert/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' component={User}/>
            <Route component={NotFound} />
          </Switch> 
      </div>
    </div>
  </Router>
  </AlertState>
  </GithubState>
  );
  
}

export default App;
