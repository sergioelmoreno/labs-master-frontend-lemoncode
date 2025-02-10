import React from "react";
import { LangContext } from "../../core/lang.context";
import { Menu } from "./menu.component";

export const MenuPod = () => {

  const { language, switchLanguage } = React.useContext(LangContext);

  const handleLanguage = (lang) => {
    switchLanguage(lang);
  }

  return (
    <Menu language={language} handleLanguage={handleLanguage} />
  )
};