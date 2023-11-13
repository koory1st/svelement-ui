<script>
  import './app.css';
  import { PUBLIC_BASE_PATH } from '$env/static/public';
  import {
    SvelButton,
    SvelCol,
    SvelContainer,
    SvelFooter,
    SvelHeader,
    SvelLink,
    SvelMain,
    SvelRow,
  } from '@svelement-ui/all';
  import { Github, SvelIcon } from '@svelement-ui/icon';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { default as zh } from '$lib/i18n/zh/index.js';
  import { default as en } from '$lib/i18n/en/index.js';

  let langString = 'EN';
  let langFn = writable(zh);
  setContext('lang', zh);
  setContext('langFn', langFn);

  function handleLang() {
    if (langString === '中') {
      langString = 'EN';
      $langFn = zh;
      return;
    }
    langString = '中';
    $langFn = en;
  }
</script>

<SvelContainer class="docs-container" direction="vertical">
  <SvelHeader class="flex border-b border-solid border-gray-200">
    <SvelRow class="xs:w-12/12 sm:w-8/12 md:w-8/12 lg:w-12/12 xl:w-12/12 mx-auto items-center">
      <SvelCol class="title" span={6}>
        <SvelLink href={PUBLIC_BASE_PATH} type="primary" underline={false}>
          <span class="text-2xl font-bold">SvelementUI</span>
        </SvelLink>
      </SvelCol>
      <SvelCol class="flex justify-end" span={18}>
        <SvelLink href="{PUBLIC_BASE_PATH}component" type="primary" underline={false}>
          Component
        </SvelLink>
        <SvelButton class="ml-2" on:click={handleLang} text type="primary">
          {langString}
        </SvelButton>
        <SvelLink
          class="ml-2"
          href="https://github.com/koory1st/svelement-ui"
          target="_blank"
          type="primary"
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
    <div class="xs:w-12/12 sm:w-8/12 md:w-8/12 lg:w-12/12 xl:w-12/12 mx-auto">
      <slot />
    </div>
  </SvelMain>
  <SvelFooter>
    <div class="border-t border-solid border-gray-200">
      <div class="xs:w-12/12 sm:w-8/12 md:w-8/12 lg:w-12/12 xl:w-12/12 mx-auto">
        SvelementUI footer
      </div>
    </div>
  </SvelFooter>
</SvelContainer>

<style>
</style>
