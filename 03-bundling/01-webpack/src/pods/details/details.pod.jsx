import React from "react";
import { getData } from "./api/api";
import { Details } from "./details.component";
import { LangContext } from "../../core/lang.context";

export const DetailsPod = () => {

  const [dataCv, setDataCv] = React.useState([]);
  const { language } = React.useContext(LangContext);

  React.useEffect(() => {

    getData(language).then(setDataCv);

  }, [language]);

  return <Details data={dataCv} lang={language} />
};