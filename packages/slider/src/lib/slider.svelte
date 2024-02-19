<script>
  import SvelInputNumber from '@svelement-ui/input-number';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import Button from '$lib/button.svelte';
  import { string as toStyleObject } from 'to-style';
  import { createEventDispatcher, onMount, tick } from 'svelte';

  const dispatch = createEventDispatcher();

  export let value = 0;
  export let vertical = false;
  export let disabled = false;
  export let step = 1;
  export let min = 0;
  export let max = 100;
  /** @type {'' | 'large' | 'default' | 'small'} */
  export let size = '';
  /** @type {'' | 'large' | 'default' | 'small'} */
  export let inputSize = 'default';
  export let showInput = false;
  export let showInputControls = true;
  export let showStops = false;
  export let range = false;
  /** @type {string} */
  export let height;
  /** @type {object} */
  export let marks;
  export let showTooltip = true;
  let slider;
  let firstButton;
  export let formatTooltip = null;
  /** @type {'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'} */
  export let placement = 'top';

  onMount(async () => {
    if (range) {
      if (Array.isArray(value)) {
        firstValue = Math.max(min, value[0]);
        secondValue = Math.min(max, value[1]);
      } else {
        firstValue = min;
        secondValue = max;
      }
      oldValue = [firstValue, secondValue];
    } else {
      if (typeof value !== 'number' || Number.isNaN(value)) {
        firstValue = min;
      } else {
        firstValue = Math.min(max, Math.max(min, value));
      }
      oldValue = firstValue;
      secondValue = max;
    }

    window.addEventListener('resize', resetSize);

    await tick();
    resetSize();
  });

  $: sliderDisabled = disabled;
  $: sliderWrapperClass = a2s([
    'svel-slider',
    ['is-disabled', sliderDisabled],
    ['is-vertical', vertical],
    $$props.class,
    [`svel-slider--${size || 'default'}`, size !== 'default'],
    [`svel-slider--with-input`, showInput],
  ]);
  $: sliderRunwayClass = a2s([
    'svel-slider__runway',
    ['is-disabled', sliderDisabled],
    [`show-input`, showInput],
  ]);

  $: firstValue = 0;
  $: secondValue = 0;
  $: oldValue = 0;
  $: dragging = false;
  $: sliderSize = 1;

  let minValue;
  let maxValue;
  $: changeMinMaxValue(firstValue, secondValue);

  function changeMinMaxValue(firstValue, secondValue) {
    minValue = Math.min(firstValue, secondValue);
    maxValue = Math.max(firstValue, secondValue);
  }

  function resetSize() {
    if (slider) {
      sliderSize = slider[`client${vertical ? 'Height' : 'Width'}`];
    }
  }

  $: setFirstValue(value);

  function setFirstValue(v) {
    if (!Array.isArray(v)) {
      firstValue = v;
    } else {
      firstValue = v.length === 0 ? 0 : v[0];
    }
    changeMinMaxValue(firstValue, secondValue);
    changeValue(range ? [minValue, maxValue] : firstValue);
  }

  function setSecondValue(v) {
    if (!Array.isArray(v)) {
      secondValue = v;
    } else {
      secondValue = v.length > 1 ? v[1] : 0;
    }
    changeMinMaxValue(firstValue, secondValue);
    if (range) {
      changeValue([minValue, maxValue]);
    }
  }

  function changeValue(v) {
    value = v;
    dispatch('input', v);
  }

  let firstButtonDown;
  let secondButtonDown;

  async function onSliderDown(e) {
    const buttonDown = handleSliderPointerEvent(e);
    await tick();
    buttonDown(e);
  }

  function handleSliderPointerEvent(e) {
    if (sliderDisabled || dragging) return;
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
    if (!range) {
      firstButtonSetPosition(percent);
      return firstButtonDown;
    }

    if (Math.abs(minValue - targetValue) < Math.abs(maxValue - targetValue)) {
      if (firstValue < secondValue) {
        firstButtonSetPosition(percent);
        return firstButtonDown;
      }
      secondButtonSetPosition();
      return secondButtonDown;
    }

    if (firstValue > secondValue) {
      firstButtonSetPosition(percent);
      return firstButtonDown;
    }
    secondButtonSetPosition(percent);
    return secondButtonDown;
  }

  $: stops = getStops(showStops, min, max, step, minValue, maxValue);

  function getStops(showStops, min, max, step, minValue, maxValue) {
    if (!showStops || min > max) return [];
    if (step === 0) {
      console.log('ElSlider', 'step should not be 0.');
      return [];
    }

    const stopCount = (max - min) / step;
    const stepWidth = (100 * step) / (max - min);
    const result = Array.from({ length: stopCount - 1 }).map((_, index) => (index + 1) * stepWidth);

    if (range) {
      return result.filter((step) => {
        return (
          step < (100 * (minValue - min)) / (max - min) ||
          step > (100 * (maxValue - min)) / (max - min)
        );
      });
    }

    return result.filter((step) => step > (100 * (firstValue - min)) / (max - min));
  }

  function getStopStyle(position) {
    if (vertical) {
      return `bottom:${position}%;`;
    }
    return `left:${position}%;`;
  }

  $: barSize = range
    ? `${(100 * (maxValue - minValue)) / (max - min)}%`
    : `${(100 * (firstValue - min)) / (max - min)}%`;
  $: barStart = range ? `${(100 * (minValue - min)) / (max - min)}%` : '0%';
  $: barStyle = vertical
    ? `height:${barSize};bottom:${barStart}`
    : `width:${barSize};left:${barStart}`;

  $: runwayStyle = vertical ? `height:${height}` : null;

  $: markList = getMarkList(marks, min, max);

  function getMarkList(marks, min, max) {
    if (!marks) {
      return [];
    }

    const marksKeys = Object.keys(marks);
    return marksKeys
      .map(Number.parseFloat)
      .sort((a, b) => a - b)
      .filter((point) => point <= max && point >= min)
      .map((point) => ({
        point,
        position: ((point - min) * 100) / (max - min),
        mark: marks[point],
      }));
  }

  function getMarkStyle(item) {
    let style = getStopStyle(item.position);

    if (typeof item.mark === 'object') {
      return toStyleObject(item.mark.style) + ';' + style;
    }

    return style;
  }

  function getMarkText(item) {
    if (typeof item.mark === 'object') {
      return item.mark.label;
    }
    return item.mark;
  }
