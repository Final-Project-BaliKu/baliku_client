import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Login, Home, Itenerary, Summary } from './pages';

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
        <Route exact path="/itenerary">
          <Itenerary />
        </Route>
        <Route exact path="/summary">
          <Summary/>
        </Route>
      </Switch>

    </>
  );
}

export default App;
