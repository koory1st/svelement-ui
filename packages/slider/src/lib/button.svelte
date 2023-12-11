<script>
  import a2s from '@svelement-ui/util-array-2-class-string';

  $: hovering = false;
  $: dragging = false;
  $: wrapperClass = a2s([
    `svel-slider__button-wrapper`,
    ['hover', hovering],
    ['dragging', dragging],
  ]);
  $: wrapperStyle = null;
  $: buttonClass = a2s([`svel-slider__button`, ['hover', hovering], ['dragging', dragging]]);
</script>

<div class={wrapperClass} style={wrapperStyle}>
  <div class={buttonClass} />
</div>
