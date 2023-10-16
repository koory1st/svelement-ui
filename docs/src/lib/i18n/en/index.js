import util from '$lib/i18n/en/util.js';
import button from '$lib/i18n/en/button.js';

export const langDict = {
  ...util,
  ...button,
};

function getText(key) {
  if (key in langDict) {
    return langDict[key];
  }
  return 'todo';
}

export default getText;
