<script>
  export let vertical = false;
  console.log('🚀 ~ file: bar.svelte:3 ~ vertical:', vertical);
  export let size;
  console.log('🚀 ~ file: bar.svelte:5 ~ size:', size);
  export let move;
  console.log('🚀 ~ file: bar.svelte:7 ~ move:', move);
  export let ratio;
  console.log('🚀 ~ file: bar.svelte:9 ~ ratio:', ratio);
  export let always;
  console.log('🚀 ~ file: bar.svelte:11 ~ always:', always);

  let bar;
  let thum;
</script>

<div class="svel-scrollbar__bar" bind:this={bar}>
  <div class="svel-scrollbar__thumb" bind:this={thum} />
</div>
