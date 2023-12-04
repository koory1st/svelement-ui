<script>
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';
  import { SvelButton, SvelCol, SvelInputNumber, SvelRow } from '@svelement-ui/all';
  import { Calendar, Search, SvelIcon } from '@svelement-ui/icon';

  let langFn = getContext('langFn');

  let num = 1;
  let num2 = 1;
  let num3 = 5;
  let num4 = 1;

  function handleChange(e) {
    console.log('%c ---> e: ', 'color:#F0F;', e);
  }
</script>

<h1>{$langFn('cinputNum01010')}</h1>
<p>{$langFn('cinputNum01020')}</p>

<h2>{$langFn('cinputNum02010')}</h2>
<p>{$langFn('cinputNum02020')}</p>
<Example
  code={`
<script>
let num = 1;
@@@/script>
<SvelInputNumber bind:value={num} max="10" min="1" on:change={handleChange} />
`}
>
  <SvelInputNumber bind:value={num} max="10" min="1" on:change={handleChange} />
</Example>

<h2>{$langFn('cinputNum03010')}</h2>
<p>{$langFn('cinputNum03020')}</p>
<Example
  code={`
<SvelInputNumber bind:value={num} disabled />
<SvelInputNumber bind:value={num} max="5" min="2" />
`}
>
  <SvelInputNumber bind:value={num2} disabled />
  <SvelInputNumber bind:value={num2} max="5" min="2" />
</Example>

<h2>{$langFn('cinputNum04010')}</h2>
<p>{$langFn('cinputNum04020')}</p>
<Example
  code={`
<SvelInputNumber bind:value={num3} step={2} />
`}
>
  <SvelInputNumber bind:value={num3} step={2} />
</Example>

<h2>{$langFn('cinputNum05010')}</h2>
<p>{$langFn('cinputNum05020')}</p>
<Example
  code={`
<SvelInputNumber bind:value={num3} step={2} stepStrictly />
`}
>
  <SvelInputNumber bind:value={num3} step={2} stepStrictly />
</Example>

<h2>{$langFn('cinputNum06010')}</h2>
<p>{$langFn('cinputNum06020')}</p>
<Example
  code={`
<SvelInputNumber bind:value={num4} precision={2} step={0.1} />
`}
>
  <SvelInputNumber bind:value={num4} precision={2} step={0.1} />
</Example>
