<script>
  import { SvelTooltip, SvelButton, SvelScrollbar } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';

  let langFn = getContext('langFn');
</script>

<h1>{$langFn('ctooltip01010')}</h1>
<p>{$langFn('ctooltip01011')}</p>

<h2>{$langFn('ctooltip02010')}</h2>
<p>{$langFn('ctooltip02020')}</p>
<p>{$langFn('ctooltip02030')}</p>
<Example
  code={`

`}
>
  <div class="tooltip-base-box">
    <div class="row center">
      <SvelTooltip
        class="box-item"
        content="Top Left prompts info"
        effect="dark"
        placement="top-start"
      >
        <SvelButton>top-start</SvelButton>
      </SvelTooltip>
      <SvelTooltip class="box-item" content="Top Center prompts info" effect="dark" placement="top">
        <SvelButton>top</SvelButton>
      </SvelTooltip>
      <SvelTooltip
        class="box-item"
        content="Top Right prompts info"
        effect="dark"
        placement="top-end"
      >
        <SvelButton>top-end</SvelButton>
      </SvelTooltip>
    </div>
    <div class="row">
      <SvelTooltip
        class="box-item"
        content="Left Top prompts info"
        effect="dark"
        placement="left-start"
      >
        <SvelButton>left-start</SvelButton>
      </SvelTooltip>
    </div>
  </div>
</Example>

<style>
  .tooltip-base-box {
    width: 600px;
  }

  .tooltip-base-box .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tooltip-base-box .center {
    justify-content: center;
  }

  :global(.tooltip-base-box .box-item) {
    width: 110px;
    margin-top: 10px;
  }
</style>
