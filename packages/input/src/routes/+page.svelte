<script>
  import SvelInput from '$lib/index.js';

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

{input}
