import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
                <Route path="/">
                  <Home></Home>
                </Route>
                  
            </Switch>
      </Router>
    </div>
  );
}

export default App;
