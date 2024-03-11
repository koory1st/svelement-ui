<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import SvelInput from '@svelement-ui/input';
  import SvelTooltip from '@svelement-ui/tooltip';
  import SvelScrollbar from '@svelement-ui/scrollbar';
  import { getContext } from 'svelte';
  import { isArray } from '@svelement-ui/utils';

  export let value;
  export let fetchSuggestions;
  export let triggerOnFocus = true;
  export let highlightFirstItem = false;

  let suggestions = [];
  let dropdownWidth = '';
  let ignoreFocusEvent = false;
  let suggestionDisabled = false;
  let loading = false;
  let activated = false;
  let tooltipVisible = false;
  let highlightedIndex = -1;
  $: dark = dark || getContext('svel-dark');

  const getData = async (queryString) => {
    if (suggestionDisabled) return;

    const cb = (suggestionList) => {
      loading = false;
      if (suggestionDisabled) return;

      if (isArray(suggestionList)) {
        suggestions = suggestionList;
        highlightedIndex = highlightFirstItem ? 0 : -1;
      } else {
        throw Error('autocomplete suggestions must be an array');
      }
    };

    loading.value = true;
    if (isArray(fetchSuggestions)) {
      cb(fetchSuggestions);
    } else {
      const result = await fetchSuggestions(queryString, cb);
      if (isArray(result)) cb(result);
    }
  };

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
