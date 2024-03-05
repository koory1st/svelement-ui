<script>
  import { SvelSwitch, SvelTooltip } from '@svelement-ui/all';
  import { Check, Close } from '@svelement-ui/icon';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';

  let langFn = getContext('langFn');

  let value1 = true;
  let value2 = true;

  let value3 = '100';
  let value4 = true;
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
<SvelSwitch activeText="Open" inactiveText="Close" size="large" />
<br />
<SvelSwitch activeText="Open" inactiveText="Close" />
<br />
<SvelSwitch activeText="Open" inactiveText="Close" size="small" />
`}
>
  <SvelSwitch activeText="Open" inactiveText="Close" size="large" />
  <br />
  <SvelSwitch activeText="Open" inactiveText="Close" />
  <br />
  <SvelSwitch activeText="Open" inactiveText="Close" size="small" />
</Example>

<h2>{$langFn('cswitch04010')}</h2>
<p>{$langFn('cswitch04020')}</p>
<p>{$langFn('cswitch04030')}</p>

<Example
  code={`
<SvelSwitch activeText="Open" inactiveText="Close" size="large" />
<br />
<SvelSwitch activeText="Open" inactiveText="Close" />
<br />
<SvelSwitch activeText="Open" inactiveText="Close" size="small" />
`}
>
  <SvelSwitch activeText="Pay by month" class="mb-2" inactiveText="Pay by year" />
  <br />
  <SvelSwitch
    activeText="Pay by month"
    class="mb-2"
    inactiveText="Pay by year"
    style="--svel-switch-on-color: #13ce66; --svel-switch-off-color: #ff4949"
  />
  <br />
  <SvelSwitch activeText="是" inactiveText="否" inlinePrompt />
  <SvelSwitch
    activeText="Y"
    class="ml-2"
    inactiveText="N"
    inlinePrompt
    style="--svel-switch-on-color: #13ce66; --svel-switch-off-color: #ff4949"
  />
  <SvelSwitch activeText="超出省略" class="ml-2" inactiveText="超出省略" inlinePrompt width="60" />
  <SvelSwitch
    activeText="完整展示多个内容"
    class="ml-2"
    inactiveText="多个内容"
    inlinePrompt
    style="--svel-switch-on-color: #13ce66; --svel-switch-off-color: #ff4949"
  />
</Example>

<h2>{$langFn('cswitch05010')}</h2>
<p>{$langFn('cswitch05020')}</p>
<Example
  code={`
<script>
  import { Check, Close } from '@svelement-ui/icon';
@@@/>
<SvelSwitch>
  <Check slot="activeIcon" />
  <Close slot="inactiveIcon" />
</SvelSwitch>

<br />
<SvelSwitch inlinePrompt>
  <Check slot="activeIcon" />
  <Close slot="inactiveIcon" />
</SvelSwitch>
`}
>
  <SvelSwitch>
    <Check slot="activeIcon" />
    <Close slot="inactiveIcon" />
  </SvelSwitch>

  <br />
  <SvelSwitch inlinePrompt>
    <Check slot="activeIcon" />
    <Close slot="inactiveIcon" />
  </SvelSwitch>
</Example>

<h2>{$langFn('cswitch06010')}</h2>
<p>{$langFn('cswitch06020')}</p>

<Example
  code={`
<SvelTooltip content={value3}>
  <SvelSwitch activeValue="100" bind:value={value3} inactiveValue="0" />
</SvelTooltip>
`}
>
  <SvelTooltip content={value3}>
    <SvelSwitch activeValue="100" bind:value={value3} inactiveValue="0" />
  </SvelTooltip>
</Example>

<h2>{$langFn('cswitch07010')}</h2>
<p>{$langFn('cswitch07020')}</p>

<Example
  code={`
<SvelSwitch bind:value={value4} disabled />
<SvelSwitch class="ml-2" />
`}
>
  <SvelSwitch bind:value={value4} disabled />
  <SvelSwitch class="ml-2" />
</Example>

<style>
</style>
