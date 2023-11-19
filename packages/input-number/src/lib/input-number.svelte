<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';
  import { createEventDispatcher, onMount, tick } from 'svelte';
  import { SvelIcon, ArrowDown, Minus, ArrowUp, Plus } from '@svelement-ui/icon';
  import SvelInput from '@svelement-ui/input';

  let controls = true;
  /** @type {'' | 'right'} */
  let controlsPosition = '';

  $: classString = a2s(['svel-input-number', $$props.class]);
  $: decreaseClass = a2s(['svel-input-number__decrease']);
  $: increaseClass = a2s(['svel-input-number__increase']);

  $: controlsAtRight = controls && controlsPosition === 'right';
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
  <SvelInput />
</div>
