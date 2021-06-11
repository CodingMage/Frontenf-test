import { useState, useEffect, useReducer, createContext } from "react";
import { user } from "./reducers";

// initial state
const init = () => {
  if (typeof window !== "undefined") {
    const initialState = {
      user: JSON.parse(localStorage.getItem("user")) || {},

      isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    };
    return initialState;
  }
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers =
  (...reducers) =>
  (state, action) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(user), init());
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
