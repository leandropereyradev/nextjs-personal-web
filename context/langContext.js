import { createContext, useState } from "react";
import { IntlProvider } from "react-intl";
import LangES from "../lang/es.json";
import LangEN from "../lang/en.json";
import LangCAT from "../lang/cat.json";

const langContext = createContext();

const LangProvider = ({ children }) => {
  let localeDefault = 'es';
  let msgDefault = LangES;

  // const langStorage = () => {
  //   if (typeof window !== "undefined") {
  //     localStorage.getItem("lang");
  //   }
  // };

  // if (langStorage === "es") {
  //   msgDefault = LangES;
  //   localeDefault = "es";
  // } else if (langStorage === "en") {
  //   msgDefault = LangEN;
  //   localeDefault = "en";
  // } else if (langStorage === "cat") {
  //   msgDefault = LangCAT;
  //   localeDefault = "cat";
  // } else {
  //   if (typeof localStorage !== "undefined") {
  //     localStorage.setItem("lang", "es");
  //   }
  //   localeDefault = "es";
  //   msgDefault = LangES;
  // }

  const [lang, setLang] = useState(msgDefault);
  const [locale, setLocale] = useState(localeDefault);

  const changeLang = (language) => {
    switch (language) {
      case "es":
        // localStorage.setItem("lang", "es");
        setLang(LangES);
        setLocale("es");
        break;

      case "en":
        // localStorage.setItem("lang", "en");
        setLang(LangEN);
        setLocale("en");
        break;

      case "cat":
        // localStorage.setItem("lang", "cat");
        setLang(LangCAT);
        setLocale("cat");
        break;

      default:
        // localStorage.setItem("lang", "es");
        setLang(LangES);
        setLocale("es");
        break;
    }
  };

  return (
    <langContext.Provider value={{ changeLang: changeLang }}>
      <IntlProvider locale={locale} messages={lang}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
