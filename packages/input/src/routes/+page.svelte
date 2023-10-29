<script>
  import SvelInput from '$lib/index.js';

  let input = '1';
</script>

<SvelInput bind:value={input} placeholder="Please input" />
{input}

<SvelInput bind:value={input} placeholder="Please input" disabled />

<SvelInput bind:value={input} placeholder="Please input" clearable />
