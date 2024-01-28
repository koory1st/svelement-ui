<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { string as toStyleObject } from 'to-style';
  import SvelTooltip from '@svelement-ui/tooltip';
  import { tick } from 'svelte';

  export let value = 0;
  /** @type {number | null} */
  export let precision = null;
  export let max = 100;
  export let min = 0;
  /** @type {number | null} */
  export let step = 1;
  export let vertical = false;

  export let resetSize;
  export let sliderSize = 1;
  export let disabled = false;
  export let updateValue;
  export let oldValue;
  export let showTooltip = true;
  export let formatTooltip = null;
  $: tooltipValue = formatTooltip ? formatTooltip(value) : value;

  let button;
  $: hovering = false;
  $: dragging = false;
  $: wrapperClass = a2s([
    `svel-slider__button-wrapper`,
    ['hover', hovering],
    ['dragging', dragging],
  ]);
  let wrapperStyle;
  let wrapperStyleStr;
  $: if (vertical) {
    wrapperStyle = { bottom: currentPosition };
    wrapperStyleStr = toStyleObject(wrapperStyle);
  } else {
    wrapperStyle = { left: currentPosition };
    wrapperStyleStr = toStyleObject(wrapperStyle);
  }
  $: buttonClass = a2s([`svel-slider__button`, ['hover', hovering], ['dragging', dragging]]);

  $: isClick = false;
  $: startY = 0;
  $: startX = 0;
  $: startPosition = 0;
  $: currentPosition = `${((value - min) / (max - min)) * 100}%`;
  $: newPosition = 0;
  $: currentY = 0;
  $: currentX = 0;

  function handleMouseEnter() {
    hovering = true;
    tooltipVisible = true && showTooltip;
    // displayTooltip()
  }

  function handleMouseLeave() {
    hovering = false;
    if (!dragging) {
      tooltipVisible = false;
      // hideTooltip()
    }
  }

  export function onButtonDown(event) {
    if (disabled) return;
    event.preventDefault();
    onDragStart(event);
    window.addEventListener('mousemove', onDragging);
    window.addEventListener('touchmove', onDragging);
    window.addEventListener('mouseup', onDragEnd);
    window.addEventListener('touchend', onDragEnd);
    window.addEventListener('contextmenu', onDragEnd);
    button.focus();
  }

  function onDragStart(event) {
    dragging = true;
    isClick = true;
    const { clientX, clientY } = getClientXY(event);
    if (vertical) {
      startY = clientY;
    } else {
      startX = clientX;
    }
    startPosition = Number.parseFloat(currentPosition);
    newPosition = startPosition;
  }

  function onDragging(event) {
    if (!dragging) {
      return;
    }

    isClick = false;
    tooltipVisible = true && showTooltip;
    // displayTooltip();
    resetSize();
    let diff;
    const { clientX, clientY } = getClientXY(event);
    if (vertical) {
      currentY = clientY;
      diff = ((startY - currentY) / sliderSize) * 100;
    } else {
      currentX = clientX;
      diff = ((currentX - startX) / sliderSize) * 100;
    }
    newPosition = startPosition + diff;
    setPosition(newPosition);
  }

  function getClientXY(event) {
    let clientX;
    let clientY;
    if (event.type.startsWith('touch')) {
      clientY = event.touches[0].clientY;
      clientX = event.touches[0].clientX;
    } else {
      clientY = event.clientY;
      clientX = event.clientX;
    }
    return {
      clientX,
      clientY,
    };
  }

  export async function setPosition(newPosition) {
    if (newPosition === null || Number.isNaN(+newPosition)) return;
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > 100) {
      newPosition = 100;
    }
    const lengthPerStep = 100 / ((max - min) / step);
    const steps = Math.round(newPosition / lengthPerStep);
    let v = steps * lengthPerStep * (max - min) * 0.01 + min;
    v = Number.parseFloat(v.toFixed(precision));

    if (v !== value) {
      value = v;
      updateValue(v);
    }

    if (!dragging && value !== oldValue) {
      oldValue = value;
    }

    await tick();
    await updatePopper();
    // dragging && displayTooltip();
    // tooltip.value!.updatePopper();
  }

  function onDragEnd() {
    if (!dragging) {
      return;
    }
    setTimeout(() => {
      dragging = false;
      if (!hovering) {
        tooltipVisible = false;
        // hideTooltip();
      }
      if (!isClick) {
        setPosition(newPosition);
      }
      // emitChange();
    }, 0);
    window.removeEventListener('mousemove', onDragging);
    window.removeEventListener('touchmove', onDragging);
    window.removeEventListener('mouseup', onDragEnd);
    window.removeEventListener('touchend', onDragEnd);
    window.removeEventListener('contextmenu', onDragEnd);
  }

  let tooltipVisible = false;

  let updatePopper;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<SvelTooltip bind:updatePopper content={tooltipValue} placement="top" visible={tooltipVisible}>
  <div
    bind:this={button}
    class={wrapperClass}
    on:blur={handleMouseLeave}
    on:focus={handleMouseEnter}
    on:mousedown={onButtonDown}
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:touchstart={onButtonDown}
    style={wrapperStyleStr}
    tabindex={disabled ? -1 : 0}
  >
    <div class={buttonClass} />
  </div>
</SvelTooltip>
