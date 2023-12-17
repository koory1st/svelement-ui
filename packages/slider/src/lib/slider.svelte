<script>
  import SvelInputNumber from '@svelement-ui/input-number';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import Button from '$lib/button.svelte';
  import { createEventDispatcher, tick } from 'svelte';

  const dispatch = createEventDispatcher();

  export let value = 0;
  export let vertical = false;
  export let disabled = false;
  export let step = 1;
  export let min = 0;
  export let max = 100;
  /** @type {'large' | 'default' | 'small'} */
  export let size = 'default';
  export let showInput = false;
  let slider;
  let firstButton;

  $: sliderDisabled = disabled;
  $: sliderWrapperClass = a2s([
    'svel-slider',
    ['is-disabled', sliderDisabled],
    ['is-vertical', vertical],
    $$props.class,
    [`svel-slider--${size}`, size !== 'default'],
    [`svel-slider--with-input`, showInput],
  ]);
  $: sliderRunwayClass = a2s([
    'svel-slider__runway',
    ['is-disabled', sliderDisabled],
    [`show-input`, showInput],
  ]);
  $: range = false;

  $: firstValue = 0;
  $: secondValue = max;
  $: oldValue = 0;
  $: dragging = false;
  $: sliderSize = 1;
  $: minValue = Math.min(firstValue, secondValue);
  $: maxValue = Math.max(firstValue, secondValue);

  function resetSize() {
    if (slider) {
      sliderSize = slider[`client${vertical ? 'Height' : 'Width'}`];
    }
  }

  function setFirstValue(v) {
    firstValue = v;
    changeValue(range ? [minValue, maxValue] : firstValue);
  }

  function changeValue(v) {
    value = v;
    dispatch('input', v);
  }

  let firstButtonDown;
  let secondButtonDown;

  async function onSliderDown(e) {
    const buttonRef = handleSliderPointerEvent(e);
    await tick();
    firstButtonDown(e);
  }

  function handleSliderPointerEvent(e) {
    if (sliderDisabled.value || dragging) return;
    resetSize();
    let newPercent = 0;
    if (vertical) {
      const clientY = e.touches?.item(0)?.clientY ?? e.clientY;
      const sliderOffsetBottom = slider.getBoundingClientRect().bottom;
      newPercent = ((sliderOffsetBottom - clientY) / sliderSize) * 100;
    } else {
      const clientX = e.touches?.item(0)?.clientX ?? e.clientX;
      const sliderOffsetLeft = slider.getBoundingClientRect().left;
      newPercent = ((clientX - sliderOffsetLeft) / sliderSize) * 100;
    }
    if (newPercent < 0 || newPercent > 100) return;
    return setPosition(newPercent);
  }

  let firstButtonSetPosition;
  let secondButtonSetPosition;

  function setPosition(percent) {
    const targetValue = min + (percent * (max - min)) / 100;
    if (range) {
      firstButtonSetPosition();
      return firstButtonDown;
    }

    if (Math.abs(minValue - targetValue) < Math.abs(maxValue - targetValue)) {
      if (firstValue < secondValue) {
        firstButtonSetPosition();
        return firstButtonDown;
      }
      secondButtonSetPosition();
      return secondButtonDown;
    }

    if (firstValue > secondValue) {
      firstButtonSetPosition();
      return firstButtonDown;
    }
    secondButtonSetPosition();
    return secondButtonDown;
  }
</script>

<div class={sliderWrapperClass} role={range ? 'group' : undefined}>
  <div bind:this={slider} class={sliderRunwayClass} on:mousedown={onSliderDown}>
    <div class="svel-slider__bar" />
    <Button
      aria-disabled={sliderDisabled}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
      aria-valuemin={min}
      aria-valuenow={firstValue}
      bind:onButtonDown={firstButtonDown}
      bind:setPosition={firstButtonSetPosition}
      bind:this={firstButton}
      bind:value={firstValue}
      disabled={sliderDisabled}
      {resetSize}
      {sliderSize}
      updateValue={setFirstValue}
      {vertical}
    />
  </div>
  {#if showInput}
    <SvelInputNumber bind:value={firstValue} {min} {max} {step} disabled={sliderDisabled} />
  {/if}
</div>
