<script>
  import { SvelButton, SvelScrollbar, SvelSlider } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
  import { getContext, onMount } from 'svelte';

  let langFn = getContext('langFn');

  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push(i);
  }

  let list2 = [];
  for (let i = 0; i < 50; i++) {
    list2.push(i);
  }

  let list3 = [0, 1, 2];

  const add = () => {
    list3.push(list3.length);
    list3 = list3;
  };
  const onDelete = () => {
    if (list3.length > 0) {
      list3.pop();
      list3 = list3;
    }
  };

  let list4 = [];
  for (let i = 0; i < 20; i++) {
    list4.push(i);
  }
  let value = 0;
  let innerRef;
  $: max = innerRef ? innerRef.clientHeight - 380 : 0;

  function scroll({ detail }) {
    value = detail.scrollTop;
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
<SvelScrollbar height={400} always>
  {#each list as item}
    <p class="scrollbar-demo-item">{item}</p>
  {/each}
</SvelScrollbar>
`}
>
  <SvelScrollbar height={400}>
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
  let list2 = [];
  for (let i = 0; i < 50; i++) {
    list2.push(i);
  }
@@@/script>
<SvelScrollbar>
  <div class="scrollbar-flex-content">
    {#each list2 as item}
      <p class="scrollbar-demo-item2">{item}</p>
    {/each}
  </div>
</SvelScrollbar>
`}
>
  <SvelScrollbar>
    <div class="scrollbar-flex-content">
      {#each list2 as item}
        <p class="scrollbar-demo-item2">{item}</p>
      {/each}
    </div>
  </SvelScrollbar>
</Example>

<h2>{$langFn('cscrollbar04010')}</h2>
<p>{$langFn('cscrollbar04020')}</p>

<Example
  code={`
<script>
  let list3 = [];
  for (let i = 0; i < 3; i++) {
    list3.push(i);
  }

  const add = () => {
    list3.push(list3.length);
    list3 = list3;
  };
  const onDelete = () => {
    if (list3.length > 0) {
      list3.pop();
      list3 = list3;
    }
  };
@@@/script>
<SvelButton on:click={add}>Add Item</SvelButton>
<SvelButton on:click={onDelete}>Delete Item</SvelButton>
<SvelScrollbar maxHeight={400}>
  {#each list3 as item}
    <p class="scrollbar-demo-item">{item}</p>
  {/each}
</SvelScrollbar>
`}
>
  <SvelButton on:click={add}>Add Item</SvelButton>
  <SvelButton on:click={onDelete}>Delete Item</SvelButton>
  <SvelScrollbar maxHeight={400}>
    {#each list3 as item}
      <p class="scrollbar-demo-item">{item}</p>
    {/each}
  </SvelScrollbar>
</Example>

<h2>{$langFn('cscrollbar05010')}</h2>
<p>{$langFn('cscrollbar05020')}</p>

<Example
  code={`
`}
>
  <SvelScrollbar always height="400px" on:scroll={scroll}>
    <div bind:this={innerRef}>
      {#each list4 as item}
        <p class="scrollbar-demo-item">{item}</p>
      {/each}
    </div>
  </SvelScrollbar>

  <SvelSlider bind:value {max} />
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
