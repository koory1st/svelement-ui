<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';
  import { createEventDispatcher, onMount, tick } from 'svelte';
  import { isNull, isNumber, isUndefined } from '@svelement-ui/utils';
  import { SvelIcon, ArrowDown, Minus, ArrowUp, Plus } from '@svelement-ui/icon';
  import SvelInput from '@svelement-ui/input';

  export let controls = true;
  /** @type {'' | 'right'} */
  export let controlsPosition = '';
  /** @type {string} */
  export let placeholder = '';
  /** @type {number | ''} */
  export let value = '';
  /** @type {number | null} */
  export let precision = null;

  $: classString = a2s(['svel-input-number', $$props.class]);
  $: decreaseClass = a2s(['svel-input-number__decrease']);
  $: increaseClass = a2s(['svel-input-number__increase']);

  $: controlsAtRight = controls && controlsPosition === 'right';

  let inputRef;
  $: dataCurrentValue = value;
  $: dataUserInput = null;

  function getDisplayValue(dataCurrentValue, dataUserInput) {
    if (dataUserInput !== null) {
      return dataUserInput;
    }
    let currentValue = dataCurrentValue;
    if (isNull(currentValue)) {
      return '';
    }
    if (isNumber(currentValue)) {
      if (Number.isNaN(currentValue)) return '';
      if (!isUndefined(precision)) {
        currentValue = currentValue.toFixed(precision);
      }
    }
    return currentValue;
  }

  $: displayValue = getDisplayValue(dataCurrentValue, dataUserInput);
</script>

<div class={classString}>
  {#if controls}
    <span aria-label="decrease number" class={decreaseClass} role="button">
      <SvelIcon>
        {#if controlsAtRight}
          <ArrowDown />
        {/if}
        <Minus />
      </SvelIcon>
    </span>
    <span aria-label="increase number" class={increaseClass} role="button">
      <SvelIcon>
        {#if controlsAtRight}
          <ArrowUp />
        {/if}
        <Plus />
      </SvelIcon>
    </span>
  {/if}
  <SvelInput bind:this={inputRef} bind:value={displayValue} {placeholder} type="number" />
</div>
