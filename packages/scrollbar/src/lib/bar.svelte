<script>
  import { fade } from 'svelte/transition';
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

  let cursorDown = false;
  let cursorLeave = false;
  let originalOnSelectStart = null;

  export const handleMouseMoveScrollbar = () => {
    cursorLeave = false;
    visible = !!size;
  };
  export const handleMouseLeaveScrollbar = () => {
    cursorLeave = true;
    visible = cursorDown;
  };
  const bar = BAR_MAP[vertical ? 'vertical' : 'horizontal'];
  $: barClass = a2s(['svel-scrollbar__bar', `is-${bar.key}`]);

  let barRef;
  let thumRef;

  let visible = false;

  $: height = vertical ? size : null;
  $: width = vertical ? null : size;
  $: transform = `translate${bar.axis}(${move}%)`;
</script>

{#if always || visible}
  <div class={barClass} bind:this={barRef} transition:fade={{ delay: 250, duration: 300 }}>
    <div
      class="svel-scrollbar__thumb"
      style:height
      style:width
      style:transform
      bind:this={thumRef}
    />
  </div>
{/if}