</script>

<div class={sliderWrapperClass} role={range ? 'group' : undefined}>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    bind:this={slider}
    class={sliderRunwayClass}
    on:mousedown={onSliderDown}
    on:touchstart={onSliderDown}
    style={runwayStyle}
  >
    <div class="svel-slider__bar" style={barStyle} />
    <Button
      aria-disabled={sliderDisabled}
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
      aria-valuemax={range ? secondValue : max}
      aria-valuemin={min}
      aria-valuenow={firstValue}
      bind:oldValue
      bind:onButtonDown={firstButtonDown}
      bind:setPosition={firstButtonSetPosition}
      bind:this={firstButton}
      bind:value={firstValue}
      disabled={sliderDisabled}
      {formatTooltip}
      {max}
      {min}
      {placement}
      {resetSize}
      {showTooltip}
      {sliderSize}
      {step}
      updateValue={setFirstValue}
      {vertical}
    />
    {#if range}
      <Button
        aria-disabled={sliderDisabled}
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
        aria-valuemin={firstValue}
        aria-valuenow={secondValue}
        aria-valuemax={max}
        bind:oldValue
        bind:onButtonDown={secondButtonDown}
        bind:setPosition={secondButtonSetPosition}
        bind:value={secondValue}
        disabled={sliderDisabled}
        {resetSize}
        {sliderSize}
        {max}
        {min}
        {step}
        updateValue={setSecondValue}
        {vertical}
        {showTooltip}
        {formatTooltip}
        {placement}
      />
    {/if}
    {#if showStops}
      <div>
        {#each stops as item}
          <div class="svel-slider__stop" style={getStopStyle(item)} />
        {/each}
      </div>
    {/if}
    {#if markList.length > 0}
      <div>
        {#each markList as item}
          <div
            class="svel-slider__stop svel-slider__marks-stop"
            style={getStopStyle(item.position)}
          />
        {/each}
      </div>
      <div class="svel-slider__marks">
        {#each markList as item}
          <div class="svel-slider__marks-text" style={getMarkStyle(item)}>{getMarkText(item)}</div>
        {/each}
      </div>
    {/if}
  </div>
  {#if showInput && !range}
    <SvelInputNumber
      bind:value={firstValue}
      controls={showInputControls}
      {min}
      {max}
      {step}
      disabled={sliderDisabled}
      size={size ? size : inputSize}
      class="svel-slider__input"
    />
  {/if}
</div>
