<script>
  import { createPopper } from '$lib/index.js';
  import { onMount } from 'svelte';
  import SvelPopper from '$lib/popper.svelte';

  let popperThing;
  let button;
  console.log('page22', popperThing);

  $: content = 1;
  let popover = createPopper(popperThing);
  // popover(button, {});
  // let popover1 = createPopper({
  //   showEvent: 'mouseover',
  //   hideEvent: 'mouseleave',
  //   content: content,
  // });
  onMount(() => {
    console.log('page', popperThing);
  });

  function handleClick() {
    console.log(popperThing);
    content += 1;
  }
</script>

<!--<button-->
<!--  class="button"-->
<!--  use:popover1={{ showEvent: 'mouseover', hideEvent: 'mouseleave', content: content, props: {} }}-->
<!--&gt;-->
<!--  Pop it-->
<!--</button>-->

<button bind:this={button} on:click={handleClick} use:popover={{}}>aaa</button>
<SvelPopper bind:popperThing {content} />

<style>
  .button {
    position: absolute;
    left: 100px;
    top: 100px;
  }
</style>
