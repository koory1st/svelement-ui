import util from '$lib/i18n/zh/util.js';
import button from '$lib/i18n/zh/button.js';
import container from '$lib/i18n/zh/container.js';
import icon from '$lib/i18n/zh/icon.js';
import layout from '$lib/i18n/zh/layout.js';
import link from '$lib/i18n/zh/link.js';
import scrollbar from '$lib/i18n/zh/scrollbar.js';
import checkbox from '$lib/i18n/zh/checkbox.js';
import divider from '$lib/i18n/zh/divider.js';
import radio from '$lib/i18n/zh/radio.js';

export const langDict = {
  ...util,
  ...button,
  ...container,
  ...icon,
  ...layout,
  ...link,
  ...scrollbar,
  ...checkbox,
  ...radio,
  ...divider,
};

function getText(key) {
  if (key in langDict) {
    return langDict[key];
  }
  return 'todo';
}

export default getText;
