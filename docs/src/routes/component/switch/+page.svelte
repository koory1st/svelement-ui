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
<Example
  code={`
<script>
  import { SvelSwitch } from '@svelement-ui/all';
  let value1 = true;
  let value2 = true;
@@@/>
<SvelSwitch bind:value={value1} />
<SvelSwitch
  bind:value={value2}
  class="ml-2"
  style="--svel-switch-on-color: #13ce66; --svel-switch-off-color: #ff4949"
/>
`}
>
  <SvelSwitch bind:value={value1} />
  <SvelSwitch
    bind:value={value2}
    class="ml-2"
    style="--svel-switch-on-color: #13ce66; --svel-switch-off-color: #ff4949"
  />
</Example>

<h2>{$langFn('cswitch03010')}</h2>

<Example
  code={`
<script>
  import { SvelSwitch } from '@svelement-ui/all';
  let value1 = true;
  let value2 = true;
@@@/>
<SvelSwitch bind:value={value1} />
<SvelSwitch
  bind:value={value2}
  class="ml-2"
  style="--svel-switch-on-color: #13ce66; --svel-switch-off-color: #ff4949"
/>
`}
>
  <SvelSwitch activeText="Open" inactiveText="Close" size="large" />
  <br />
  <SvelSwitch activeText="Open" inactiveText="Close" />
  <br />
  <SvelSwitch activeText="Open" inactiveText="Close" size="small" />
</Example>

<style>
</style>
