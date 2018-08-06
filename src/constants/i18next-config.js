
export default {
  language: null,
  whitelist: [ "ru" ],
  languagesList: [
    { key: "ru", value: "ru", text: "Russian/Русский" }
  ],
  fallbackLng: (process.env.NODE_ENV !== "production") ? "ru" : "ru",
  ns: [
    "main",
    "modal_newsletter",
    "page_not_found_layout",
    "layout_homepage"
  ],
  defaultNS: "main",
  debug: (process.env.NODE_ENV !== "production") ? true : false,
}

/*
{
  language: null,
  whitelist: [ "en", "de", "ru" ],
  languagesList: [
    { key: "en", value: "en", text: "English" },
    { key: "de", value: "de", text: "German/Deutsch" },
    { key: "ru", value: "ru", text: "Russian/Русский" }
  ],
  fallbackLng: (process.env.NODE_ENV !== "production") ? "ru" : "en",
  ns: [
    "main",
    "modal_newsletter",
    "page_not_found_layout",
    "layout_homepage"
  ],
  defaultNS: "main",
  debug: (process.env.NODE_ENV !== "production") ? true : false,
}
*/
