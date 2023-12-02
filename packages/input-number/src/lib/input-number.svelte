<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';
  import { createEventDispatcher, onMount, tick } from 'svelte';
  import { isNull, isNumber, isUndefined, isString } from '@svelement-ui/utils';
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
  /** @type {number | null | 'max' | 'min'} */
  export let valueOnClear = null;
  /** @type {number | null} */
  export let step = 1;
  export let readonly = false;
  export let disabled = false;
  /** @type {'large' | 'default' | 'small'} */
  export let size = 'default';

  const dispatch = createEventDispatcher();

  $: classString = a2s([
    'svel-input-number',
    [`svel-input-number--${size}`, size !== 'default'],
    [`is-controls-${controlsPosition}`, Boolean(controlsPosition)],
    $$props.class,
  ]);
  $: decreaseClass = a2s(['svel-input-number__decrease']);
  $: increaseClass = a2s(['svel-input-number__increase']);

  $: controlsAtRight = controls && controlsPosition === 'right';
  $: inputNumberSize = size;

  let inputRef;
  let dataCurrentValue = value;
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

  let displayValue;
  $: {
    displayValue = getDisplayValue(dataCurrentValue, dataUserInput);
  }

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
    let newVal = Number(v);
    if (isNull(v) || Number.isNaN(newVal)) {
      return null;
    }
    if (v === '') {
      if (valueOnClear === null) {
        return null;
      }
      newVal = isString(valueOnClear) ? { min, max }[valueOnClear] : valueOnClear;
    }
    // todo:

    return newVal;
  }

  function handleInput({ detail: v }) {
    dataUserInput = v;
    const newVal = v === '' ? null : Number(v);
    dispatch('input', newVal);
    setCurrentValue(newVal, false);
  }

  function handleInputChange(e) {
    const v = e.detail.target.value;
    const newVal = v !== '' ? Number(v) : '';
    if ((isNumber(newVal) && !Number.isNaN(newVal)) || v === '') {
      setCurrentValue(newVal, true);
    }
    dataUserInput = null;
  }

  function handleKeyDown({ detail: { key, ctrlKey } }) {
    if (ctrlKey) {
      return;
    }
    if (key === 'ArrowUp') {
      increase();
      return;
    }
    if (key === 'ArrowDown') {
      decrease();
    }
  }

  const getPrecision = (v) => {
    if (isNumber(v)) return 0;
    const valueString = v.toString();
    const dotPosition = valueString.indexOf('.');
    let precision = 0;

    if (dotPosition !== -1) {
      precision = valueString.length - dotPosition - 1;
    }
    return precision;
  };
  let inputNumberDisabled = false;
  $: minDisabled = isNumber(value) && value <= min;
  $: maxDisabled = isNumber(value) && value >= max;

  function increase() {
    if (readonly || inputNumberDisabled || maxDisabled) return;
    const value = Number(displayValue) || 0;
    const newVal = ensurePrecision(value);
    setCurrentValue(newVal, true);
    dispatch('input', dataCurrentValue);
  }

  function decrease() {
    if (readonly || inputNumberDisabled || minDisabled) return;
    const value = Number(displayValue) || 0;
    const newVal = ensurePrecision(value, -1);
    setCurrentValue(newVal, true);
    dispatch('input', dataCurrentValue);
  }

  function ensurePrecision(val, coefficient = 1) {
    if (!isNumber(val)) return dataCurrentValue;
    // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
    return toPrecision(val + step * coefficient);
  }

  function toPrecision(num, pre) {
    if (isUndefined(pre)) pre = numPrecision;
    if (pre === 0) return Math.round(num);
    let snum = String(num);
    const pointPos = snum.indexOf('.');
    if (pointPos === -1) return num;
    const nums = snum.replace('.', '').split('');
    const datum = nums[pointPos + pre];
    if (!datum) return num;
    const length = snum.length;
    if (snum.charAt(length - 1) === '5') {
      snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
    }
    return Number.parseFloat(Number(snum).toFixed(pre));
  }

  function getNumPrecision(step, precision) {
    const stepPrecision = getPrecision(step);
    if (!isUndefined(precision)) {
      if (stepPrecision > precision) {
        console.log('[InputNumber]precision should not be less than the decimal places of step');
      }
      return precision;
    } else {
      return Math.max(getPrecision(value), stepPrecision);
    }
  }

  $: numPrecision = getNumPrecision(step, precision);

  function handleIncreaseKeyDown(e) {
    console.log('%c ---> e: ', 'color:#F0F;', e);
  }

  function handleDecreaseKeyDown(e) {
    console.log('%c ---> e: ', 'color:#F0F;', e);
  }
</script>

<div class={classString}>
  {#if controls}
    <span
      aria-label="decrease number"
      class={decreaseClass}
      role="button"
      tabindex="0"
      on:click={decrease}
      on:keydown={handleDecreaseKeyDown}
    >
      <SvelIcon>
        {#if controlsAtRight}
          <ArrowDown />
        {:else}
          <Minus />
        {/if}
      </SvelIcon>
    </span>
    <span
      aria-label="increase number"
      class={increaseClass}
      role="button"
      tabindex="0"
      on:click={increase}
      on:keydown={handleIncreaseKeyDown}
    >
      <SvelIcon>
        {#if controlsAtRight}
          <ArrowUp />
        {:else}
          <Plus />
        {/if}
      </SvelIcon>
    </span>
  {/if}
  <SvelInput
    bind:this={inputRef}
    bind:value={displayValue}
    {disabled}
    {max}
    {min}
    on:change={handleInputChange}
    on:input={handleInput}
    on:keydown={handleKeyDown}
    {placeholder}
    {readonly}
    size={inputNumberSize}
    {step}
    type="number"
  />
</div>
