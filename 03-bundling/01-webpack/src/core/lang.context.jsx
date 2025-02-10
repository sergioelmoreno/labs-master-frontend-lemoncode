import React, { useState } from "react";

export const LangContext = React.createContext();

const LANG_ENV = process.env.REACT_APP_LANG_ENV || "EN";

export const LangProvider = ({ children }) => {

  const [language, setLanguage] = useState(LANG_ENV);
  const switchLanguage = lang => setLanguage(lang);

  return (
    <LangContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LangContext.Provider>
  )
};