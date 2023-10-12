<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { BAR_MAP } from './util';
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

  const bar = BAR_MAP[vertical ? 'vertical' : 'horizontal'];
  $: barClass = a2s(['svel-scrollbar__bar', `is-${bar.key}`]);

  let barRef;
  let thumRef;

  let visible = false;

  $: height = vertical ? size : null;
  $: width = vertical ? null : size;
  $: transform = `translate${bar.axis}(${move}%)`;
  $: display = always || visible ? null : 'none';
</script>

<div class={barClass} bind:this={barRef}>
  <div
    class="svel-scrollbar__thumb"
    style:height
    style:width
    style:transform
    style:display
    bind:this={thumRef}
  />
</div>
