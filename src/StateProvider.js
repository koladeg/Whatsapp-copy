// setting up data layer
// to track the basket

import React, { createContext, useReducer, useContext } from 'react';

//This is the Data layer
export const StateContext = createContext();

// Built a provider
export const StateProvider = ({ reducer, initialState, children}) =>
( <StateContext.Provider value ={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider> );

export const useStateValue = () => useContext(StateContext)