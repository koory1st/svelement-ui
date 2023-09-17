<script lang="ts">
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';

  export let direction: 'horizontal' | 'vertical' = 'horizontal';
  export let borderStyle: 'none' | 'solid' | 'hidden' | 'dashed' | string = 'solid';
  export let contentPosition: 'left' | 'right' | 'center' = 'center';

  $: classString = a2s(['svel-divider', `svel-divider--${direction}`, $$props.class]);
  $: classStringText = a2s(['svel-divider__text', `is-${contentPosition}`]);

  $: style = a2st([['--svel-border-style', borderStyle]]);
</script>

<div class={classString} {style} role="separator">
  <div class={classStringText}>
    <slot />
  </div>
</div>
