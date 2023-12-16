<script>
  import SvelSlider from '$lib/index.js';

  let value1 = 1;
  let value2 = 10;
</script>

<div>{value1}</div>
<SvelSlider bind:value={value1} />
<SvelSlider bind:value={value2} disabled={true} />
