<script lang="ts">
  import { setContext } from 'svelte';

  setContext('svel-size', 'small');
  import Button from '$lib/index.ts';
</script>

<Button color="#626aef" dark>Default</Button>
<Button color="#626aef" dark plain>Default</Button>
<Button color="#626aef" dark disabled>Default</Button>
<Button color="#626aef" dark plain disabled>Default</Button>
