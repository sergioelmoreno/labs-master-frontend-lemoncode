import React from "react";
import { SheetScene } from "./scenes/sheet.scene";
import { LangProvider } from "./core/lang.context";
import { PrintProvider } from "./core/print.context";

export const App = () => {
  return (
    <LangProvider>
      <PrintProvider>
        <SheetScene />
      </PrintProvider>
    </LangProvider>
  )
};