import en_navigation from "./en/navigation.json";
import fr_navigation from "./fr/navigation.json";
import ar_navigation from "./ar/navigation.json";

import en_contact from "./en/contact.json";
import fr_contact from "./fr/contact.json";
import ar_contact from "./ar/contact.json";

import en_global from "./en/global.json";
import fr_global from "./fr/global.json";
import ar_global from "./ar/global.json";

import en_writing from "./en/writing.json";
import fr_writing from "./fr/writing.json";
import ar_writing from "./ar/writing.json";

const messages = {
  en: {
    navigation: en_navigation,
    contact: en_contact,
    global: en_global,
    writing: en_writing,
  },
  fr: {
    navigation: fr_navigation,
    contact: fr_contact,
    global: fr_global,
    writing: fr_writing,
  },
  ar: {
    navigation: ar_navigation,
    contact: ar_contact,
    global: ar_global,
    writing: ar_writing,
  },
};

export default messages;
