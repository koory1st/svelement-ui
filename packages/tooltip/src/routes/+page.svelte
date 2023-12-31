<script>
  import { SvelTooltip, popover } from '$lib/index.js';
</script>

<button use:popover={{ component: SvelTooltip }}>Pop it</button>
