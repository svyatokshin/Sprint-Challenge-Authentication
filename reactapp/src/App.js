import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login.js';
import Users from './components/Users.js';
import Register from './components/Register.js';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/'>
          <Login />
        </Route>

        <Route path = '/register'>
          <Register />
        </Route>

        <PrivateRoute path='/users' component={Users}/>
      </Switch>
    </div>
  );
}

export default App;
