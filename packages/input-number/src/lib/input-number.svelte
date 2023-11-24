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
  export let max = Infinity;
  export let min = -Infinity;

  const dispatch = createEventDispatcher();

  $: classString = a2s(['svel-input-number', $$props.class]);
  $: decreaseClass = a2s(['svel-input-number__decrease']);
  $: increaseClass = a2s(['svel-input-number__increase']);

  $: controlsAtRight = controls && controlsPosition === 'right';

  let inputRef;
  let dataCurrentValue = value;
  $: dataCurrentValue = value;
  let dataUserInput = null;

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

  function setCurrentValue(v, emitChange) {
    const oldVal = dataCurrentValue;
    const newVal = verifyValue(v);
    if (!emitChange && !isNull(newVal)) {
      value = newVal;
      return;
    }
    if (oldVal === newVal) return;
    dataUserInput = null;
    if (!isNull(newVal)) {
      value = newVal;
    }
    dispatch('change', { newVal, oldVal });

    // todo: validateEvent

    dataCurrentValue = newVal;
  }

  function verifyValue(v, update) {
    if (max < min) {
      throw new Error('[InputNumber] min should not be greater than max.');
    }
    let newVal = Number(value);
    if (isNull(value) || Number.isNaN(newVal)) {
      return null;
    }
  }

  function handleInput(v) {
    dataUserInput = v;
    const newVal = value === '' ? null : Number(value);
    dispatch('input', newVal);
    setCurrentValue(newVal, false);
  }
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
  <SvelInput
    bind:this={inputRef}
    bind:value={displayValue}
    on:input={handleInput}
    {placeholder}
    type="number"
  />
</div>
