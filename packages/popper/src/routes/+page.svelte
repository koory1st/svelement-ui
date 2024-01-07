<script>
  import { onMount } from 'svelte';
  import { SvelPopper } from '$lib/index.js';

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
    console.log('page', popperRef);
    popperRef(button);
  });

  function handleClick() {
    console.log(popperRef);
    content += 1;
  }
</script>

<!--<button-->
<!--  class="button"-->
<!--  use:popover1={{ showEvent: 'mouseover', hideEvent: 'mouseleave', content: content, props: {} }}-->
<!--&gt;-->
<!--  Pop it-->
<!--</button>-->

<button bind:this={button} on:click={handleClick}>aaa</button>
<SvelPopper bind:popperRef {content} />

<style>
  .button {
    position: absolute;
    left: 100px;
    top: 100px;
  }
</style>
