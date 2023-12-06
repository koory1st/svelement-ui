<script>
  import SvelInput from '$lib/index.js';

  let textarea = '';
  let textarea1 = '';
  let textarea2 = '';

  let focus;
  let blur;
  let clear;
</script>

<SvelInput
  autosize
  bind:clear
  bind:value={textarea1}
  clearable
  placeholder="Please input"
  type="text"
/>
<div style="margin: 20px 0" />
<SvelInput
  autosize={{ minRows: 2, maxRows: 4 }}
  bind:blur
  bind:focus
  bind:value={textarea2}
  placeholder="Please input"
  type="textarea"
/>
<button on:click={focus}>focus</button>
<button on:click={blur}>blur</button>
<button on:click={clear}>clear</button>
