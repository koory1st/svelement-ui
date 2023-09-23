<script lang="ts">
  import { getContext } from 'svelte';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { SvelIcon, Loading } from '@svelement-ui/icon';
  export let type: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'default' = 'default';
  export let size = '';
  export let nativeType: 'button' | 'submit' | 'reset' | null | undefined = 'button';
  export let disabled = false;
  export let loading = false;
  export let plain = false;
  export let round = false;
  export let circle = false;

  $: size = size || getContext('svel-size');

  $: classString = a2s([
    'svel-button',
    `svel-button--${type || 'default'}`,
    [`is-disabled`, disabled],
    [`is-plain`, plain],
    [`is-round`, round],
    [`is-circle`, circle],
    [`svel-button--${size}`, Boolean(size)],
    ['is-loading', loading],
  ]);
</script>

<button class={classString} type={nativeType} disabled={disabled || loading} on:click>
  {#if loading}<SvelIcon class="is-loading"><Loading /></SvelIcon>{/if}
  {#if $$slots.icon && !loading}
    <slot name="icon" />
  {/if}
  {#if $$slots.default}
    <span>
      <slot />
    </span>
  {/if}
</button>
