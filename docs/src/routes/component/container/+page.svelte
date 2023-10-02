<script lang="ts">
  import { SvelContainer, SvelHeader, SvelMain } from '@svelement-ui/all';
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
<script lang="ts">
  import SvelButton from '@svelement-ui/button';
  import { SvelIcon, Search, Edit, Delete, Share } from '@svelement-ui/icon';
@@@/>
<div class="flex">
  <SvelButton type="primary"><SvelIcon><Edit /></SvelIcon></SvelButton>
  <SvelButton type="primary"><SvelIcon><Share /></SvelIcon></SvelButton>
  <SvelButton type="primary"><SvelIcon><Delete /></SvelIcon></SvelButton>
  <SvelButton type="primary"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
  <SvelButton type="primary">
    Upload<SvelIcon class="svel-icon--right"><Search /></SvelIcon>
  </SvelButton>
</div>`}
>
  <div class="common-layout">
    <SvelContainer class="aaa">
      <SvelHeader>Header</SvelHeader>
      <SvelMain>Main</SvelMain>
    </SvelContainer>
  </div>
</Example>
