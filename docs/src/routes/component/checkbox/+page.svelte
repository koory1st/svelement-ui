<script>
  import { SvelCheckbox } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';

  let langFn = getContext('langFn');

  let option1 = true;
  let option2;

  let check1 = false;
  let check2 = true;
</script>

<h1>{$langFn('ccheckbox01010')}</h1>
<p>{$langFn('ccheckbox01011')}</p>
<h2>{$langFn('ccheckbox02010')}</h2>
<p>{$langFn('ccheckbox02011')}</p>

<Example
  code={`
<script>
  let option1 = true;
  let option2;
@@@/script>
<div>
  <SvelCheckbox bind:value={option1} label="Option 1" size="large" />
  <SvelCheckbox bind:value={option2} label="Option 2" size="large" />
</div>
<div>
  <SvelCheckbox bind:value={option1} label="Option 1" />
  <SvelCheckbox bind:value={option2} label="Option 2" />
</div>
<div>
  <SvelCheckbox bind:value={option1} label="Option 1" size="small" />
  <SvelCheckbox bind:value={option2} label="Option 2" size="small" />
</div>
<div>
  <SvelCheckbox bind:value={option1} label="Option 1" size="small" disabled />
  <SvelCheckbox bind:value={option2} label="Option 2" size="small" disabled />
</div>`}
>
  <div>
    <SvelCheckbox bind:value={option1} label="Option 1" size="large" />
    <SvelCheckbox bind:value={option2} label="Option 2" size="large" />
  </div>
  <div>
    <SvelCheckbox bind:value={option1} label="Option 1" />
    <SvelCheckbox bind:value={option2} label="Option 2" />
  </div>
  <div>
    <SvelCheckbox bind:value={option1} label="Option 1" size="small" />
    <SvelCheckbox bind:value={option2} label="Option 2" size="small" />
  </div>
  <div>
    <SvelCheckbox bind:value={option1} label="Option 1" size="small" disabled />
    <SvelCheckbox bind:value={option2} label="Option 2" size="small" disabled />
  </div>
</Example>

<h2>{$langFn('ccheckbox03010')}</h2>
<p>{$langFn('ccheckbox03020')}</p>
<p>{$langFn('ccheckbox03030')}</p>
<Example
  code={`
<script>
  let check1 = false;
  let check2 = true;
@@@/script>
<SvelCheckbox bind:value={check1} disabled>Disabled</SvelCheckbox>
<SvelCheckbox bind:value={check2}>Not disabled</SvelCheckbox>
`}
>
  <SvelCheckbox bind:value={check1} disabled>Disabled</SvelCheckbox>
  <SvelCheckbox bind:value={check2}>Not disabled</SvelCheckbox>
</Example>
