<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { tick } from 'svelte';
  import { SvelIcon, CircleClose } from '@svelement-ui/icon';
  /** @type {'text' | 'textarea' | 'password' | 'button' | 'checkbox' | 'file' | 'number' | 'radio'} */
  export let type = 'text';
  /** @type {string | number} */
  export let value;
  /** @type {string | number} */
  export let maxlength;
  /** @type {number} */
  export let minlength;
  /** @type {boolean} */
  export let showWordLimit = false;
  /** @type {string} */
  export let placeholder = false;
  /** @type {boolean} */
  export let clearable = false;
  /** @type {Function} */
  export let formatter = false;
  /** @type {Function} */
  export let parser = false;
  /** @type {boolean} */
  export let showPassword = false;
  /** @type {boolean} */
  export let disabled = false;
  /** @type {'large' | 'default' | 'small'} */
  export let size = 'default';
  /** @type {number} */
  export let rows = 1;
  /** @type {boolean | Object} */
  export let autosize = false;
  /** @type {string} */
  export let autocomplete = 'off';
  /** @type {string} */
  export let name = 'off';
  /** @type {boolean} */
  export let readonly = false;
  /** @type {number} */
  export let max = null;
  /** @type {number} */
  export let min = null;
  /** @type {number} */
  export let step = null;
  /** @type {'none' | 'both' | 'horizontal' | 'vertical'} */
  export let resize = 'none';
  /** @type {boolean} */
  export let autofocus = false;
  /** @type {string} */
  export let form = null;
  /** @type {string} */
  export let label = null;
  /** @type {string | number} */
  export let tabindex = '0';
  /** @type {boolean} */
  export let validateEvent = true;
  /** @type {string | Object} */
  export let inputStyle = {};

  let wrapRef;
  let inputRef;

  let hovering = false;

  $: nativeInputValue = value === null ? '' : String(value);
  $: setNativeInputValue(nativeInputValue);

  function getRefValue() {
    if (!inputRef) {
      return;
    }
    return inputRef.value;
  }
  const setNativeInputValue = (nativeInputValue) => {
    let input = getRefValue();
    const formatterValue = formatter ? formatter(nativeInputValue) : nativeInputValue;
    if (!input || input === formatterValue) return;
    nativeInputValue = formatterValue;
  };

  let inputDisabled;
  $: {
    // todo
    inputDisabled = disabled;
  }

  let showClear;
  $: {
    // todo
    showClear = clearable && !inputDisabled && !readonly && !!nativeInputValue && hovering;
  }

  // todo
  $: suffixVisible = showClear;

  $: containerClass = a2s(['svel-input', ['is-disabled', inputDisabled], $$props.class]);

  let isComposing = false;
  async function handleInput(event) {
    let selectionInfo = recordCursor(inputRef);
    let targetValue = event.target.value;
    if (formatter) {
      targetValue = parser ? parser(value) : targetValue;
    }

    if (isComposing) {
      return;
    }

    if (targetValue === nativeInputValue) {
      setNativeInputValue(nativeInputValue);
      value = nativeInputValue;
      return;
    }

    await tick();
    // todo
    setNativeInputValue(nativeInputValue);
    value = nativeInputValue;
    setCursor(inputRef, selectionInfo);
  }

  function recordCursor(input) {
    if (input == undefined) return;

    const { selectionStart, selectionEnd, value } = input;

    if (selectionStart == null || selectionEnd == null) return;

    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));

    return {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt,
    };
  }

  function setCursor(inputRef, selectionInfo) {
    if (inputRef.value == undefined || selectionInfo == undefined) return;

    const inputValue = inputRef.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionInfo;

    if (beforeTxt == undefined || afterTxt == undefined || selectionStart == undefined) return;

    let startPos = value.length;

    if (inputValue.endsWith(afterTxt)) {
      startPos = inputValue.length - afterTxt.length;
    } else if (inputValue.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = inputValue.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }

    inputRef.setSelectionRange(startPos, startPos);
  }

  function clear(event) {
    nativeInputValue = '';
    value = '';
  }

  function handleMouseEnter(event) {
    hovering = true;
  }
  function handleMouseLeave(event) {
    hovering = false;
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={containerClass} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
  {#if $$slots.prepend}
    <div class="svel-input-group__prepend">
      <slot name="prepend" />
    </div>
  {/if}

  {#if type !== 'textarea'}
    <div class="svel-input__wrapper" bind:this={wrapRef} tabindex="-1">
      <input
        class="svel-input__inner"
        bind:value={nativeInputValue}
        bind:this={inputRef}
        {autocomplete}
        {readonly}
        {parser}
        {tabindex}
        aria-label={label}
        {placeholder}
        disabled={inputDisabled}
        on:input={handleInput}
      />
      {#if suffixVisible}
        <span class="svel-input__suffix">
          <span class="svel-input__suffix-inner">
            {#if showClear}
              <SvelIcon class="svel-input__clear" on:click={clear}>
                <CircleClose />
              </SvelIcon>
            {/if}
          </span>
        </span>
      {/if}
    </div>
  {/if}
</div>
