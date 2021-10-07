import I18n from '../i18n';

/**
 * Helper to init the i18n class with a pre-defined or auto-detected locale.
 */
export const setLocale = (locale, opt_messages) => {
  if (locale) {
    const l = locale === 'auto' ?
      window.navigator.userLanguage || window.navigator.language : locale;

    try {
      I18n.init(l.split('-')[0].toLowerCase(), opt_messages);
    } catch (error) {
      console.warn(`Unsupported locale '${l}'. Falling back to default en.`);
    }
  } else {
    I18n.init(null, opt_messages);
  }
}

/** See https://www.freecodecamp.org/news/javascript-debounce-example/ **/
export const debounce = (fn, timeout = 10) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { fn.apply(this, args); }, timeout);
  };

}

export default debounce;
