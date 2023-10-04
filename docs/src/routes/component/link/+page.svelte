<script lang="ts">
  import { SvelLink } from '@svelement-ui/all';
  import type GetText from '$lib/i18n';
  import { getContext } from 'svelte';
  import Example from '$lib/example.svelte';
  let lang: GetText = getContext('lang');
  import { SvelIcon, Edit, View } from '@svelement-ui/icon';
</script>

<h1>{lang('clin01010')}</h1>
<p>{lang('clin01020')}</p>

<h2>{lang('clin02010')}</h2>
<p>{lang('clin02020')}</p>

<Example
  code={`
<SvelLink href="https://koory1st.github.io/svelement-ui" target="_blank">default</SvelLink>
<SvelLink type="primary">primary</SvelLink>
<SvelLink type="success">success</SvelLink>
<SvelLink type="warning">warning</SvelLink>
<SvelLink type="danger">danger</SvelLink>
<SvelLink type="info">info</SvelLink>`}
>
  <SvelLink href="https://koory1st.github.io/svelement-ui" target="_blank">default</SvelLink>
  <SvelLink type="primary">primary</SvelLink>
  <SvelLink type="success">success</SvelLink>
  <SvelLink type="warning">warning</SvelLink>
  <SvelLink type="danger">danger</SvelLink>
  <SvelLink type="info">info</SvelLink>
</Example>

<h2>{lang('clin03010')}</h2>
<p>{lang('clin03020')}</p>

<Example
  code={`
<SvelLink disabled href="https://koory1st.github.io/svelement-ui" target="_blank">
  default
</SvelLink>
<SvelLink disabled type="primary">primary</SvelLink>
<SvelLink disabled type="success">success</SvelLink>
<SvelLink disabled type="warning">warning</SvelLink>
<SvelLink disabled type="danger">danger</SvelLink>
<SvelLink disabled type="info">info</SvelLink>`}
>
  <SvelLink disabled href="https://koory1st.github.io/svelement-ui" target="_blank">
    default
  </SvelLink>
  <SvelLink disabled type="primary">primary</SvelLink>
  <SvelLink disabled type="success">success</SvelLink>
  <SvelLink disabled type="warning">warning</SvelLink>
  <SvelLink disabled type="danger">danger</SvelLink>
  <SvelLink disabled type="info">info</SvelLink>
</Example>

<h2>{lang('clin04010')}</h2>
<p>{lang('clin04020')}</p>

<Example
  code={`
<SvelLink underline={false}>Without Underline</SvelLink>
<SvelLink>With Underline</SvelLink>`}
>
  <SvelLink underline={false}>Without Underline</SvelLink>
  <SvelLink>With Underline</SvelLink>
</Example>

<h2>{lang('clin05010')}</h2>
<p>{lang('clin05020')}</p>

<Example
  code={`
<SvelLink><SvelIcon slot="iconLeft"><Edit/></SvelIcon>Edit</SvelLink>
<SvelLink><SvelIcon slot="icon" class="ml-1"><View/></SvelIcon>Check</SvelLink>`}
>
  <SvelLink><SvelIcon slot="iconLeft"><Edit /></SvelIcon>Edit</SvelLink>
  <SvelLink><SvelIcon slot="icon" class="ml-1"><View /></SvelIcon>Check</SvelLink>
</Example>

<style>
  :global(.svel-link) {
    margin-right: 8px;
  }
</style>
