import React from "react";
import { createContext } from "react";
import MainComponent from "./MainComponent";

export const LoginContext = createContext();

const Context = () => {
  const userInfo = {
    name: "Anvi",
    age: 1,
    address: {
      flat: "104",
      city: "pune",
    },
  };
  return (
    <LoginContext.Provider value={userInfo}>
      <MainComponent></MainComponent>
    </LoginContext.Provider>
  );
};

export default Context;
