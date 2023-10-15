<script>
  import './app.css';
  import { PUBLIC_BASE_PATH } from '$env/static/public';
  import {
    SvelCol,
    SvelContainer,
    SvelFooter,
    SvelHeader,
    SvelMain,
    SvelRow,
    SvelLink,
    SvelButton,
  } from '@svelement-ui/all';
  import { SvelIcon, Github } from '@svelement-ui/icon';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { default as zh, langDict as zhLangDict } from '$lib/i18nZhCn';
  import { default as en, langDict as enLangDict } from '$lib/i18nEn';

  let langString = 'EN';
  let langFn = writable(zh);
  setContext('lang', zh);
  setContext('langFn', langFn);

  function handleLang() {
    if (langString === 'CN') {
      langString = 'EN';
      $langFn = zh;
      return;
    }
    langString = 'CN';
    $langFn = en;
  }
</script>

<SvelContainer direction="vertical" class="docs-container">
  <SvelHeader class="flex border-b border-solid border-gray-200">
    <SvelRow class="lg:w-6/12 mx-auto items-center">
      <SvelCol span={6} class="title">
        <SvelLink href={PUBLIC_BASE_PATH} type="primary" underline={false}>
          <span class="text-2xl font-bold">SvelementUI</span>
        </SvelLink>
      </SvelCol>
      <SvelCol span={18} class="flex justify-end">
        <SvelLink href="{PUBLIC_BASE_PATH}component" type="primary" underline={false}>
          Component
        </SvelLink>
        <SvelButton class="ml-2" type="primary" text on:click={handleLang}>
          {langString}
        </SvelButton>
        <SvelLink
          class="ml-2"
          href="https://github.com/koory1st/svelement-ui"
          type="primary"
          target="_blank"
          underline={false}
        >
          <SvelIcon size={24}>
            <Github />
          </SvelIcon>
        </SvelLink>
      </SvelCol>
    </SvelRow>
  </SvelHeader>

  <SvelMain>
    <div class="xs:w-12/12 sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-6/12 mx-auto">
      <slot />
    </div>
  </SvelMain>
  <SvelFooter>
    <div class="border-t border-solid border-gray-200">
      <div class="xs:w-12/12 sm:w-8/12 md:w-6/12 lg:w-6/12 xl:w-6/12 mx-auto">
        SvelementUI footer
      </div>
    </div>
  </SvelFooter>
</SvelContainer>

<style>
</style>
