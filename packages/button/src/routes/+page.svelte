<script lang="ts">
  import { setContext } from 'svelte';

  setContext('svel-size', 'small');
  import { SvelButton } from '$lib/index.ts';
</script>

<SvelButton color="#626aef" dark>Default</SvelButton>
<SvelButton color="#626aef" dark plain>Default</SvelButton>
<SvelButton color="#626aef" dark disabled>Default</SvelButton>
<SvelButton color="#626aef" dark plain disabled>Default</SvelButton>
