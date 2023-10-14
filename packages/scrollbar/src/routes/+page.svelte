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

<div class="outer">
  <SvelScrollbar>
    <div class="scrollbar-flex-content">
      {#each list as item}
        <p class="scrollbar-demo-item2">{item}</p>
      {/each}
    </div>
  </SvelScrollbar>
</div>

<style>
  .scrollbar-flex-content {
    display: flex;
  }
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
  .outer {
    width: 500px;
  }
  .scrollbar-demo-item2 {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--svel-color-danger-light-9);
    color: var(--svel-color-danger);
  }
</style>
