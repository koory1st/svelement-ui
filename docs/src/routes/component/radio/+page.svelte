<script>
  import { SvelRadio, SvelRadioGroup, SvelRadioButton } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';

  let langFn = getContext('langFn');

  let radio1 = '1';
  let radio2 = '1';
  let radio3 = '1';
  let radio4 = '1';

  let radio5 = '1';

  let group1 = '3';

  let button1 = 'New York';
  let button2 = 'New York';
  let button3 = 'New York';

  let border1 = '1';
  let border2 = '1';
  let border3 = '1';
  let border4 = '1';
</script>

<h1>{$langFn('cradio01010')}</h1>
<p>{$langFn('cradio01020')}</p>

<h2>{$langFn('cradio02010')}</h2>
<p>{$langFn('cradio02020')}</p>
<p>{$langFn('cradio02030')}</p>

<Example
  code={`
<script>
  let radio1 = '1';
  let radio2 = '1';
  let radio3 = '1';
  let radio4 = '1';
@@@/script>

<div class="mb-2 flex items-center text-sm">
  <SvelRadio bind:value={radio1} label="1" size="larger">Option 1</SvelRadio>
  <SvelRadio bind:value={radio1} label="2" size="larger">Option 2</SvelRadio>
</div>
<div class="my-2 flex items-center text-sm">
  <SvelRadio bind:value={radio2} label="1">Option 1</SvelRadio>
  <SvelRadio bind:value={radio2} label="2">Option 2</SvelRadio>
</div>
<div class="my-4 flex items-center text-sm">
  <SvelRadio bind:value={radio3} label="1" size="small">Option 1</SvelRadio>
  <SvelRadio bind:value={radio3} label="2" size="small">Option 2</SvelRadio>
</div>
<div class="mb-2 flex items-center text-sm">
  <SvelRadio bind:value={radio4} label="1" size="small" disabled>Option 1</SvelRadio>
  <SvelRadio bind:value={radio4} label="2" size="small" disabled>Option 2</SvelRadio>
</div>`}
>
  <div class="mb-2 flex items-center text-sm">
    <SvelRadio bind:value={radio1} label="1" size="larger">Option 1</SvelRadio>
    <SvelRadio bind:value={radio1} label="2" size="larger">Option 2</SvelRadio>
  </div>
  <div class="my-2 flex items-center text-sm">
    <SvelRadio bind:value={radio2} label="1">Option 1</SvelRadio>
    <SvelRadio bind:value={radio2} label="2">Option 2</SvelRadio>
  </div>
  <div class="my-4 flex items-center text-sm">
    <SvelRadio bind:value={radio3} label="1" size="small">Option 1</SvelRadio>
    <SvelRadio bind:value={radio3} label="2" size="small">Option 2</SvelRadio>
  </div>
  <div class="mb-2 flex items-center text-sm">
    <SvelRadio bind:value={radio4} label="1" size="small" disabled>Option 1</SvelRadio>
    <SvelRadio bind:value={radio4} label="2" size="small" disabled>Option 2</SvelRadio>
  </div>
</Example>

<h2>{$langFn('cradio03010')}</h2>
<p>{$langFn('cradio03020')}</p>
<p>{$langFn('cradio03030')}</p>
<Example
  code={`
<SvelRadio bind:value={radio5} label="1" disabled>Option A</SvelRadio>
<SvelRadio bind:value={radio5} label="2" disabled>Option B</SvelRadio>`}
>
  <SvelRadio bind:value={radio5} label="1" disabled>Option A</SvelRadio>
  <SvelRadio bind:value={radio5} label="2" disabled>Option B</SvelRadio>
</Example>

<h2>{$langFn('cradio04010')}</h2>
<p>{$langFn('cradio04020')}</p>
<p>{$langFn('cradio04030')}</p>
<Example
  code={`
<script>
  let group1 = '3';
@@@/script>

<SvelRadioGroup
  bind:value={group1}
  options={[
    { value: '3', label: 'Option A' },
    { value: '6', label: 'Option B' },
    { value: '9', label: 'Option C' },
  ]}
/>`}
>
  <SvelRadioGroup
    bind:value={group1}
    options={[
      { value: '3', label: 'Option A' },
      { value: '6', label: 'Option B' },
      { value: '9', label: 'Option C' },
    ]}
  />
