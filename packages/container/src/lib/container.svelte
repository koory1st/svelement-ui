<script lang="ts">
  import a2s from '@svelement-ui/util-array-2-class-string';

  export let direction: 'horizontal' | 'vertical' | null = null;
  let selfElement: Element;

  let verticalFlg = false;
  function isVertical(selfElement: Element) {
    if (direction === 'horizontal') {
      return false;
    }

    if (direction === 'vertical') {
      return true;
    }

    if (!selfElement) {
      return false;
    }

    let children = selfElement.children;
    for (let i = 0; i < children.length; i++) {
      const childElement = children[i];

      if (
        childElement.classList.contains('svel-header') ||
        childElement.classList.contains('svel-footer')
      ) {
        return true;
      }
    }
    return false;
  }

  $: verticalFlg = isVertical(selfElement);

  $: classString = a2s(['svel-container', ['is-vertical', verticalFlg], $$props.class]);
</script>

<section class={classString} bind:this={selfElement}>
  <slot />
</section>
