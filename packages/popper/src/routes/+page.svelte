<script>
  import { popover, SvelPopper } from '$lib/index.js';
</script>

<button class="button" use:popover={{ component: SvelPopper }}>Pop it</button>

<style>
  .button {
    position: absolute;
    left: 100px;
    top: 100px;
  }
</style>
