<script>
  import N from '$lib/index.js';

  let ref;
  let visible = false;
</script>

<div class="aaa">
  <div class="bbb" />
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <button
    bind:this={ref}
    on:click={() => (visible = !visible)}
    on:mouseover={(e) => (ref = e.currentTarget)}
  >
    11111
  </button>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <button
    bind:this={ref}
    on:click={() => (visible = !visible)}
    on:mouseover={(e) => (ref = e.currentTarget)}
  >
    22222
  </button>
  <N content="1111" virtualRef={ref} virtualTriggering {visible} />

  <!--  <N>-->
  <!--    <button on:click={() => (visible = !visible)}>1111</button>-->
  <!--  </N>-->
</div>

<style>
  .aaa {
    height: 5000px;
  }

  .bbb {
    height: 1300px;
  }
</style>
