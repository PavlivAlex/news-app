import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ua from "./locales/ua/translation.json";
import us from "./locales/us/translation.json";

const options = {
  resources: {
    ua: {
      translation: ua,
    },
    us: {
      translation: us,
    },
  },
  lng: localStorage.getItem("lang") || "us",
  react: { useSuspense: false },
};

i18n.use(initReactI18next).init(options);

export default i18n;
