<script>
  import { SvelAside, SvelContainer, SvelFooter, SvelHeader, SvelMain } from '@svelement-ui/all';
  import { getContext } from 'svelte';
  import Example from '$lib/example.svelte';

  let langFn = getContext('langFn');
</script>

<h1>{$langFn('ccon01010')}</h1>
<p>{$langFn('ccon01020')}</p>
<p>
  <span class="code">&lt;SvelContainer&gt;</span>
  {$langFn('ccon01030')}
</p>
<p>
  <span class="code">&lt;SvelHeader&gt;</span>
  {$langFn('ccon01040')}
</p>

<p>
  <span class="code">&lt;SvelAside&gt;</span>
  {$langFn('ccon01050')}
</p>
<p>
  <span class="code">&lt;SvelMain&gt;</span>
  {$langFn('ccon01060')}
</p>
<p>
  <span class="code">&lt;SvelFooter&gt;</span>
  {$langFn('ccon01070')}
</p>

<h2>{$langFn('ccon02010')}</h2>

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
