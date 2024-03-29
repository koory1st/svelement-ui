<script>
  import { SvelIcon, Loading } from '@svelement-ui/icon';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';
  import { getContext, createEventDispatcher, tick } from 'svelte';

  const dispatch = createEventDispatcher();

  export let id;
  export let value = false;
  export let activeText = '';
  export let inactiveText = '';
  export let inactiveIcon = null;
  export let disabled = false;
  export let loading = false;
  export let activeValue = true;
  export let inactiveValue = false;
  export let inlinePrompt = false;
  /** @type {'' | 'large' | 'default' | 'small'} */
  export let size = '';
  export let name = '';
  /** @type {String, Number} */
  export let tabindex;
  export let beforeChange = null;
  export let width = null;

  export function focus() {
    input.focus();
  }

  $: size = size || getContext('svel-size');
  $: isControlled = value !== false;
  $: actualValue = value;
  $: checked = actualValue === activeValue;
  $: switchDisabled = loading || disabled;
  $: switchKls = a2s([
    'svel-switch',
    ['is-checked', checked],
    ['is-disabled', disabled || loading],
    [`svel-switch--${size}`, Boolean(size)],
    $$props.class,
  ]);
  $: style = $$props.style;
  $: labelLeftKls = a2s([
    'svel-switch__label',
    'svel-switch__label--left',
    ['is-active', !checked],
  ]);
  $: labelRightKls = a2s([
    'svel-switch__label',
    'svel-switch__label--right',
    ['is-active', checked],
  ]);

  function switchValue(e) {
    e.preventDefault();

    if (switchDisabled) {
      return;
    }
    if (!beforeChange) {
      handleChange();
      return;
    }
    const shouldChange = beforeChange();
    if (shouldChange.toString() !== '[object Promise]') {
      handleChange();
      return;
    }

    shouldChange
      .then((result) => {
        if (result) {
          handleChange();
        }
      })
      .catch((e) => {
        console.warn('switch', `some error occurred: ${e}`);
      });
  }

  if (
    (value === undefined || value === null) &&
    actualValue !== activeValue &&
    actualValue !== inactiveValue
  ) {
    value = inactiveValue;
    dispatch('change', value);
    dispatch('input', value);
  }

  let input;

  function handleChange() {
    const val = checked ? inactiveValue : activeValue;
    value = val;
    dispatch('change', val);
    dispatch('input', val);
    tick().then(() => {
      input.checked = checked;
    });
  }

  function handleInputKeydown(e) {
    if (e.key !== 'Enter') {
      return;
    }
    switchValue(e);
  }

  $: coreStyle = a2st([[`width`, width ? `${width}px` : null]]);
</script>

<div class={switchKls} on:click={switchValue} {style}>
  <input
    aria-checked={checked}
    aria-disabled={switchDisabled}
    bind:this={input}
    class="svel-switch__input"
    disabled={switchDisabled}
    false-value={inactiveValue}
    {id}
    {name}
    on:change={handleChange}
    on:keydown={handleInputKeydown}
    role="switch"
    {tabindex}
    true-value={activeValue}
    type="checkbox"
  />
  {#if !inlinePrompt && ($$slots.inactiveIcon || inactiveText)}
    <span class={labelLeftKls}>
      {#if $$slots.inactiveIcon}
        <SvelIcon>
          <slot name="inactiveIcon" />
        </SvelIcon>
      {/if}
      {#if !inactiveIcon && inactiveText}
        <span aria-hidden="checked">{inactiveText}</span>
      {/if}
    </span>
  {/if}
  <span class="svel-switch__core" style={coreStyle}>
    {#if inlinePrompt}
      <div class="svel-switch__inner">
        {#if $$slots.activeIcon || $$slots.inactiveIcon}
          <SvelIcon class="is-icon">
            {#if checked}
              <slot name="activeIcon" />
            {:else}
              <slot name="inactiveIcon" />
            {/if}
          </SvelIcon>
        {:else if activeText || inactiveText}
          <span class="is-text" aria-hidden={!checked}>{checked ? activeText : inactiveText}</span>
        {/if}
      </div>
    {/if}
    <div class="svel-switch__action">
      {#if loading}
        <SvelIcon class="is-loading">
          <Loading />
        </SvelIcon>
      {:else if $$slots.activeActionIcon && checked}
        <SvelIcon>
          <slot name="activeActionIcon" />
        </SvelIcon>
      {:else if $$slots.activeAction && checked}
        <slot name="activeAction" />
      {:else if $$slots.inactiveActionIcon && !checked}
        <SvelIcon>
          <slot name="inactiveActionIcon" />
        </SvelIcon>
      {:else if $$slots.inactiveAction && !checked}
        <slot name="inactiveAction" />
      {/if}
    </div>
  </span>
  {#if !inlinePrompt && ($$slots.activeIcon || activeText)}
    <span class={labelRightKls}>
      {#if $$slots.activeIcon}
        <SvelIcon>
          <slot name="activeIcon" />
        </SvelIcon>
      {/if}
      <span aria-hidden={!checked}>
        {activeText}
      </span>
    </span>
  {/if}
</div>
