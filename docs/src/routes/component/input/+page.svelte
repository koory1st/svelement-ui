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
<Example
  code={`
<script>
  let input1 = '';
@@@/script>
<SvelInput bind:value={input1} placeholder="Please input" />
`}
>
  <SvelInput bind:value={input1} placeholder="Please input" />
</Example>

<h2>{$langFn('cinput03010')}</h2>
<p>{$langFn('cinput03020')}</p>

<Example
  code={`
<script>
  let input1 = '';
@@@/script>
<SvelInput bind:value={input1} placeholder="Please input" disabled />
`}
>
  <SvelInput bind:value={input1} placeholder="Please input" disabled />
</Example>
