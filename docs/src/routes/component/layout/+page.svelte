<script lang="ts">
  import { SvelRow, SvelCol } from '@svelement-ui/all';
  import type GetText from '$lib/i18n';
  import { getContext } from 'svelte';
  import Example from '$lib/example.svelte';
  let lang: GetText = getContext('lang');
</script>

<h1>{lang('clay01010')}</h1>
<p>{lang('clay01020')}</p>

<h2>{lang('clay02010')}</h2>
<p>{lang('clay02020')}</p>
<p>{lang('clay02030')}</p>

<Example
  code={`
<SvelRow class="mb-4">
  <SvelCol span={24}><div class="grid-content ep-bg-purple-dark" /></SvelCol>
</SvelRow>

<SvelRow class="mb-4">
  <SvelCol span={12}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={12}><div class="grid-content ep-bg-purple-light" /></SvelCol>
</SvelRow>

<SvelRow class="mb-4">
  <SvelCol span={8}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={8}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={8}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>

<SvelRow class="mb-4">
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
</SvelRow>
<SvelRow>
  <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={4}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={4}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={4}><div class="grid-content ep-bg-purple-light" /></SvelCol>
</SvelRow>`}
>
  <SvelRow class="mb-4">
    <SvelCol span={24}><div class="grid-content ep-bg-purple-dark" /></SvelCol>
  </SvelRow>

  <SvelRow class="mb-4">
    <SvelCol span={12}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={12}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  </SvelRow>

  <SvelRow class="mb-4">
    <SvelCol span={8}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={8}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={8}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>

  <SvelRow class="mb-4">
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  </SvelRow>
  <SvelRow>
    <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={4}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={4}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={4}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  </SvelRow>
</Example>

<h2>{lang('clay03010')}</h2>
<p>{lang('clay03020')}</p>
<p>{lang('clay03030')}</p>

<Example
  code={`
<SvelRow gutter={40} class="mb-4">
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
</SvelRow>`}
>
  <SvelRow gutter={40}>
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  </SvelRow>
</Example>

<h2>{lang('clay04010')}</h2>
<p>{lang('clay04020')}</p>
<Example
  code={`
<SvelRow gutter={20} class="mb-4">
  <SvelCol span={16}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={8}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>
<SvelRow gutter={20} class="mb-4">
  <SvelCol span={8}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={8}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>
<SvelRow gutter={20} class="mb-4">
  <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={16}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>`}
>
  <SvelRow gutter={20} class="mb-4">
    <SvelCol span={16}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={8}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
  <SvelRow gutter={20} class="mb-4">
    <SvelCol span={8}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={8}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
  <SvelRow gutter={20}>
    <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={16}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={4}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
</Example>

<h2>{lang('clay05010')}</h2>
<p>{lang('clay05020')}</p>
<p>{lang('clay05030')}</p>
<Example
  code={`
<SvelRow gutter={20} class="mb-4">
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6} offset={6}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>
<SvelRow gutter={20} class="mb-4">
  <SvelCol span={6} offset={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6} offset={6}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>
<SvelRow gutter={20}>
  <SvelCol span={12} offset={6}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>`}
