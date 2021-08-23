import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Login, Home, Itenerary, Summary, AllDestinations, DetailTrip, Checkout, Register } from './pages';

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
        <Route exact path="/AllDestinations">
          <AllDestinations/>
        </Route>
        <Route exact path="/trip">
          <DetailTrip/>
        </Route>
        <Route exact path="/checkout">
          <Checkout/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
      </Switch>

    </>
  );
}

export default App;
