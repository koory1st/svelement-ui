<script>
  import { createPopper } from '$lib/index.js';

  $: content = 1;
  let popover1 = createPopper({
    showEvent: 'mouseover',
    hideEvent: 'mouseleave',
    content: content,
  });

  function handleClick() {
    content += 1;
  }
</script>

<button
  class="button"
  use:popover1={{ showEvent: 'mouseover', hideEvent: 'mouseleave', content: content, props: {} }}
>
  Pop it
</button>

<button on:click={handleClick}>aaa</button>

<style>
  .button {
    position: absolute;
    left: 100px;
    top: 100px;
  }
</style>
