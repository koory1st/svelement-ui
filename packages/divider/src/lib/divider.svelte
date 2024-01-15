<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import a2st from '@svelement-ui/util-array-2-style-string';

  /** @type {'horizontal' | 'vertical'} */
  export let direction = 'horizontal';
  /** @type {'none' | 'solid' | 'hidden' | 'dashed' | string} */
  export let borderStyle = 'solid';
  /** @type {'left' | 'right' | 'center'} */
  export let contentPosition = 'center';

  $: classString = a2s(['svel-divider', `svel-divider--${direction}`, $$props.class]);
  $: classStringText = a2s(['svel-divider__text', `is-${contentPosition}`]);

  $: style = a2st([['--svel-border-style', borderStyle]]);
</script>

<div class={classString} role="separator" {style}>
  <div class={classStringText}>
    <slot />
  </div>
</div>
