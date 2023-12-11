<script>
  import SvelInputNumber from '@svelement-ui/input-number';
  import Button from '$lib/button.svelte';

  let slider;

  let firstValue;
</script>

<div class="svel-slider">
  <div bind:this={slider} class="svel-slider__runway">
    <div class="svel-slider__bar" />
    <Button />
  </div>
  <SvelInputNumber bind:value={firstValue} />
</div>