>
  <SvelRow gutter={20} class="mb-4">
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6} offset={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
  <SvelRow gutter={20} class="mb-4">
    <SvelCol span={6} offset={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6} offset={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
  <SvelRow gutter={20}>
    <SvelCol span={12} offset={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
</Example>

<h2>{lang('clay06010')}</h2>
<p>{lang('clay06020')}</p>
<p>{lang('clay06030')}</p>
<Example
  code={`
<SvelRow class="mb-4 row-bg">
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>
<SvelRow class="mb-4 row-bg" justify="center">
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>
<SvelRow class="mb-4 row-bg" justify="end">
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>
<SvelRow class="mb-4 row-bg" justify="space-between">
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>
<SvelRow class="mb-4 row-bg" justify="space-around">
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>
<SvelRow class="row-bg" justify="space-evenly">
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
  <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
</SvelRow>`}
>
  <SvelRow class="mb-4 row-bg">
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
  <SvelRow class="mb-4 row-bg" justify="center">
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
  <SvelRow class="mb-4 row-bg" justify="end">
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
  <SvelRow class="mb-4 row-bg" justify="space-between">
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
  <SvelRow class="mb-4 row-bg" justify="space-around">
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
  <SvelRow class="row-bg" justify="space-evenly">
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple-light" /></SvelCol>
    <SvelCol span={6}><div class="grid-content ep-bg-purple" /></SvelCol>
  </SvelRow>
</Example>

<h2>{lang('clay07010')}</h2>
<p>{lang('clay07020')}</p>
<Example
  code={`
<SvelRow gutter={10}>
  <SvelCol xs={8} sm={6} md={4} lg={3} xl={1}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol xs={4} sm={6} md={8} lg={9} xl={11}>
    <div class="grid-content ep-bg-purple-light" />
  </SvelCol>
  <SvelCol xs={4} sm={6} md={8} lg={9} xl={11}><div class="grid-content ep-bg-purple" /></SvelCol>
  <SvelCol xs={8} sm={6} md={4} lg={3} xl={1}>
    <div class="grid-content ep-bg-purple-light" />
  </SvelCol>
</SvelRow>`}
>
  <SvelRow gutter={10}>
    <SvelCol xs={8} sm={6} md={4} lg={3} xl={1}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol xs={4} sm={6} md={8} lg={9} xl={11}>
      <div class="grid-content ep-bg-purple-light" />
    </SvelCol>
    <SvelCol xs={4} sm={6} md={8} lg={9} xl={11}><div class="grid-content ep-bg-purple" /></SvelCol>
    <SvelCol xs={8} sm={6} md={4} lg={3} xl={1}>
      <div class="grid-content ep-bg-purple-light" />
    </SvelCol>
  </SvelRow>
</Example>

<h2>{lang('clay08010')}</h2>
<p>{lang('clay08020')}</p>
<p>{lang('clay08030')}</p>
<ul>
  <li>
    <span class="code">hidden-xs-only</span>
    - {lang('clay08040')}
  </li>
  <li>
    <span class="code">hidden-sm-only</span>
    - {lang('clay08050')}
  </li>
</ul>

<Example>
  <div class="grid-content mb-2 ep-bg-purple w-100 h-10 hidden-xs-only">hidden-xs-only 1</div>
  <div class="grid-content mb-2 ep-bg-purple-light w-100 h-10 hidden-sm-only">hidden-sm-only 2</div>
  <div class="grid-content mb-2 ep-bg-purple w-100 h-10 hidden-sm-and-down">
    hidden-sm-and-down 3
  </div>
  <div class="grid-content mb-2 ep-bg-purple-light w-100 h-10 hidden-sm-and-up">
    hidden-sm-and-up 4
  </div>
  <div class="grid-content mb-2 ep-bg-purple-light w-100 h-10 hidden-md-only">hidden-md-only 5</div>
  <div class="grid-content mb-2 ep-bg-purple-light w-100 h-10 hidden-md-and-down">
    hidden-md-and-down 6
  </div>
  <div class="grid-content mb-2 ep-bg-purple-light w-100 h-10 hidden-md-and-up">
    hidden-md-and-up 7
  </div>
  <div class="grid-content mb-2 ep-bg-purple-light w-100 h-10 hidden-lg-only">hidden-lg-only 8</div>
  <div class="grid-content mb-2 ep-bg-purple-light w-100 h-10 hidden-lg-and-down">
    hidden-lg-and-down 9
  </div>
  <div class="grid-content mb-2 ep-bg-purple-light w-100 h-10 hidden-lg-and-up">
    hidden-lg-and-up 10
  </div>
  <div class="grid-content mb-2 ep-bg-purple-light w-100 h-10 hidden-xl-only">
    hidden-xl-only 11
  </div>
</Example>

<style>
  :global(:root) {
    --ep-c-bg-row: #f9fafc;
    --ep-c-bg-purple: #d3dce6;
    --ep-c-bg-purple-dark: #99a9bf;
    --ep-c-bg-purple-light: #e5e9f2;
  }
  :global(.grid-content) {
    border-radius: 4px;
    min-height: 36px;
  }
  .ep-bg-purple-dark {
    background: var(--ep-c-bg-purple-dark);
  }
  .ep-bg-purple {
    background: var(--ep-c-bg-purple);
  }
  .ep-bg-purple-light {
    background: var(--ep-c-bg-purple-light);
  }
  :global(.row-bg) {
    padding: 10px 0;
    background-color: var(--ep-c-bg-row);
  }
</style>
