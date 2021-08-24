import React, { createContext, useState } from "react";

export const PlansContext = createContext("Plans");

export function PlansProvider(props) {
    const [plans, setPlans] = useState([]);
    const plansValue = { plans, setPlans };
    return <PlansContext.Provider value={plansValue}>{props.children}</PlansContext.Provider>;
}
