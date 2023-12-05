<script>
  import SvelInput from '$lib/index.js';

  let textarea = '';
  let textarea1 = '';
  let textarea2 = '';

  let focus;
  let blur;
</script>

<SvelInput autosize bind:value={textarea1} placeholder="Please input" type="textarea" />
<div style="margin: 20px 0" />
<SvelInput
  autosize={{ minRows: 2, maxRows: 4 }}
  bind:blur
  bind:focus
  bind:value={textarea2}
  placeholder="Please input"
  type="textarea"
/>
<button on:click={focus}>test</button>
<button on:click={blur}>test</button>
