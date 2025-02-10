import React from "react";

export const AsideLayout = ({ children }) => {
  return (
    <aside aria-hidden="true" focusable="false">
      {children}
    </aside>
  )
};