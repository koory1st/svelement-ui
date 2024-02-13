<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import SvelInput from '@svelement-ui/input';
  import SvelTooltip from '@svelement-ui/tooltip';

  export let value;
  let tooltipVisible = false;

  function handleInputClick() {
    tooltipVisible = true;
  }
</script>

<SvelTooltip visible={tooltipVisible}>
  <div role="combobox">
    <SvelInput bind:value on:click={handleInputClick} />
  </div>
  <div slot="content">11111111111111111</div>
</SvelTooltip>
