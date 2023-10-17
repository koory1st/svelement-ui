import util from '$lib/i18n/en/util.js';
import button from '$lib/i18n/en/button.js';
import container from '$lib/i18n/en/container.js';

export const langDict = {
  ...util,
  ...button,
  ...container,
};

function getText(key) {
  if (key in langDict) {
    return langDict[key];
  }
  return 'todo';
}

export default getText;
