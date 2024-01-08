<script>
  import { onMount } from 'svelte';
  import SvelPopper from '$lib/index.js';

  let popperRef;
  let button;

  $: content = 1;
  // popover(button, {});
  // let popover1 = createPopper({
  //   showEvent: 'mouseover',
  //   hideEvent: 'mouseleave',
  //   content: content,
  // });
  onMount(() => {
    popperRef(button);
  });

  function handleClick() {
    content += 1;
  }

  let hideTooltip;
  let showTooltip;
</script>

<!--<button-->
<!--  class="button"-->
<!--  use:popover1={{ showEvent: 'mouseover', hideEvent: 'mouseleave', content: content, props: {} }}-->
<!--&gt;-->
<!--  Pop it-->
<!--</button>-->

<button
  bind:this={button}
  on:click={handleClick}
  on:mouseenter={() => (showTooltip = true)}
  on:mouseleave={() => (showTooltip = false)}
>
  aaa
</button>
<SvelPopper bind:popperRef bind:showTooltip {content} />

<style>
  .button {
    position: absolute;
    left: 100px;
    top: 100px;
  }
</style>
