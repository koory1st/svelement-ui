<script lang="ts">
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { createEventDispatcher } from 'svelte';
  export let type: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info' = 'default';
  export let underline = true;
  export let disabled = false;
  export let href = '';
  export let target: '_blank' | '_self' | '_parent' | '_top' | null = null;

  $: classString = a2s([
    'svel-link',
    `svel-link--${type}`,
    [`is-disabled`, disabled],
    [`is-underline`, underline && !disabled],
    $$props.class,
  ]);

  const dispatch = createEventDispatcher();
  function handleClick(event: Event) {
    if (disabled || href) {
      return;
    }
    dispatch('click', event);
  }
</script>

<a class={classString} href={disabled ? null : href ? href : null} {target} on:click={handleClick}>
  {#if $$slots.iconLeft}
    <slot name="iconLeft" />
  {/if}
  {#if $$slots.default}
    <span class="svel-link--inner">
      <slot />
    </span>
  {/if}
  {#if $$slots.icon}
    <slot name="icon" />
  {/if}
</a>
