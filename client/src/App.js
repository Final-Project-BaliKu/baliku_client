import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Login, Home, Itenerary, Summary, AllDestinations, DetailTrip, Checkout } from './pages';

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
      </Switch>

    </>
  );
}

export default App;
