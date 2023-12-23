<script>
  import SvelSlider from '$lib/index.js';

  let value1 = 1;
  let value2 = 10;
  let min = 1;
</script>

<input bind:value={min} type="text" />
<div>{value1}</div>
<SvelSlider bind:value={value1} range showStops step={10} />
<SvelSlider bind:value={value2} height="200px" vertical />
