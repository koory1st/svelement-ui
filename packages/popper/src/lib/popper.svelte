<script>
  import { createPopperActions } from 'svelte-popperjs';

  export let popperRef;

  let showTooltip = false;
  const extraOpts = {
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  };
  const [popperRef1, popperContent] = createPopperActions({
    placement: 'bottom',
    strategy: 'fixed',
  });

  popperRef = popperRef1;
  export let content = '';
</script>

<div class="svel-popper-container">
  <div class="svel-popper is-dark" use:popperContent={extraOpts}>
    <span>{content}</span>
    <div class="svel-popper__arrow" data-popper-arrow />
  </div>
</div>
