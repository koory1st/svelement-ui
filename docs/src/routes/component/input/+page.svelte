<script>
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';
  let langFn = getContext('langFn');

  import { SvelInput } from '@svelement-ui/all';

  let input1 = '';
</script>

<h1>{$langFn('cinput01010')}</h1>
<p>{$langFn('cinput01020')}</p>

<h2>{$langFn('cinput02010')}</h2>
<Example>
  <SvelInput bind:value={input1} />
</Example>
