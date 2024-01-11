<script>
  import Container from '$lib/container.svelte';
  import { createPopperActions } from 'svelte-popperjs';
  import { getContext } from 'svelte';
  import a2s from '@svelement-ui/util-array-2-class-string';

  export let popperRef;

  export async function updatePopper() {
    await getInstance().update();
  }

  export let placement = 'bottom';

  export let popperOptions = {
    modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
  };

  export let showTooltip = false;
  /** @type {'dark' | 'light' } */
  export let effect = 'dark';

  $: dark = getContext('svel-dark');

  $: if (!effect) {
    effect = dark ? 'dark' : 'light';
  }

  $: classString = a2s(['svel-popper', `is-${effect}`, $$props.class]);

  const [popperRef1, popperContent, getInstance] = createPopperActions({
    placement: placement,
    strategy: 'fixed',
  });

  popperRef = popperRef1;
  export let content = '';
</script>

<Container>
  {#if showTooltip}
    <div class={classString} use:popperContent={{ ...popperOptions }}>
      {#if $$slots.default}
        <slot />
      {:else}
        <span>{content}</span>
      {/if}
      <div class="svel-popper__arrow" data-popper-arrow />
    </div>
  {/if}
</Container>
