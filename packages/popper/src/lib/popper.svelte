<script>
  import { setContext, afterUpdate, onMount } from 'svelte';
  import { createPopperActions } from 'svelte-popperjs';

  export let popperRef;
  export let getInstance;

  let popperContent;

  const [popperRef1, popperContent1, getInstance1] = createPopperActions({
    placement: 'top',
    strategy: 'fixed',
  });
  const extraOpts = {
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  };
</script>

<button use:popperRef1>aaa</button>
<div use:popperContent1={extraOpts}>1234</div>
