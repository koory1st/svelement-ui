<script>
  import SvelInputNumber from '$lib/index.js';

  function input(v) {
    console.log('%c ---> v: ', 'color:#F0F;', v);
  }

  function change(v) {
    console.log('%c ---> v: ', 'color:#F0F;', v);
  }

  let value;
  let value2;
</script>

{value}
<SvelInputNumber bind:value on:change={change} on:input={input} size="small" />
<SvelInputNumber bind:value controlsPosition="right" on:change={change} on:input={input} />

{value2}
<SvelInputNumber bind:value={value2} on:change={change} on:input={input} precision={2} step={0.1} />
