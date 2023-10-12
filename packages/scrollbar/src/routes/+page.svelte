<script>
  import SvelScrollbar from '$lib/index.js';

  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(i);
  }
</script>

<SvelScrollbar height={400}>
  {#each list as item}
    <p class="scrollbar-demo-item">{item}</p>
  {/each}
</SvelScrollbar>

<style>
  .scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--svel-color-primary-light-9);
    color: var(--svel-color-primary);
  }
</style>
