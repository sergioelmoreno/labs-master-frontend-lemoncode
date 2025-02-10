import React from "react";
import { PrintContext } from "../core/print.context";
import { DetailsPod } from "../pods/details/details.pod";
import { MenuPod } from "../pods/menu/menu.pod";
import { AsideLayout } from "../layout/aside.layout";
import { GridLayout } from "../layout/grid.layout";
import { WrapperLayout } from "../layout/wrapper.layout";
import { MenuLayout } from "../layout/menu.layout";
import logoUrl from "../content/logo.svg";

export const SheetScene = () => {

  const { printContext } = React.useContext(PrintContext);

  return (
    <div className="sheet">
      {
        !printContext && (
          <MenuLayout>
            <MenuPod />
          </MenuLayout>
        )
      }

      <GridLayout>

        <AsideLayout>
          <img src={logoUrl} alt="Logo Sergio Elmoreno" />
        </AsideLayout>

        <WrapperLayout>
          <DetailsPod />
        </WrapperLayout>

      </GridLayout>

    </div>

  );
};