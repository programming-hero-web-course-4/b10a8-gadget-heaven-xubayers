/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const MoneyContext = createContext();

function MoneyProvider({ children }) {
  const [cost, setCost] = useState(0);

  return (
    <MoneyContext.Provider value={{ cost, setCost }}>
      {children}
    </MoneyContext.Provider>
  );
}

function useMoney() {
  return useContext(MoneyContext);
}

export { MoneyProvider, useMoney };
