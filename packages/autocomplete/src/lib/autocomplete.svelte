<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import SvelInput from '@svelement-ui/input';
  import SvelTooltip from '@svelement-ui/tooltip';
  import SvelScrollbar from '@svelement-ui/scrollbar';
  import { getContext } from 'svelte';

  export let value;
  export let fetchSuggestions;
  export let triggerOnFocus = true;

  let suggestions = [];
  let dropdownWidth = '';
  let ignoreFocusEvent = false;
  let suggestionDisabled = false;
  let loading = false;
  let activated = false;
  let tooltipVisible = false;
  $: dark = dark || getContext('svel-dark');

  function handleFocus() {
    tooltipVisible = true;
  }

  function handleInputBlur() {
    tooltipVisible = false;
  }
</script>

<SvelTooltip effect="light" visible={tooltipVisible}>
  <div
    aria-controls="svel-id-6711-108"
    aria-expanded="false"
    aria-haspopup="listbox"
    role="combobox"
  >
    <SvelInput bind:value on:blur={handleInputBlur} on:focus={handleFocus} />
  </div>
  <div slot="content">
    <div role="region">
      <SvelScrollbar>
        <li>1</li>
      </SvelScrollbar>
    </div>
  </div>
</SvelTooltip>
