<script>
  import SvelInputNumber from '@svelement-ui/input-number';
  import Button from '$lib/button.svelte';

  export let vertical = false;
  let slider;
  let firstButton;

  $: firstValue = 0;
  $: secondValue = 0;
  $: oldValue = 0;
  $: dragging = false;
  $: sliderSize = 1;

  function resetSize() {
    if (slider.value) {
      sliderSize = slider.value[`client${vertical ? 'Height' : 'Width'}`];
    }
  }
</script>

<div class="svel-slider">
  <div bind:this={slider} class="svel-slider__runway">
    <div class="svel-slider__bar" />
    <Button bind:this={firstButton} bind:value={firstValue} {vertical} />
  </div>
  <SvelInputNumber bind:value={firstValue} />
</div>
