<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import SvelInput from '@svelement-ui/input';
  import SvelTooltip from '@svelement-ui/tooltip';
  import { getContext } from 'svelte';

  export let value;
  let tooltipVisible = false;
  $: dark = dark || getContext('svel-dark');

  function handleInputClick() {
    console.log(tooltipVisible);
    tooltipVisible = true;
  }

  function handleInputBlur() {
    tooltipVisible = false;
  }
</script>

<SvelTooltip visible={tooltipVisible}>
  <div
    aria-controls="svel-id-6711-108"
    aria-expanded="false"
    aria-haspopup="listbox"
    role="combobox"
  >
    <SvelInput bind:value on:blur={handleInputBlur} on:focus={handleInputClick} />
  </div>
  <div slot="content">11111111111111111</div>
</SvelTooltip>
