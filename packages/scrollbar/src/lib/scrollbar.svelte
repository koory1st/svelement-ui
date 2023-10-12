<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';
  import Bar from '$lib/bar.svelte';

  /** @type {string | number} */
  export let height;
  console.log('🚀 ~ file: scrollbar.svelte:8 ~ height:', height);
  /** @type {string | number} */
  export let maxHeight;
  console.log('🚀 ~ file: scrollbar.svelte:11 ~ maxHeight:', maxHeight);
  export let native = false;
  console.log('🚀 ~ file: scrollbar.svelte:13 ~ native:', native);
  /** @type {string | object} */
  export let wrapStyle;
  console.log('🚀 ~ file: scrollbar.svelte:16 ~ wrapStyle:', wrapStyle);
  /** @type {string | object} */
  export let wrapClass;
  /** @type {string | object} */
  export let viewStyle;
  console.log('🚀 ~ file: scrollbar.svelte:21 ~ viewStyle:', viewStyle);
  /** @type {string | object} */
  export let viewClass;
  console.log('🚀 ~ file: scrollbar.svelte:24 ~ viewClass:', viewClass);
  export let noresize = false;
  console.log('🚀 ~ file: scrollbar.svelte:26 ~ noresize:', noresize);
  export let always = false;
  export let minSize = 20;
  console.log('🚀 ~ file: scrollbar.svelte:29 ~ minSize:', minSize);

  $: scrollbarClass = a2s(['svel-scrollbar', $$props.class]);

  $: wrapClass = a2s(['svel-scrollbar__wrap', ['svel-scrollbar__wrap--hidden-default', !native]]);
  $: if (typeof height !== 'string') {
    height = `${height}px`;
  }

  let scrollbarRef;
  let wrapRef;
  let resizeRef;

  let sizeWidth = 0;
  let sizeHeight = 0;
  let ratioX = 1;
  let ratioY = 1;

  let moveX = 0;
  let moveY = 0;
</script>

<div class={scrollbarClass} bind:this={scrollbarRef}>
  <div class={wrapClass} style={wrapStyle} style:height bind:this={wrapRef}>
    <div class="svel-scrollbar__view" bind:this={resizeRef}>
      <slot />
    </div>
  </div>
  <Bar move={moveX} ratio={ratioX} size={sizeWidth} {always} />
  <Bar move={moveY} ratio={ratioY} size={sizeHeight} {always} vertical />
</div>
