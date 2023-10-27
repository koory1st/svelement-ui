<script>
  import { SvelScrollbar } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';

  let langFn = getContext('langFn');

  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(i);
  }

  let list2 = [];
  for (let i = 0; i < 50; i++) {
    list2.push(i);
  }
</script>

<h1>{$langFn('cscrollbar01010')}</h1>
<p>{$langFn('cscrollbar01011')}</p>

<h2>{$langFn('cscrollbar02010')}</h2>
<p>{$langFn('cscrollbar02011')}</p>

<Example
  code={`
<script>
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(i);
  }
@@@/script>
<SvelScrollbar maxHeight={400} always>
  {#each list as item}
    <p class="scrollbar-demo-item">{item}</p>
  {/each}
</SvelScrollbar>
`}
>
  <SvelScrollbar maxHeight={400}>
    {#each list as item}
      <p class="scrollbar-demo-item">{item}</p>
    {/each}
  </SvelScrollbar>
</Example>

<h2>{$langFn('cscrollbar03010')}</h2>
<p>{$langFn('cscrollbar03011')}</p>

<Example
  code={`
<script>
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(i);
  }
@@@/script>
<SvelScrollbar maxHeight={400} always>
  {#each list as item}
    <p class="scrollbar-demo-item">{item}</p>
  {/each}
</SvelScrollbar>
`}
>
  <SvelScrollbar maxHeight={400}>
    <div class="scrollbar-flex-content">
      {#each list2 as item}
        <p class="scrollbar-demo-item2">{item}</p>
      {/each}
    </div>
  </SvelScrollbar>
</Example>

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

  .scrollbar-flex-content {
    display: flex;
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
