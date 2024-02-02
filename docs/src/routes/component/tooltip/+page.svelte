<script>
  import { SvelTooltip, SvelButton, SvelScrollbar } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';

  let langFn = getContext('langFn');

  let disabled = false;
  let visible = false;

  let visible2 = false;

  let x = 0;
  let y = 0;
  const mousemove = (ev) => {
    x = ev.clientX;
    y = ev.clientY;
  };
  const windowClick = () => {
    if (visible2) {
      visible2 = false;
    }
  };

  $: getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top: y,
    bottom: y,
    left: x,
    right: x,
  });
</script>

<h1>{$langFn('ctooltip01010')}</h1>
<p>{$langFn('ctooltip01011')}</p>

<h2>{$langFn('ctooltip02010')}</h2>
<p>{$langFn('ctooltip02020')}</p>
<p>{$langFn('ctooltip02030')}</p>
<Example
  code={`
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
    <SvelTooltip
      class="box-item"
      content="Right Top prompts info"
      effect="dark"
      placement="right-start"
    >
      <SvelButton>right-start</SvelButton>
    </SvelTooltip>
  </div>
  <div class="row">
    <SvelTooltip
      class="box-item"
      content="Left Center prompts info"
      effect="dark"
      placement="left"
    >
      <SvelButton>left</SvelButton>
    </SvelTooltip>
    <SvelTooltip
      class="box-item"
      content="Right Center prompts info"
      effect="dark"
      placement="right"
    >
      <SvelButton>right</SvelButton>
    </SvelTooltip>
  </div>
  <div class="row">
    <SvelTooltip
      class="box-item"
      content="Left Bottom prompts info"
      effect="dark"
      placement="left-end"
    >
      <SvelButton>left-end</SvelButton>
    </SvelTooltip>
    <SvelTooltip
      class="box-item"
      content="Right Bottom prompts info"
      effect="dark"
      placement="right-end"
    >
      <SvelButton>right-end</SvelButton>
    </SvelTooltip>
  </div>
  <div class="row center">
    <SvelTooltip
      class="box-item"
      content="Bottom Left prompts info"
      effect="dark"
      placement="bottom-start"
    >
      <SvelButton>bottom-start</SvelButton>
    </SvelTooltip>
    <SvelTooltip
      class="box-item"
      content="Bottom Center prompts info"
      effect="dark"
      placement="bottom"
    >
      <SvelButton>bottom</SvelButton>
    </SvelTooltip>
    <SvelTooltip
      class="box-item"
      content="Bottom Right prompts info"
      effect="dark"
      placement="bottom-end"
    >
      <SvelButton>bottom-end</SvelButton>
    </SvelTooltip>
  </div>
</div>

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
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
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
      <SvelTooltip
        class="box-item"
        content="Right Top prompts info"
        effect="dark"
        placement="right-start"
      >
        <SvelButton>right-start</SvelButton>
      </SvelTooltip>
    </div>
    <div class="row">
      <SvelTooltip
        class="box-item"
        content="Left Center prompts info"
        effect="dark"
        placement="left"
      >
        <SvelButton>left</SvelButton>
      </SvelTooltip>
      <SvelTooltip
        class="box-item"
        content="Right Center prompts info"
        effect="dark"
        placement="right"
      >
        <SvelButton>right</SvelButton>
      </SvelTooltip>
    </div>
    <div class="row">
      <SvelTooltip
        class="box-item"
        content="Left Bottom prompts info"
        effect="dark"
        placement="left-end"
      >
        <SvelButton>left-end</SvelButton>
      </SvelTooltip>
      <SvelTooltip
        class="box-item"
        content="Right Bottom prompts info"
        effect="dark"
        placement="right-end"
      >
        <SvelButton>right-end</SvelButton>
      </SvelTooltip>
    </div>
    <div class="row center">
      <SvelTooltip
        class="box-item"
        content="Bottom Left prompts info"
        effect="dark"
        placement="bottom-start"
      >
        <SvelButton>bottom-start</SvelButton>
      </SvelTooltip>
      <SvelTooltip
        class="box-item"
        content="Bottom Center prompts info"
        effect="dark"
        placement="bottom"
      >
        <SvelButton>bottom</SvelButton>
      </SvelTooltip>
      <SvelTooltip
        class="box-item"
        content="Bottom Right prompts info"
        effect="dark"
        placement="bottom-end"
      >
        <SvelButton>bottom-end</SvelButton>
      </SvelTooltip>
    </div>
  </div>
</Example>

<h2>{$langFn('ctooltip03010')}</h2>
<p>{$langFn('ctooltip03020')}</p>
<p>{$langFn('ctooltip03030')}</p>

<Example
  code={`
<div class="tooltip-base-box">
  <div class="row">
    <SvelTooltip content="Top center" placement="top">
      <SvelButton>Dark</SvelButton>
    </SvelTooltip>
    <SvelTooltip content="Bottom center" effect="light" placement="bottom">
      <SvelButton>Light</SvelButton>
    </SvelTooltip>
    <SvelTooltip content="Bottom center" effect="customized">
      <SvelButton>Customized theme</SvelButton>
    </SvelTooltip>
  </div>
</div>

<style>
  :global(.svel-popper.is-customized) {
    /* Set padding to ensure the height is 32px */
    padding: 6px 12px;
    background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
  }

  :global(.svel-popper.is-customized .svel-popper__arrow::before) {
    background: linear-gradient(45deg, #b2e68d, #bce689);
    right: 0;
  }
</style>
`}
>
  <div class="tooltip-base-box">
    <div class="row">
      <SvelTooltip content="Top center" placement="top">
        <SvelButton>Dark</SvelButton>
      </SvelTooltip>
      <SvelTooltip content="Bottom center" effect="light" placement="bottom">
        <SvelButton>Light</SvelButton>
      </SvelTooltip>
      <SvelTooltip content="Bottom center" effect="customized">
        <SvelButton>Customized theme</SvelButton>
      </SvelTooltip>
    </div>
  </div>
</Example>

<h2>{$langFn('ctooltip04010')}</h2>
<p>{$langFn('ctooltip04020')}</p>
<p>{$langFn('ctooltip04030')}</p>

<Example
  code={`
<SvelTooltip placement="top">
  <svelte:fragment slot="content">
    multiple lines
    <br />
    second line
  </svelte:fragment>
  <SvelButton>Top center</SvelButton>
</SvelTooltip>
`}
>
  <SvelTooltip placement="top">
    <svelte:fragment slot="content">
      multiple lines
      <br />
      second line
    </svelte:fragment>
    <SvelButton>Top center</SvelButton>
  </SvelTooltip>
</Example>

<h2>{$langFn('ctooltip05010')}</h2>
<p>{$langFn('ctooltip05020')}</p>
<Example
  code={`
<script>
  let disabled = false;
@@@/script>
<SvelTooltip
  content="click to close tooltip function"
  {disabled}
  effect="light"
  placement="bottom"
>
  <SvelButton on:click={() => (disabled = !disabled)}>
    click to {disabled ? 'active' : 'close'} tooltip function
  </SvelButton>
</SvelTooltip>
`}
>
  <SvelTooltip
    content="click to close tooltip function"
    {disabled}
    effect="light"
    placement="bottom"
  >
    <SvelButton on:click={() => (disabled = !disabled)}>
      click to {disabled ? 'active' : 'close'} tooltip function
    </SvelButton>
  </SvelTooltip>
</Example>

<h2>{$langFn('ctooltip06010')}</h2>
<p>{$langFn('ctooltip06020')}</p>
<Example
  code={`
<SvelTooltip>
  <SvelButton>hover me</SvelButton>
  <span slot="content">
    The content can be <strong>HTML</strong>
  </span>
</SvelTooltip>
`}
>
  <SvelTooltip>
    <SvelButton>hover me</SvelButton>
    <span slot="content">
      The content can be <strong>HTML</strong>
    </span>
  </SvelTooltip>
</Example>

<h2>{$langFn('ctooltip07010')}</h2>
<p>{$langFn('ctooltip07020')}</p>
<Example
  code={`
<SvelTooltip {visible}>
  <SvelButton on:mouseenter={() => (visible = true)} on:mouseleave={() => (visible = false)}>
    hover me
  </SvelButton>
  <span slot="content">Content</span>
</SvelTooltip>
`}
>
  <SvelTooltip {visible}>
    <SvelButton on:mouseenter={() => (visible = true)} on:mouseleave={() => (visible = false)}>
      hover me
    </SvelButton>
    <span slot="content">Content</span>
  </SvelTooltip>
</Example>

<h2>{$langFn('ctooltip08010')}</h2>
<p>{$langFn('ctooltip08020')}</p>
<svelte:window on:click={windowClick} on:mousemove={mousemove} />
<Example
  code={`
<script>
  let x = 0;
  let y = 0;
  const mousemove = (ev) => {
    x = ev.clientX;
    y = ev.clientY;
  };
  const windowClick = () => {
    if (visible2) {
      visible2 = false;
    }
  };

  $: getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top: y,
    bottom: y,
    left: x,
    right: x,
  });
@@@/script>
<svelte:window on:click={windowClick} on:mousemove={mousemove} />
<SvelTooltip virtualRef={getBoundingClientRect} virtualTriggering visible={visible2}>
  <SvelButton on:click={() => (visible2 = true)}>test</SvelButton>
  <span slot="content">Bottom center</span>
</SvelTooltip>
`}
>
  <SvelTooltip virtualRef={getBoundingClientRect} virtualTriggering visible={visible2}>
    <SvelButton on:click={() => (visible2 = true)}>test</SvelButton>
    <span slot="content">Bottom center</span>
  </SvelTooltip>
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

  :global(.svel-popper.is-customized) {
    /* Set padding to ensure the height is 32px */
    padding: 6px 12px;
    background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
  }

  :global(.svel-popper.is-customized .svel-popper__arrow::before) {
    background: linear-gradient(45deg, #b2e68d, #bce689);
    right: 0;
  }
</style>
