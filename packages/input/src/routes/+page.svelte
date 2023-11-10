<script>
  import SvelInput from '$lib/index.js';
  import { SvelIcon, Calendar, Search } from '@svelement-ui/icon';

  let input = '1';
  function test(e) {
    console.log('🚀 ~ file: +page.svelte:7 ~ test ~ e:', e);
  }
</script>
{input}
<SvelInput bind:value={input} placeholder="Please input" on:input={test} clearable />
<SvelInput
  bind:value={input}
  placeholder="Please input"
  on:input={test}
  type="password"
  clearable
/>
<SvelInput
  bind:value={input}
  placeholder="Please input"
  type="textarea"
  autosize
  on:input={test}
  clearable
/>
<!--
<SvelInput bind:value={input} placeholder="Please input" disabled />

<SvelInput bind:value={input} placeholder="Please input" clearable />

<SvelInput
  bind:value={input}
  placeholder="Please input"
  formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
  parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
/>

<SvelInput bind:value={input} placeholder="Please input" type="password" showPassword />

<SvelInput bind:value={input} placeholder="Please input">
  <SvelIcon slot="prefix">
    <Search />
  </SvelIcon>
</SvelInput>

<SvelInput bind:value={input} placeholder="Please input">
  <SvelIcon slot="suffix">
    <Calendar />
  </SvelIcon>
</SvelInput>

<SvelInput bind:value={input} placeholder="Please input" type="textarea" autosize />
{input}

<SvelInput bind:value={input} placeholder="Please input">
  <svelte:fragment slot="prepend">Http://</svelte:fragment>
</SvelInput>

<SvelInput bind:value={input} placeholder="Please input">
  <svelte:fragment slot="append">.com</svelte:fragment>
</SvelInput>

<SvelInput bind:value={input} placeholder="Please input">
  <SvelIcon slot="prepend">
    <Search />
  </SvelIcon>
  <SvelIcon slot="append">
    <Search />
  </SvelIcon>
</SvelInput>

<SvelInput bind:value={input} placeholder="Please input" size="large" />
<SvelInput
  bind:value={input}
  placeholder="Please input"
  size="small"
  showWordLimit
  maxlength={10}
/>

<SvelInput
  type="textarea"
  bind:value={input}
  placeholder="Please input"
  size="small"
  showWordLimit
  resize="vertical"
  autosize
/> -->
