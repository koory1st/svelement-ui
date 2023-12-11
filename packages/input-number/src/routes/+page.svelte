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

  let focus;

  let blur;

  function handleFocus() {
    focus();
  }

  function handleBlur() {
    blur();
  }
</script>

{value}
<SvelInputNumber bind:blur bind:focus bind:value on:change={change} on:input={input} size="small" />
<SvelInputNumber bind:value controlsPosition="right" on:change={change} on:input={input} />

{value2}
<SvelInputNumber bind:value={value2} on:change={change} on:input={input} precision={2} step={0.1} />

<button on:click={handleFocus}>focus</button>
<button on:click={handleBlur}>blur</button>
