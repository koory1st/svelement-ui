<script>
  import { createPopper } from '$lib/index.js';

  let popover1 = createPopper({ showEvent: 'mouseover', hideEvent: 'mouseleave', content: '123' });
</script>

<button
  class="button"
  use:popover1={{ showEvent: 'mouseover', hideEvent: 'mouseleave', content: '123', props: {} }}
>
  Pop it
</button>

<style>
  .button {
    position: absolute;
    left: 100px;
    top: 100px;
  }
</style>
