<script>
  import { onMount } from 'svelte';
  import SvelPopper from '$lib/index.js';

  let popperRef;
  let popperRef2;
  let button;
  let button2;

  $: content = 1;
  // popover(button, {});
  // let popover1 = createPopper({
  //   showEvent: 'mouseover',
  //   hideEvent: 'mouseleave',
  //   content: content,
  // });
  onMount(() => {
    // popperRef(button);
    // popperRef2(button2);
  });

  function handleClick() {
    content += 1;
  }

  let hideTooltip;
  let showTooltip = false;
  let visible;
</script>

<!--<button-->
<!--  class="button"-->
<!--  use:popover1={{ showEvent: 'mouseover', hideEvent: 'mouseleave', content: content, props: {} }}-->
<!--&gt;-->
<!--  Pop it-->
<!--</button>-->

<SvelPopper
  appendTo=".test"
  bind:showTooltip
  content="Right Top prompts info"
  effect="light"
  placement="right-start"
  teleported
>
  <button class="button" on:click={handleClick}>aaa</button>
</SvelPopper>

<div class="test" />

<SvelPopper {visible}>
  <button on:mouseenter={() => (visible = true)}>Hover me</button>
  <span slot="content">Content</span>
</SvelPopper>

<!--<button bind:this={button2} on:click={handleClick} on:mouseenter={() => (showTooltip2 = true)}>-->
<!--  bbb-->
<!--</button>-->
<!--<SvelPopper-->
<!--  bind:popperRef={popperRef2}-->
<!--  bind:showTooltip={showTooltip2}-->
<!--  content="123"-->
<!--  placement="right"-->
<!--/>-->
<style>
  .button {
    margin: 100px;
  }
</style>
