import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Submit from './Pages/Submit';
import Information from './Pages/Info';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          
          <Route path='/' exact component={Home} />
          <Route path='/Submit' component={Submit} />
         <Route path = '/info' component={Information}/>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;

