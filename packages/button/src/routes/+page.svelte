<script lang="ts">
  import { setContext } from 'svelte';

  setContext('svel-size', 'small');
  import Button from '$lib/index.ts';

  import { Delete, SvelIcon } from '@svelement-ui/icon';
</script>

<Button color="#626aef" dark>Default</Button>
<Button color="#626aef" dark plain>Default</Button>
<Button color="#626aef" dark disabled>Default</Button>
<Button color="#626aef" dark plain disabled>Default</Button>
