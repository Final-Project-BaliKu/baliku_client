import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Login, Home } from './pages';

function App() {


  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/dahsboard">
          <Home />
        </Route>
      </Switch>

    </>
  );
}

export default App;
