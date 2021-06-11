import React, { createContext, useContext, useReducer } from "react";
import Reducer from "./Reducers";
const StoreContext = createContext();

let defaultState = {
  count: 0,
  message: "",
  pageView: 0,
};

export const StoreProvider = ({ children, xxx }) => {
  console.log("1", xxx);
  // const [state, dispatch] = useReducer(Reducer, {}, () => {

  //   const localData = process.browser ? localStorage.getItem('state') : null
  //   return localData ? JSON.parse(localData) : defaultState
  // });
  const [state, dispatch] = useReducer(Reducer, defaultState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.getInitialProps = async (ctx) => {
  const localData = process.browser ? localStorage.getItem("state") : null;
  const data = localData ? JSON.parse(localData) : defaultState;
  console.log("2", data, ctx);
  return { xxx: data };
};

export const useStore = () => useContext(StoreContext);
