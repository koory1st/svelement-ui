<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';
  import Bar from '$lib/bar.svelte';
  import { setContext, onMount, tick, afterUpdate } from 'svelte';
  import { GAP } from './util';

  /** @type {string | number} */
  export let height;
  /** @type {string | number} */
  export let maxHeight;
  export let native = false;
  /** @type {string | object} */
  export let wrapStyle;
  /** @type {string | object} */
  export let wrapClass;
  /** @type {string | object} */
  export let viewStyle;
  /** @type {string | object} */
  export let viewClass;
  export let noresize = false;
  export let always = false;
  export let minSize = 20;
  $: scrollbarClass = a2s(['svel-scrollbar', $$props.class]);

  $: wrapClass = a2s(['svel-scrollbar__wrap', ['svel-scrollbar__wrap--hidden-default', !native]]);
  $: if (typeof height !== 'string') {
    height = `${height}px`;
  }
  $: if (typeof maxHeight !== 'string') {
    maxHeight = `${maxHeight}px`;
  }
  $: wrapStyle = a2st([['max-height', maxHeight, true], [wrapStyle]]);
  $: resizeClass = a2s(['svel-scrollbar__view', viewClass]);
  let scrollbarRef;
  let wrapRef;
  let resizeRef;

  let sizeWidth = 0;
  let sizeHeight = 0;
  let ratioX = 1;
  let ratioY = 1;

  let moveX = 0;
  let moveY = 0;
  onMount(() => {
    if (!native) {
      tick(() => update());
    }
    let resizeObserver;
    if (!noresize) {
      resizeObserver = new ResizeObserver((entries) => {
        update();
      });

      resizeObserver.observe(resizeRef);
    }
    return () => {
      if (resizeObserver) {
        resizeObserver.unobserve(resizeRef);
      }
    };
  });
  afterUpdate(() => update());

  function update() {
    if (!wrapRef) {
      return;
    }
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

    handleScroll();
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
  setContext('setWrapSize', (scroll, size) => {
    wrapRef[scroll] = size;
  });

  function handleScroll() {
    const offsetHeight = wrapRef.offsetHeight - GAP;
    const offsetWidth = wrapRef.offsetWidth - GAP;

    moveY = ((wrapRef.scrollTop * 100) / offsetHeight) * ratioY;
    moveX = ((wrapRef.scrollLeft * 100) / offsetWidth) * ratioX;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class={scrollbarClass}
  bind:this={scrollbarRef}
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
>
  <div
    class={wrapClass}
    style={wrapStyle}
    style:height
    bind:this={wrapRef}
    on:scroll={handleScroll}
  >
    <div class={resizeClass} style={viewStyle} bind:this={resizeRef}>
      <slot />
    </div>
  </div>
  <Bar move={moveX} ratio={ratioX} size={sizeWidth} {always} {wrapRef} bind:this={barX} />
  <Bar move={moveY} ratio={ratioY} size={sizeHeight} {always} {wrapRef} vertical bind:this={barY} />
</div>
