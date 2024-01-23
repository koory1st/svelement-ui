<script>
  import Container from '$lib/container.svelte';
  import { createPopperActions } from '$lib/popper.js';
  import { getContext, tick } from 'svelte';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Portal from '$lib/portal.svelte';

  export let popperRef;

  export let target;
  export let trigger = 'hover';
  export let showAfter = 0;
  export let hideAfter = 200;
  export let showArrow = true;
  export let offset = 12;
  export let enterable = true;
  export let teleported = false;
  export let appendTo = null;
  export let disabled = false;

  export async function updatePopper() {
    await getInstance().update();
  }

  export let placement = 'bottom';

  export let popperOptions = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, offset],
        },
      },
    ],
  };

  export let showTooltip = false;
  /** @type {'dark' | 'light' } */
  export let effect = 'dark';

  $: dark = getContext('svel-dark');

  $: if (!effect) {
    effect = dark ? 'dark' : 'light';
  }

  $: showFlg = !disabled && showTooltip;

  $: classString = a2s(['svel-popper', `is-${effect}`, $$props.class]);
  let defaultTargetEl;
  let contentEl;
  let hideTimeout;
  onMount(() => {
    defaultTargetEl = target || outer.firstChild;
    popperRef1(defaultTargetEl);
    let triggerEvent;
    let unTriggerEvent;
    if (trigger === 'hover') {
      triggerEvent = 'mouseover';
      unTriggerEvent = 'mouseleave';
    }
    defaultTargetEl.addEventListener(triggerEvent, show);
    defaultTargetEl.addEventListener(unTriggerEvent, hide);
  });
  const [popperRef1, popperContent, getInstance] = createPopperActions({
    placement: placement,
    strategy: 'fixed',
  });

  popperRef = popperRef1;
  export let content = '';
  let outer;

  async function doShow() {
    showTooltip = true;

    await tick();
    if (enterable) {
      contentEl.addEventListener('mouseover', show);
      contentEl.addEventListener('mouseleave', hide);
    }
  }

  function doHide() {
    if (contentEl) {
      contentEl.removeEventListener('mouseover', show);
      contentEl.removeEventListener('mouseleave', hide);
    }
    showTooltip = false;
  }

  function show() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    setTimeout(doShow, showAfter);
  }

  function hide() {
    hideTimeout = setTimeout(doHide, hideAfter);
  }
</script>

<!--todo: to remove slot in svelte5-->
<div bind:this={outer}>
  <slot />
</div>
{#if teleported}
  <Portal target={appendTo}>
    {#if showFlg}
      <div
        class={classString}
        use:popperContent={{ ...popperOptions }}
        bind:this={contentEl}
        transition:fade={{ delay: 0, duration: 100 }}
      >
        {#if $$slots.content}
          <slot name="content" />
        {:else}
          <span>{content}</span>
        {/if}
        {#if showArrow}
          <div class="svel-popper__arrow" data-popper-arrow />
        {/if}
      </div>
    {/if}
  </Portal>
{:else}
  <Container>
    {#if showFlg}
      <div
        class={classString}
        use:popperContent={{ ...popperOptions }}
        bind:this={contentEl}
        transition:fade={{ delay: 0, duration: 100 }}
      >
        {#if $$slots.content}
          <slot name="content" />
        {:else}
          <span>{content}</span>
        {/if}
        {#if showArrow}
          <div class="svel-popper__arrow" data-popper-arrow />
        {/if}
      </div>
    {/if}
  </Container>
{/if}
