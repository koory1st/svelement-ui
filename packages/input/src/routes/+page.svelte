<script>
  import SvelInput from '$lib/index.js';
  import { SvelIcon, Calendar, Search } from '@svelement-ui/icon';

  let input = '1';
</script>

<SvelInput bind:value={input} placeholder="Please input" />

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
{input}
