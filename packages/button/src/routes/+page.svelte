<script lang="ts">
  import { setContext } from 'svelte';

  setContext('svel-size', 'small');
  setContext('svel-dark', true);
  import Button from '$lib/index.ts';

  import { Delete, SvelIcon } from '@svelement-ui/icon';
</script>

<Button>aaa</Button>

<Button loading>aaa</Button>

<Button><SvelIcon slot="icon"><Delete /></SvelIcon></Button>

<Button text>aaa</Button>
