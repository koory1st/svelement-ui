<script>
  import { SvelRadio } from '$lib/index.js';
  let radio = '1';
</script>

<SvelRadio bind:value={radio} label="1">label1</SvelRadio>
<SvelRadio bind:value={radio} label="2">label2</SvelRadio>
