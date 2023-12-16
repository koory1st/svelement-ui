<script>
  import SvelInputNumber from '@svelement-ui/input-number';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import Button from '$lib/button.svelte';
  import { createEventDispatcher } from 'svelte';

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
  export let rage = false;
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
  $: secondValue = 0;
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
</script>

<div class={sliderWrapperClass}>
  <div bind:this={slider} class={sliderRunwayClass}>
    <div class="svel-slider__bar" />
    <Button
      aria-disabled={sliderDisabled}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
      aria-valuemin={min}
      aria-valuenow={firstValue}
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
