<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';
  import Bar from '$lib/bar.svelte';
  import { GAP } from './util';

  /** @type {string | number} */
  export let height;
  /** @type {string | number} */
  export let maxHeight;
  console.log('🚀 ~ file: scrollbar.svelte:11 ~ maxHeight:', maxHeight);
  export let native = false;
  console.log('🚀 ~ file: scrollbar.svelte:13 ~ native:', native);
  /** @type {string | object} */
  export let wrapStyle;
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

  $: if (wrapRef) {
    const offsetHeight = wrapRef.offsetHeight - GAP;
    const offsetWidth = wrapRef.offsetWidth - GAP;

    const originalHeight = offsetHeight ** 2 / wrapRef.scrollHeight;
    const originalWidth = offsetWidth ** 2 / wrapRef.scrollWidth;
    const height = Math.max(originalHeight, minSize);
    const width = Math.max(originalWidth, minSize);

    ratioY = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
    ratioX = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));

    sizeHeight = height + GAP < offsetHeight ? `${height}px` : '';
    sizeWidth = width + GAP < offsetWidth ? `${width}px` : '';
  }

  let barX;
  let barY;

  function handleMouseMove() {
    barX.handleMouseMoveScrollbar();
    barY.handleMouseMoveScrollbar();
  }

  function handleMouseLeave() {
    barX.handleMouseLeaveScrollbar();
    barY.handleMouseLeaveScrollbar();
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class={scrollbarClass}
  bind:this={scrollbarRef}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <div class={wrapClass} style={wrapStyle} style:height bind:this={wrapRef}>
    <div class="svel-scrollbar__view" bind:this={resizeRef}>
      <slot />
    </div>
  </div>
  <Bar move={moveX} ratio={ratioX} size={sizeWidth} {always} bind:this={barX} />
  <Bar move={moveY} ratio={ratioY} size={sizeHeight} {always} vertical bind:this={barY} />
</div>
