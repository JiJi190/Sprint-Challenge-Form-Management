import React from 'react';
import './App.css';
import {Router, Route, Link} from 'react-router-dom';
import Registration from './components/Registration'
import PrivateRoute from './components/PrivateRoute'
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Route>
        <Link exact to="/">Main</Link>
        <Link exact to="/data">Recipes</Link>
        <Route exact path="/" component={Registration} />
        <PrivateRoute exact path="/data" component={Protected} />
      </Route>
    </div>
  );
}

export default App;
