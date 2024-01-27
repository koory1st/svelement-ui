<script>
  import { SvelSlider } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';

  let langFn = getContext('langFn');

  let value1 = 0;
  let value2 = 0;
  let value3 = 0;
</script>

<h1>{$langFn('cslider01010')}</h1>
<p>{$langFn('cslider01020')}</p>
<h2>{$langFn('cslider02010')}</h2>
<p>{$langFn('cslider02020')}</p>
<p>{$langFn('cslider02030')}</p>
<Example
  code={`

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
</Example>

<style>
  .slider-demo-block {
    display: flex;
    align-items: center;
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
