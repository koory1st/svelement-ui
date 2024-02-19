<script>
  import SvelSwitch from '$lib/index.js';

  let value;
  let value2;
</script>

{value}
<SvelSwitch bind:value />

<SvelSwitch style="--svel-switch-on-color: #13ce66; --svel-switch-off-color: #ff4949" />

<div />

<SvelSwitch size="large" />
<SvelSwitch size="small" />

<div />
<SvelSwitch activeText="Pay by month" inactiveText="Pay by year" />

<div />

<SvelSwitch activeValue="100" bind:value={value2} inactiveValue="0" />
{value2}
