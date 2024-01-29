<script>
  import { SvelSlider } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';

  let langFn = getContext('langFn');

  let value1 = 0;
  let value2 = 0;
  let value3 = 0;
  let value4 = 0;
  let value5 = 0;
  const formatTooltip = (val) => {
    return val / 100;
  };
  let value2_1 = 0;
  let value2_2 = 0;
  let value3_1 = 0;
  let value4_1 = 0;
  let value4_2 = 0;
  let value4_3 = 0;
  let value5_1 = 0;
  let value5_2 = 0;
  let value5_3 = 0;
  let value5_4 = 0;
  let value6_1 = [4, 8];
</script>

<h1>{$langFn('cslider01010')}</h1>
<p>{$langFn('cslider01020')}</p>

<h2>{$langFn('cslider02010')}</h2>
<p>{$langFn('cslider02020')}</p>
<p>{$langFn('cslider02030')}</p>
<Example
  code={`
<script>
  let value1 = 0;
  let value2 = 0;
  let value3 = 0;
  let value4 = 0;
  let value5 = 0;
  const formatTooltip = (val) => {
    return val / 100;
  };
@@@/script>
<div class="slider-demo-block">
  <span class="demonstration">Default value</span>
  <SvelSlider bind:value={value1} />
</div>
<div class="slider-demo-block">
  <span class="demonstration">Customized initial value</span>
  <SvelSlider bind:value={value2} />
</div>
<div class="slider-demo-block">
  <span class="demonstration">Hide Tooltip</span>
  <SvelSlider bind:value={value3} showTooltip={false} />
</div>
<div class="slider-demo-block">
  <span class="demonstration">Format Tooltip</span>
  <SvelSlider bind:value={value4} {formatTooltip} />
</div>
<div class="slider-demo-block">
  <span class="demonstration">Disabled</span>
  <SvelSlider bind:value={value5} disabled />
</div>
`}
>
  <div class="slider-demo-block">
    <span class="demonstration">Default value</span>
    <SvelSlider bind:value={value1} />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Customized initial value</span>
    <SvelSlider bind:value={value2} />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Hide Tooltip</span>
    <SvelSlider bind:value={value3} showTooltip={false} />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Format Tooltip</span>
    <SvelSlider bind:value={value4} {formatTooltip} />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Disabled</span>
    <SvelSlider bind:value={value5} disabled />
  </div>
</Example>

<h2>{$langFn('cslider03010')}</h2>
<p>{$langFn('cslider03020')}</p>
<p>{$langFn('cslider03030')}</p>
<Example
  code={`
<div class="slider-demo-block">
  <span class="demonstration">Breakpoints not displayed</span>
  <SvelSlider step="10" bind:value={value2_1} />
</div>
<div class="slider-demo-block">
  <span class="demonstration">Breakpoints displayed</span>
  <SvelSlider showStops step="10" bind:value={value2_2} />
</div>
`}
>
  <div class="slider-demo-block">
    <span class="demonstration">Breakpoints not displayed</span>
    <SvelSlider bind:value={value2_1} step="10" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Breakpoints displayed</span>
    <SvelSlider bind:value={value2_2} showStops step="10" />
  </div>
</Example>

<h2>{$langFn('cslider04010')}</h2>
<p>{$langFn('cslider04020')}</p>
<p>{$langFn('cslider04030')}</p>
<Example
  code={`
<SvelSlider bind:value={value3_1} showInput />
`}
>
  <SvelSlider bind:value={value3_1} showInput />
</Example>

<h2>{$langFn('cslider05010')}</h2>
<Example
  code={`
<SvelSlider bind:value={value4_1} showInput size="large" />
<SvelSlider bind:value={value4_2} showInput />
<SvelSlider bind:value={value4_3} showInput size="small" />
`}
>
  <SvelSlider bind:value={value4_1} showInput size="large" />
  <SvelSlider bind:value={value4_2} showInput />
  <SvelSlider bind:value={value4_3} showInput size="small" />
</Example>

<h2>{$langFn('cslider06010')}</h2>
<p>{$langFn('cslider06020')}</p>
<Example
  code={`
<SvelSlider bind:value={value5_1} />
<SvelSlider bind:value={value5_2} placement="bottom" />
<SvelSlider bind:value={value5_3} placement="right" />
<SvelSlider bind:value={value5_4} placement="left" />
`}
>
  <SvelSlider bind:value={value5_1} />
  <SvelSlider bind:value={value5_2} placement="bottom" />
  <SvelSlider bind:value={value5_3} placement="right" />
  <SvelSlider bind:value={value5_4} placement="left" />
</Example>

<h2>{$langFn('cslider07010')}</h2>
<p>{$langFn('cslider07020')}</p>
<p>{$langFn('cslider07030')}</p>
<Example
  code={`
<SvelSlider bind:value={value5_1} />
<SvelSlider bind:value={value5_2} placement="bottom" />
<SvelSlider bind:value={value5_3} placement="right" />
<SvelSlider bind:value={value5_4} placement="left" />
`}
>
  {value6_1}
  <SvelSlider bind:value={value6_1} max="10" range showStops />
</Example>

<style>
  .slider-demo-block {
    display: flex;
    align-items: center;
    min-width: 600px;
  }

  :global(.slider-demo-block .svel-slider) {
    margin-top: 0;
    margin-left: 12px;
  }

  .slider-demo-block .demonstration {
    font-size: 14px;
    color: var(--svel-text-color-secondary);
    line-height: 44px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0;
  }

  :global(.slider-demo-block .demonstration + .svel-slider) {
    flex: 0 0 70%;
  }
</style>
