<script>
  import SvelSlider from '$lib/index.js';

  let value1 = 1;
  let value2 = 10;
  let min = 1;
  let marks = {
    0: '0°C',
    8: '8°C',
    37: '37°C',
    50: {
      style: {
        color: '#1989FA',
      },
      label: '50%',
    },
  };
</script>

<input bind:value={min} type="text" />
<div>{value1}</div>
<SvelSlider bind:value={value1} range showStops step={10} />
<SvelSlider bind:value={value2} height="200px" vertical />
<SvelSlider bind:value={value2} {marks} range />
