import React, { useState } from "react";

export const PrintContext = React.createContext();

const PRINT = process.env.REACT_APP_PRINT || false;

export const PrintProvider = ({ children }) => {

  const [printContext, setPrintContext] = useState(PRINT);

  const setPrintVersion = build => setPrintContext(build);

  return (
    <PrintContext.Provider value={{ printContext, setPrintVersion }}>
      {children}
    </PrintContext.Provider>
  )
};