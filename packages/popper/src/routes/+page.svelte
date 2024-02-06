<script>
  import N from '$lib/nPopper.svelte';

  let ref;
</script>

<div class="aaa">
  <div class="bbb" />
  <button bind:this={ref} on:mouseover={(e) => (ref = e.currentTarget)}>11111</button>
  <button bind:this={ref} on:mouseover={(e) => (ref = e.currentTarget)}>22222</button>
  <N virtualRef={ref} virtualTriggering />

  <N>
    <button>1111</button>
  </N>
</div>

<style>
  .aaa {
    height: 5000px;
  }

  .bbb {
    height: 300px;
  }
</style>
