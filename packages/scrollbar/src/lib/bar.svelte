<script>
  import { fade } from 'svelte/transition';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { BAR_MAP } from './util';
  import { getContext } from 'svelte';
  export let vertical = false;
  export let size;
  export let move;
  export let ratio;
  export let always;
  export let wrapRef;

  let setWrapSize = getContext('setWrapSize');

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
  let thumbRef;

  let visible = false;

  $: height = vertical ? size : null;
  $: width = vertical ? null : size;
  $: transform = `translate${bar.axis}(${move}%)`;

  let thumbState = {};
  const handleThumbClick = (e) => {
    // prevent click event of middle and right button
    e.stopPropagation();
    if (e.ctrlKey || [1, 2].includes(e.button)) return;

    window.getSelection()?.removeAllRanges();
    startDrag(e);

    const el = e.currentTarget;
    if (!el) return;
    thumbState[bar.axis] =
      el[bar.offset] - (e[bar.client] - el.getBoundingClientRect()[bar.direction]);
  };
  const startDrag = (e) => {
    e.stopImmediatePropagation();
    cursorDown = true;
    document.addEventListener('mousemove', mouseMoveDocumentHandler);
    document.addEventListener('mouseup', mouseUpDocumentHandler);
    originalOnSelectStart = document.onselectstart;
    document.onselectstart = () => false;
  };

  let offsetRatio;
  $: if (barRef && wrapRef && thumbRef) {
    offsetRatio = barRef[bar.offset] ** 2 / wrapRef[bar.scrollSize] / ratio / thumbRef[bar.offset];
  }
  const mouseMoveDocumentHandler = (e) => {
    if (!barRef || !thumbRef) return;
    if (cursorDown === false) return;

    const prevPage = thumbState[bar.axis];
    if (!prevPage) return;

    const offset = (barRef.getBoundingClientRect()[bar.direction] - e[bar.client]) * -1;
    const thumbClickPosition = thumbRef[bar.offset] - prevPage;
    const thumbPositionPercentage =
      ((offset - thumbClickPosition) * 100 * offsetRatio) / barRef[bar.offset];
    wrapRef[bar.scroll] = (thumbPositionPercentage * wrapRef[bar.scrollSize]) / 100;
    setWrapSize(bar.scroll, (thumbPositionPercentage * wrapRef[bar.scrollSize]) / 100);
  };

  const mouseUpDocumentHandler = () => {
    cursorDown = false;
    thumbState[bar.axis] = 0;
    document.removeEventListener('mousemove', mouseMoveDocumentHandler);
    document.removeEventListener('mouseup', mouseUpDocumentHandler);
    restoreOnselectstart();
    if (cursorLeave) visible = false;
  };
  const restoreOnselectstart = () => {
    if (document.onselectstart !== originalOnSelectStart)
      document.onselectstart = originalOnSelectStart;
  };
</script>

{#if always || visible}
  <div class={barClass} bind:this={barRef} transition:fade={{ delay: 0, duration: 100 }}>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
      class="svel-scrollbar__thumb"
      style:height
      style:width
      style:transform
      on:mousedown={handleThumbClick}
      bind:this={thumbRef}
    />
  </div>
{/if}
