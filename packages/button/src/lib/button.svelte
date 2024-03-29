<script>
  import { getContext, setContext } from 'svelte';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { SvelIcon, Loading } from '@svelement-ui/icon';
  import { getButtonStyle } from './button-custom.js';

  /** @type {'primary'|'success'|'info'|'warning'|'danger'|'default'} */
  export let type = null;
  /** @type {string} */
  export let size = '';
  /** @type {'button' | 'submit' | 'reset'} */
  export let nativeType = 'button';
  export let disabled = false;
  export let loading = false;
  export let plain = false;
  export let round = false;
  export let circle = false;
  export let text = false;
  export let bg = false;
  export let dark = false;
  /** @type {string} */
  export let color = null;

  $: dark = dark || getContext('svel-dark');

  let style;

  $: style = getButtonStyle({
    disabled,
    plain,
    color,
    dark,
  });

  $: size = size || getContext('svel-size');
  $: type = type || getContext('svel-button-type');

  $: classString = a2s([
    'svel-button',
    `svel-button--${type || 'default'}`,
    [`is-disabled`, disabled],
    [`is-plain`, plain],
    [`is-round`, round],
    [`is-circle`, circle],
    [`svel-button--${size}`, Boolean(size)],
    ['is-loading', loading || $$slots.loadingIcon],
    ['is-text', text],
    ['is-has-bg', bg],
    $$props.class,
  ]);

  if ($$slots.loadingIcon) {
    setContext('svel-loading-icon', true);
  }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button
  class={classString}
  disabled={disabled || loading}
  on:click|stopPropagation
  on:mousedown
  on:mouseenter
  on:mouseleave
  on:mousemove
  on:mouseout
  on:mouseover
  on:mouseup
  {style}
  type={nativeType}
>
  {#if $$slots.loadingIcon}
    <slot name="loadingIcon" />
  {/if}
  {#if loading && !$$slots.loadingIcon}
    <SvelIcon class="is-loading">
      <Loading />
    </SvelIcon>
  {/if}
  {#if $$slots.icon && !loading && !$$slots.loadingIcon}
    <slot name="icon" />
  {/if}
  {#if $$slots.default}
    <span>
      <slot />
    </span>
  {/if}
</button>
