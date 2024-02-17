<script>
  import { SvelIcon, Loading } from '@svelement-ui/icon';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { getContext, createEventDispatcher, tick } from 'svelte';

  const dispatch = createEventDispatcher();

  export let value = false;
  export let activeText = '';
  export let inactiveText = '';
  export let activeIcon = null;
  export let activeActionIcon = null;
  export let inactiveIcon = null;
  export let inactiveActionIcon = null;
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

  $: size = size || getContext('svel-size');
  $: isControlled = value !== false;
  $: actualValue = value;
  $: checked = actualValue === activeValue;
  $: switchKls = a2s([
    'svel-switch',
    ['is-checked', checked],
    ['is-disable', disabled],
    [`svel-button--${size}`, Boolean(size)],
    $$props.class,
  ]);
  $: switchDisabled = loading;
  $: style = $$props.style;

  function switchValue(e) {
    e.preventDefault();

    if (switchDisabled) {
      return;
    }
    if (!beforeChange) {
      handleChange();
      return;
    }
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
</script>

<div class={switchKls} on:click={switchValue} {style}>
  <input
    aria-checked={checked}
    aria-disabled={switchDisabled}
    bind:this={input}
    class="svel-switch__input"
    disabled={switchDisabled}
    false-value={inactiveValue}
    {name}
    role="switch"
    {tabindex}
    true-value={activeValue}
    type="checkbox"
  />
  {#if !inlinePrompt && (inactiveIcon || inactiveText)}
    <span>
      {#if inactiveText}
        <SvelIcon />
      {/if}
      <span />
    </span>
  {/if}
  <span class="svel-switch__core">
    <div class="svel-switch__inner">
      {#if inactiveText || activeIcon}
        <SvelIcon />
      {/if}
    </div>
    <div class="svel-switch__action">
      {#if loading}
        <SvelIcon>
          <Loading />
        </SvelIcon>
      {:else if activeActionIcon && checked}
        <SvelIcon />
      {:else if inactiveActionIcon && !checked}
        <SvelIcon />
      {/if}
    </div>
  </span>
  {#if !inlinePrompt && (activeIcon || activeText)}
    <span>
      {#if activeIcon}
        <SvelIcon />
      {/if}
      <span aria-hidden={!checked}>
        {activeText}
      </span>
    </span>
  {/if}
</div>
