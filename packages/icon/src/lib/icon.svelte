<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';

  export let size: number | null = null;
  export let color: string | null = null;

  $: classString = a2s(['svel-icon', $$props.class]);
  $: style = a2st([
    ['font-size', `${size}px`, Boolean(size)],
    ['color', `${color}`, Boolean(color)],
    $$props.style || '',
  ]);
  const dispatch = createEventDispatcher();
  function mousedown() {
    dispatch('click');
  }
</script>

<i class={classString} {style} on:mousedown={mousedown} role="link" aria-label="" tabindex="0">
  <slot />
</i>
