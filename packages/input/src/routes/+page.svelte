<script>
  import SvelInput from '$lib/index.js';

  let textarea = '';
  let textarea1 = '';
  let textarea2 = '';

  let focus;
  let blur;
  let clear;

  let ref;

  function showRef() {
    console.log(ref);
  }

  let input;

  function showInput() {
    console.log(input);
  }

  let resizeTextarea;

  function invokeResize() {
    resizeTextarea();
  }

  let select;

  function invokeSelect() {
    select();
  }
</script>

<SvelInput
  autosize
  bind:clear
  bind:input
  bind:ref
  bind:select
  bind:value={textarea1}
  clearable
  placeholder="Please input"
  showPassword
  type="password"
/>
<div style="margin: 20px 0" />
<SvelInput
  autosize={{ minRows: 2, maxRows: 4 }}
  bind:blur
  bind:focus
  bind:resizeTextarea
  bind:value={textarea2}
  placeholder="Please input"
  type="textarea"
/>
<button on:click={showRef}>log ref</button>
<button on:click={showInput}>log input</button>
<button on:click={focus}>focus</button>
<button on:click={blur}>blur</button>
<button on:click={clear}>clear</button>
<button on:click={invokeResize}>invokeText</button>
<button on:click={invokeSelect}>invokeSelect</button>
