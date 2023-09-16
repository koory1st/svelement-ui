<script lang="ts">
  import { setContext } from 'svelte';

  setContext('svel-size', 'small');
  import Button from '$lib/index.ts';
</script>

<Button>aaa</Button>

<Button loading>aaa</Button>
