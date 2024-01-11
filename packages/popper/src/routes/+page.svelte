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
    popperRef(button);
    popperRef2(button2);
  });

  function handleClick() {
    content += 1;
  }

  let hideTooltip;
  let showTooltip;
  let showTooltip2;
</script>

<!--<button-->
<!--  class="button"-->
<!--  use:popover1={{ showEvent: 'mouseover', hideEvent: 'mouseleave', content: content, props: {} }}-->
<!--&gt;-->
<!--  Pop it-->
<!--</button>-->

<button bind:this={button} on:click={handleClick} on:mouseenter={() => (showTooltip = true)}>
  aaa
</button>
<SvelPopper bind:popperRef bind:showTooltip effect="light"><span>{content}</span></SvelPopper>

<button bind:this={button2} on:click={handleClick} on:mouseenter={() => (showTooltip2 = true)}>
  bbb
</button>
<SvelPopper
  bind:popperRef={popperRef2}
  bind:showTooltip={showTooltip2}
  content="123"
  placement="right"
/>
