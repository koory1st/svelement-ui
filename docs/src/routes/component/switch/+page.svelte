<script>
  import { SvelSwitch } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';

  let langFn = getContext('langFn');

  let value1 = true;
  let value2 = true;
</script>

<h1>{$langFn('cswitch01010')}</h1>
<p>{$langFn('cswitch01011')}</p>

<h2>{$langFn('cswitch02010')}</h2>
<p>{$langFn('cswitch02020')}</p>
<p>{$langFn('cswitch02030')}</p>
<Example
  code={`
`}
>
  <SvelSwitch bind:value={value1} />
  <SvelSwitch
    bind:value={value2}
    class="ml-2"
    style="--svel-switch-on-color: #13ce66; --svel-switch-off-color: #ff4949"
  />
</Example>

<style>
</style>
