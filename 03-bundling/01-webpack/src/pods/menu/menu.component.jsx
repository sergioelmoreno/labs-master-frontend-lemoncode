import React from "react";

export const Menu = ({ language, handleLanguage }) => {

  return (
    <ul className="menu">
      <li onClick={() => handleLanguage("ES")}>ES</li>
      <li onClick={() => handleLanguage("EN")}>EN</li>
    </ul>
  )
}