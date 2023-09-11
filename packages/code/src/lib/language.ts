import type { Language } from 'highlight.js';
import typescript from 'svelte-highlight/languages/typescript';

type LanguageType = { [key: string]: Language | null };

const languages: LanguageType = {
  typescript: typescript,
  svelte: null,
};

export function getLang(lang: string): Language | null {
  if (!lang) {
    return null;
  }
  return languages[lang];
}
