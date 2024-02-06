<script>
  import { createPopper as popperJsCreatePopper } from '@popperjs/core';

  import { onDestroy } from 'svelte';

  export let virtualTriggering = false;
  export let virtualRef = null;

  onDestroy(() => {
    destroyInstance();
  });

  let outer;
  let target;
  let popperEl;
  let popperInstance;

  let popperVisible = false;

  let createdFlg = false;

  let virtualElement = {
    getBoundingClientRect: null,
  };

  let option = {
    placement: 'right-start',
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
      console.log('create', targetE, popperEl, option);
      popperInstance = popperJsCreatePopper(targetE, popperEl, option);
      createdFlg = true;
    } else {
      console.log('update', targetE, popperEl, option);
      popperInstance.update();
    }
    popperVisible = true;
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
</script>

<div bind:this={outer}>
  <slot />
</div>
<div bind:this={popperEl}>
  {#if popperVisible}
    aaaaa
  {/if}
</div>