</Example>

<h2>{$langFn('cradio05010')}</h2>
<p>{$langFn('cradio05020')}</p>
<p>{$langFn('cradio05030')}</p>
<Example
  code={`
<script>
  let button1 = 'New York';
  let button2 = 'New York';
  let button3 = 'New York';
@@@/script>
<SvelRadioGroup
  type="button"
  bind:value={button1}
  size="large"
  options={[
    { value: 'New York' },
    { value: 'Washington' },
    { value: 'Los Angeles' },
    { value: 'Chicago' },
  ]}
/>
<SvelRadioGroup
  class="mt-4"
  type="button"
  bind:value={button2}
  options={[
    { value: 'New York' },
    { value: 'Washington' },
    { value: 'Los Angeles' },
    { value: 'Chicago' },
  ]}
/>
<SvelRadioGroup
  class="mt-4"
  type="button"
  bind:value={button3}
  size="small"
  options={[
    { value: 'New York' },
    { value: 'Washington' },
    { value: 'Los Angeles', disabled: true},
    { value: 'Chicago' },
  ]}
/>`}
>
  <SvelRadioGroup
    type="button"
    bind:value={button1}
    size="large"
    options={[
      { value: 'New York' },
      { value: 'Washington' },
      { value: 'Los Angeles' },
      { value: 'Chicago' },
    ]}
  />
  <SvelRadioGroup
    class="mt-4"
    type="button"
    bind:value={button2}
    options={[
      { value: 'New York' },
      { value: 'Washington' },
      { value: 'Los Angeles' },
      { value: 'Chicago' },
    ]}
  />
  <SvelRadioGroup
    class="mt-4"
    type="button"
    bind:value={button3}
    size="small"
    options={[
      { value: 'New York' },
      { value: 'Washington' },
      { value: 'Los Angeles', disabled: true },
      { value: 'Chicago' },
    ]}
  />
</Example>

<h2>{$langFn('cradio06010')}</h2>
<p>{$langFn('cradio06020')}</p>

<Example
  code={`
<script>
  let border1 = '1';
  let border2 = '1';
  let border3 = '1';
  let border4 = '1';
@@@/script>

<div class="mb-2 flex items-center text-sm">
  <SvelRadio bind:value={border1} label="1" size="larger" border>Option 1</SvelRadio>
  <SvelRadio bind:value={border1} label="2" size="larger" border>Option 2</SvelRadio>
</div>
<div class="my-2 flex items-center text-sm">
  <SvelRadio bind:value={border2} label="1" border>Option 1</SvelRadio>
  <SvelRadio bind:value={border2} label="2" border>Option 2</SvelRadio>
</div>
<div class="my-4 flex items-center text-sm">
  <SvelRadio bind:value={border3} label="1" size="small" border>Option 1</SvelRadio>
  <SvelRadio bind:value={border3} label="2" size="small" border>Option 2</SvelRadio>
</div>
<div class="mb-2 flex items-center text-sm">
  <SvelRadio bind:value={border4} label="1" size="small" disabled border>Option 1</SvelRadio>
  <SvelRadio bind:value={border4} label="2" size="small" disabled border>Option 2</SvelRadio>
</div>`}
>
  <div class="mb-2 flex items-center text-sm">
    <SvelRadio bind:value={border1} label="1" size="larger" border>Option 1</SvelRadio>
    <SvelRadio bind:value={border1} label="2" size="larger" border>Option 2</SvelRadio>
  </div>
  <div class="my-2 flex items-center text-sm">
    <SvelRadio bind:value={border2} label="1" border>Option 1</SvelRadio>
    <SvelRadio bind:value={border2} label="2" border>Option 2</SvelRadio>
  </div>
  <div class="my-4 flex items-center text-sm">
    <SvelRadio bind:value={border3} label="1" size="small" border>Option 1</SvelRadio>
    <SvelRadio bind:value={border3} label="2" size="small" border>Option 2</SvelRadio>
  </div>
  <div class="mb-2 flex items-center text-sm">
    <SvelRadio bind:value={border4} label="1" size="small" disabled border>Option 1</SvelRadio>
    <SvelRadio bind:value={border4} label="2" size="small" disabled border>Option 2</SvelRadio>
  </div>
</Example>
