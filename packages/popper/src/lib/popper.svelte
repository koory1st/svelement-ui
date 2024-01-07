<script>
  import { onMount } from 'svelte';

  export let content = '';
  export let classId;
  export let popperThing;

  onMount(() => {
    console.log('popper', popperThing);
  });
</script>

<div class="svel-popper-container">
  <div bind:this={popperThing} class="svel-popper is-dark {classId}">
    <span>{content}</span>
    <div class="svel-popper__arrow" data-popper-arrow />
  </div>
</div>
