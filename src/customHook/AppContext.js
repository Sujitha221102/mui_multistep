import React, { createContext, useContext, useReducer, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

const initialState = {
  clickButton: null,
  buttonName: "",
  amount: 0,
  addons: [],
  addAmount: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "BUTTON":
      return { ...state, clickButton: action.payload };
    case "SET_BUTTON_NAME":
      return { ...state, buttonName: action.payload };
    case "SET_AMOUNT":
      return { ...state, amount: action.payload };
    case "SET_ADDON":
      if (state.addons.includes(action.payload)) {
        return {
          ...state,
          addons: state.addons.filter((addon) => addon !== action.payload),
        };
      } else {
        return { ...state, addons: [...state.addons, action.payload] };
      }
    case "SET_ADDAMOUNT":
      if (state.addAmount.includes(action.payload)) {
        return {
          ...state,
          addAmount: state.addAmount.filter((addon) => addon !== action.payload),
        };
      } else {
        return { ...state, addAmount: [...state.addAmount, action.payload] };
      }
    default:
      return state;
  }
};
export const AppProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = {
    state,
    dispatch,
    toggle,
    setToggle
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
