import { StorageHandler } from "config/C4";

import en from './en';
import nl from './nl';

const i18n = () => {
  let languageFileToExport = nl;
  const setLanguage = StorageHandler.get("language");
  if (setLanguage && setLanguage.code === "EN") {
    languageFileToExport = en;
  }

  return languageFileToExport;
};

export default i18n;
