<script>
  import Container from '$lib/container.svelte';
  import { createPopperActions } from '$lib/popper.js';
  import { getContext, tick } from 'svelte';
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Portal from '$lib/portal.svelte';
  import { writable } from 'svelte/store';

  let x = 0;
  let y = 0;
  const mousemove = (ev) => {
    x = ev.clientX;
    y = ev.clientY;
  };

  $: getBoundingClientRect = () => ({
    width: 0,
    height: 0,
    top: y,
    bottom: y,
    left: x,
    right: x,
  });

  export let popperRef;

  export let target;
  export let trigger = 'hover';
  export let showAfter = 0;
  export let hideAfter = 200;
  export let showArrow = true;
  export let offset = 12;
  export let enterable = true;
  export let teleported = false;
  export let autoClose = 0;
  export let appendTo = null;
  export let disabled = false;
  export let visible = null;
  export let popperClass = '';
  export let virtualTriggering = false;
  export let virtualRef = null;

  export async function updatePopper() {
    const instance = await getInstance();
    if (!instance) {
      return;
    }
    instance.update();
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

  $: showFlg = !disabled && (visible || showTooltip);

  $: innerPopperClass = null;
  $: runPopperRefFlg = initVirtualElement(virtualTriggering, virtualRef);

  $: classString = a2s(['svel-popper', `is-${effect}`, innerPopperClass, $$props.class]);
  let defaultTargetEl;
  let contentEl;
  let hideTimeout;
  onMount(() => {
    defaultTargetEl = target || outer.firstChild;
    if (!virtualTriggering) {
      popperRef1(defaultTargetEl);
    }
    let triggerEvent;
    let unTriggerEvent;
    if (trigger === 'hover') {
      triggerEvent = 'mouseover';
      unTriggerEvent = 'mouseleave';
    } else if (trigger === 'click') {
      triggerEvent = 'click';
      unTriggerEvent = 'blur';
    }
    if (visible === null && !virtualTriggering) {
      defaultTargetEl.addEventListener(triggerEvent, show);
      defaultTargetEl.addEventListener(unTriggerEvent, hide);
    }
  });
  const [popperRef1, popperContent, getInstance] = createPopperActions({
    placement: placement,
    strategy: 'fixed',
  });

  let virtualElement = null;
  let isFirstTimeShow = true;
  initVirtualElement(virtualTriggering, virtualRef);

  function initVirtualElement(virtualTriggering, virtualRef) {
    if (!virtualTriggering || !virtualRef) {
      return;
    }
    if (
      virtualRef.constructor.__proto__.prototype &&
      virtualRef.constructor.__proto__.prototype.constructor.name
    ) {
      virtualElement = virtualRef;
    } else if (typeof virtualRef === 'function') {
      virtualElement = writable({ getBoundingClientRect: virtualRef });
    } else if (typeof virtualRef === 'object') {
      virtualElement = writable({ getBoundingClientRect: () => virtualRef });
    } else {
      return;
    }

    if (isFirstTimeShow) {
      isFirstTimeShow = false;
    } else {
      if (showFlg) {
        innerPopperClass = popperClass;
      }
    }
    return true;
  }

  $: if (runPopperRefFlg && classString) {
    popperRef1(virtualElement);
  }

  popperRef = popperRef1;
  export let content = '';
  $: content && updatePopper();
  let outer;

  async function doShow() {
    showTooltip = true;

    if (autoClose > 0) {
      setTimeout(hide, autoClose);
    }

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
