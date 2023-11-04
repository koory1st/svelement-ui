<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';
  import { tick, onMount } from 'svelte';
  import { SvelIcon, CircleClose, View, Hide } from '@svelement-ui/icon';
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
  let textAreaRef;

  let hovering = false;
  let passwordVisible = false;

  $: nativeInputValue = value === null ? '' : String(value);
  $: setNativeInputValue(nativeInputValue);
  $: type &&
    (async () => {
      await tick();
      setNativeInputValue();
    })();

  const setNativeInputValue = () => {
    if (!inputRef) {
      return;
    }
    let inputValue = inputRef.value;
    const formatterValue = formatter ? formatter(value) : value;

    if (!formatterValue || inputValue === formatterValue) return;
    inputRef.value = formatterValue;
  };

  let inputDisabled;
  $: {
    // todo
    inputDisabled = disabled;
  }

  // todo
  $: showClear = clearable && !inputDisabled && !readonly && !!nativeInputValue && hovering;

  // todo
  $: suffixVisible = !!$$slots.suffix || showClear || showPassword;
  // todo
  $: showPwdVisible = showPassword && !readonly && !!nativeInputValue;
  function handlePasswordVisible() {
    passwordVisible = !passwordVisible;
  }

  let textareaCalcStyle = '';
  let textareaStyle;
  $: {
    textareaStyle = a2st([inputStyle, textareaCalcStyle, ['resize', resize]]);
  }

  async function focus() {
    await tick();
    if (inputRef) {
      inputRef.focus();
    }
  }

  $: containerClass = a2s([
    'svel-input',
    ['is-disabled', inputDisabled],
    $$props.class,
    ['svel-input-group', $$slots.prepend || $$slots.append],
    ['svel-input-group--prepend', $$slots.prepend],
    ['svel-input-group--append', $$slots.append],
    [`svel-input--${size}`, Boolean(size)],
  ]);

  let isComposing = false;
  async function handleInput(event) {
    let selectionInfo = recordCursor(inputRef);
    value = event.target.value;
    if (formatter) {
      value = parser ? parser(value) : value;
    }

    if (isComposing) {
      return;
    }

    if (value === nativeInputValue) {
      setNativeInputValue(nativeInputValue);
      return;
    }

    await tick();
    // todo
    setNativeInputValue(nativeInputValue);
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

  onMount(async () => {
    if (!formatter && parser) {
      console.debug('ElInput', 'If you set the parser, you also need to set the formatter.');
    }
    setNativeInputValue();

    await tick();
    textareaCalcStyle = resizeTextarea();
  });

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

  $: {
    value;
    textareaCalcStyle = resizeTextarea();
  }
  $: {
    type;
    textareaCalcStyle = resizeTextarea();
  }
  function resizeTextarea() {
    if (!textAreaRef) {
      return '';
    }
    if (type !== 'textarea' || !textAreaRef.value) {
      return '';
    }

    if (!autosize) {
      return '';
    }

    let minRows = null;
    let maxRows = null;
    if (Object.prototype.toString.call(autosize).toLowerCase() === '[object object]') {
      minRows = autosize.minRows;
      maxRows = autosize.maxRows;
    }
    const style = calcTextareaHeight(textAreaRef, minRows, maxRows);

    style.push(['overflow-y', 'hidden']);

    return a2st(style);
  }
  let hiddenTextarea = null;
  function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
    if (!hiddenTextarea) {
      hiddenTextarea = document.createElement('textarea');
      document.body.appendChild(hiddenTextarea);
    }

    const { paddingSize, borderSize, boxSizing, contextStyle } =
      calculateNodeStyling(targetElement);

    hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
    hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

    let height = hiddenTextarea.scrollHeight;
    const result = [];

    if (boxSizing === 'border-box') {
      height = height + borderSize;
    } else if (boxSizing === 'content-box') {
      height = height - paddingSize;
    }

    hiddenTextarea.value = '';
    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

    if (isNumber(minRows)) {
      let minHeight = singleRowHeight * minRows;
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
      result.push(['min-height', `${minHeight}px`]);
    }
    if (isNumber(maxRows)) {
      let maxHeight = singleRowHeight * maxRows;
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      height = Math.min(maxHeight, height);
    }
    result.push(['height', `${height}px`]);
    hiddenTextarea.parentNode?.removeChild(hiddenTextarea);
    hiddenTextarea = undefined;

    return result;
  }
  const CONTEXT_STYLE = [
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing',
  ];
  const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  ${'overflow:hidden !important;'}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
  function calculateNodeStyling(targetElement) {
    const style = window.getComputedStyle(targetElement);

    const boxSizing = style.getPropertyValue('box-sizing');

    const paddingSize =
      Number.parseFloat(style.getPropertyValue('padding-bottom')) +
      Number.parseFloat(style.getPropertyValue('padding-top'));

    const borderSize =
      Number.parseFloat(style.getPropertyValue('border-bottom-width')) +
      Number.parseFloat(style.getPropertyValue('border-top-width'));

    const contextStyle = CONTEXT_STYLE.map(
      (name) => `${name}:${style.getPropertyValue(name)}`,
    ).join(';');

    return { contextStyle, paddingSize, borderSize, boxSizing };
  }
  function isNumber(val) {
    return typeof val === 'number';
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={containerClass} on:mouseenter={handleMouseEnter} on:mouseleave={handleMouseLeave}>
  {#if $$slots.prepend}
    <div class="svel-input-group__prepend">
      <slot name="prepend" />
    </div>
  {/if}

  <!-- input -->
  {#if type !== 'textarea'}
    <div class="svel-input__wrapper" bind:this={wrapRef} tabindex="-1">
      {#if $$slots.prefix}
        <span class="svel-input__prefix">
          <span class="svel-input__prefix-inner">
            <slot name="prefix" />
          </span>
        </span>
      {/if}
      {#if type === 'text' || (showPassword && passwordVisible)}
        <input
          class="svel-input__inner"
          bind:value={nativeInputValue}
          bind:this={inputRef}
          type="text"
          {autocomplete}
          {readonly}
          {parser}
          {tabindex}
          aria-label={label}
          {placeholder}
          disabled={inputDisabled}
          on:input={handleInput}
        />
      {:else}
        <input
          class="svel-input__inner"
          bind:value={nativeInputValue}
          bind:this={inputRef}
          type="password"
          {autocomplete}
          {readonly}
          {parser}
          {tabindex}
          aria-label={label}
          {placeholder}
          disabled={inputDisabled}
          on:input={handleInput}
        />
      {/if}
      {#if suffixVisible}
        <span class="svel-input__suffix">
          <span class="svel-input__suffix-inner">
            <slot name="suffix" />
            {#if showClear}
              <SvelIcon class="svel-input__clear" on:click={clear}>
                <CircleClose />
              </SvelIcon>
            {/if}
            {#if showPwdVisible}
              <SvelIcon
                class="svel-input__icon svel-input__password"
                on:click={handlePasswordVisible}
              >
                {#if passwordVisible}
                  <Hide />
                {:else}
                  <View />
                {/if}
              </SvelIcon>
            {/if}
          </span>
        </span>
      {/if}
    </div>

    {#if $$slots.append}
      <div class="svel-input-group__append">
        <slot name="append" />
      </div>
    {/if}
    <!-- textarea -->
  {:else}
    <textarea
      bind:this={textAreaRef}
      class="svel-textarea__inner"
      bind:value={nativeInputValue}
      {tabindex}
      disabled={inputDisabled}
      {readonly}
      {autocomplete}
      aria-label={label}
      {placeholder}
      {rows}
      style={textareaStyle}
      on:input={handleInput}
    />
  {/if}
</div>
