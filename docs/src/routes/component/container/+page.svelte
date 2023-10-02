<script lang="ts">
  import { SvelAside, SvelContainer, SvelFooter, SvelHeader, SvelMain } from '@svelement-ui/all';
  import type GetText from '$lib/i18n';

  import { getContext } from 'svelte';
  import Example from '$lib/example.svelte';

  let lang: GetText = getContext('lang');
</script>

<h1>{lang('ccon01010')}</h1>
<p>{lang('ccon01020')}</p>
<p>
  <span class="code">&lt;SvelContainer&gt;</span>
  {lang('ccon01030')}
</p>
<p>
  <span class="code">&lt;SvelHeader&gt;</span>
  {lang('ccon01040')}
</p>

<p>
  <span class="code">&lt;SvelAside&gt;</span>
  {lang('ccon01050')}
</p>
<p>
  <span class="code">&lt;SvelMain&gt;</span>
  {lang('ccon01060')}
</p>
<p>
  <span class="code">&lt;SvelFooter&gt;</span>
  {lang('ccon01070')}
</p>

<h1>{lang('ccon02010')}</h1>

<Example
  code={`
<div class="common-layout">
  <SvelContainer class="common-layout" direction="vertical">
    <SvelHeader>Header</SvelHeader>
    <SvelMain>Main</SvelMain>
  </SvelContainer>
</div>`}
>
  <div class="common-layout">
    <SvelContainer class="common-layout" direction="vertical">
      <SvelHeader>Header</SvelHeader>
      <SvelMain>Main</SvelMain>
    </SvelContainer>
  </div>
</Example>

<Example
  class="mt-10"
  code={`
<div class="common-layout">
  <SvelContainer class="common-layout" direction="vertical">
    <SvelHeader>Header</SvelHeader>
    <SvelMain>Main</SvelMain>
    <SvelFooter>Footer</SvelFooter>
  </SvelContainer>
</div>`}
>
  <div class="common-layout">
    <SvelContainer class="common-layout" direction="vertical">
      <SvelHeader>Header</SvelHeader>
      <SvelMain>Main</SvelMain>
      <SvelFooter>Footer</SvelFooter>
    </SvelContainer>
  </div>
</Example>

<Example
  class="mt-10"
  code={`
<div class="common-layout">
  <SvelContainer class="common-layout">
    <SvelAside width="200px">Aside</SvelAside>
    <SvelMain>Main</SvelMain>
  </SvelContainer>
</div>`}
>
  <div class="common-layout">
    <SvelContainer class="common-layout">
      <SvelAside width="200px">Aside</SvelAside>
      <SvelMain>Main</SvelMain>
    </SvelContainer>
  </div>
</Example>

<Example
  class="mt-10"
  code={`
<div class="common-layout">
  <SvelContainer class="common-layout" direction="vertical">
    <SvelHeader>Header</SvelHeader>
    <SvelContainer>
      <SvelAside width="200px">Aside</SvelAside>
      <SvelMain>Main</SvelMain>
    </SvelContainer>
  </SvelContainer>
</div>`}
>
  <div class="common-layout">
    <SvelContainer class="common-layout" direction="vertical">
      <SvelHeader>Header</SvelHeader>
      <SvelContainer>
        <SvelAside width="200px">Aside</SvelAside>
        <SvelMain>Main</SvelMain>
      </SvelContainer>
    </SvelContainer>
  </div>
</Example>

<Example
  class="mt-10"
  code={`
<div class="common-layout">
  <SvelContainer class="common-layout" direction="vertical">
    <SvelHeader>Header</SvelHeader>
    <SvelContainer>
      <SvelAside width="200px">Aside</SvelAside>
      <SvelContainer direction="vertical">
        <SvelMain>Main</SvelMain>
        <SvelFooter>Footer</SvelFooter>
      </SvelContainer>
    </SvelContainer>
  </SvelContainer>
</div>`}
>
  <div class="common-layout">
    <SvelContainer class="common-layout" direction="vertical">
      <SvelHeader>Header</SvelHeader>
      <SvelContainer>
        <SvelAside width="200px">Aside</SvelAside>
        <SvelContainer direction="vertical">
          <SvelMain>Main</SvelMain>
          <SvelFooter>Footer</SvelFooter>
        </SvelContainer>
      </SvelContainer>
    </SvelContainer>
  </div>
</Example>

<style>
  :global(.common-layout .svel-header, .common-layout .svel-footer) {
    background-color: var(--svel-color-primary-light-7);
    color: var(--svel-text-color-primary);
    text-align: center;
  }

  :global(
      .common-layout .svel-header,
      .common-layout .svel-footer,
      .common-layout .svel-main,
      .common-layout .svel-aside
    ) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :global(.common-layout .svel-main) {
    background-color: var(--svel-color-primary-light-9);
    color: var(--svel-text-color-primary);
    text-align: center;
    height: 150px;
  }

  :global(.common-layout .svel-aside) {
    background-color: var(--svel-color-primary-light-8);
    color: var(--svel-text-color-primary);
    text-align: center;
  }
</style>
