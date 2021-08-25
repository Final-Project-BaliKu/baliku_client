import React, { useState } from "react";
import { PlansProvider } from "./context/plansContext";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Login, Home, Itenerary, Summary, AllDestinations, DetailTrip, Checkout, Register, MyTrip, DetailPlaned } from "./pages";

import { InformationUserProvider } from "./context/informationContext";

function App() {
    return (
        <>
            <PlansProvider>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/itinerary">
                        <Itenerary />
                    </Route>
                    <Route exact path="/summary">
                        <Summary />
                    </Route>
                    <Route exact path="/AllDestinations">
                        <AllDestinations />
                    </Route>
                    <Route exact path="/trip">
                        <DetailTrip />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/mytrip">
                        <MyTrip />
                    </Route>
                    <Route exact path="/planned/:id">
                        <DetailPlaned />
                    </Route>
                </Switch>
            </PlansProvider>
        </>
    );
}

export default App;
