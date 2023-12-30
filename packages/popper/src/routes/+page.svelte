<script>
  import Modal from '$lib/modal.svelte';
  import { popover } from '$lib/action.js';
</script>

<button use:popover={{ component: Modal }}>Pop it</button>
