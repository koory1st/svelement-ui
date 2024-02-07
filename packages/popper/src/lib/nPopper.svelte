<script>
  import Container from '$lib/container.svelte';
  import { createPopper as popperJsCreatePopper } from '@popperjs/core';

  import { fade } from 'svelte/transition';
  import { onDestroy, tick } from 'svelte';
  import a2s from '@svelement-ui/util-array-2-class-string';

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
  export let effect = 'dark';
  export let content = '';

  export async function updatePopper() {
    popperInstance.update();
  }

  export let placement = 'bottom';

  let arrow;
  export let popperOptions = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, offset],
        },
      },
      {
        name: 'arrow',
        options: {
          element: arrow,
        },
      },
    ],
  };

  onDestroy(() => {
    destroyInstance();
  });

  let outer;
  let target;
  let popperEl;
  let popperInstance;

  let createdFlg = false;

  let contentEl;
  let showFlg = false;

  function showByFlg(disabled, visible) {
    console.log(visible);
    if (disabled || !visible) {
      hide();
      return;
    }
    if (showFlg) {
      return;
    }
    show();
    // showFlg = true;
  }

  $: showByFlg(disabled, visible);

  let virtualElement = {
    getBoundingClientRect: null,
  };

  $: option = {
    placement: placement,
    strategy: 'fixed',
    ...popperOptions,
  };

  function createPopper(outer, popperEl, virtualTriggering, virtualRef) {
    if (!popperEl) {
      console.log('popperEl empty');
      destroyInstance();
      return;
    }

    let targetE = getTarget(outer, popperEl, virtualTriggering, virtualRef);
    if (!targetE) {
      console.log('targetE empty');
      destroyInstance();
      return;
    }

    console.log('all ok');
    if (!popperInstance) {
      console.log(option);
      popperInstance = popperJsCreatePopper(targetE, popperEl, option);
      createdFlg = true;
    } else {
      popperInstance.update();
    }
  }

  function getTarget(outer, popperEl, virtualTriggering, virtualRef) {
    if (virtualTriggering && virtualRef) {
      virtualElement.getBoundingClientRect = () => virtualRef.getBoundingClientRect();
      return virtualElement;
    }

    if (!outer) {
      console.log('outer empty');
      return null;
    }
    target = outer.firstChild;
    if (!target) {
      console.log('target empty');
      return null;
    }

    return target;
  }

  function destroyInstance() {
    if (!popperInstance) {
      return;
    }
    createdFlg = false;
    popperInstance.destroy();
  }

  $: createPopper(outer, popperEl, virtualTriggering, virtualRef);

  let hideTimeout;

  function show() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    setTimeout(doShow, showAfter);
  }

  function hide() {
    hideTimeout = setTimeout(doHide, hideAfter);
  }

  async function doShow() {
    showFlg = true;

    if (autoClose > 0) {
      setTimeout(hide, autoClose);
    }

    await tick();
    await updatePopper();
    if (enterable && visible == null) {
      contentEl.addEventListener('mouseover', show);
      contentEl.addEventListener('mouseleave', hide);
    }
  }

  function doHide() {
    if (contentEl) {
      contentEl.removeEventListener('mouseover', show);
      contentEl.removeEventListener('mouseleave', hide);
    }
    showFlg = false;
  }

  $: innerPopperClass = null;
  $: classString = a2s(['svel-popper', `is-${effect}`, innerPopperClass, $$props.class]);
</script>

<!--{JSON.stringify(option)}-->
<div bind:this={outer}>
  <slot />
</div>
<div class="svel-popper-container">
  <div bind:this={popperEl}>
    {#if showFlg}
      <div bind:this={contentEl} class={classString} transition:fade={{ delay: 0, duration: 100 }}>
        {#if $$slots.content}
          <slot name="content" />
        {:else}
          <span>{content}</span>
        {/if}
        {#if showArrow}
          <div bind:this={arrow} class="svel-popper__arrow" data-popper-arrow />
        {/if}
      </div>
    {/if}
  </div>
</div>
<Container />
