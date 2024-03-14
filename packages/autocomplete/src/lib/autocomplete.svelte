<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import SvelInput from '@svelement-ui/input';
  import SvelTooltip from '@svelement-ui/tooltip';
  import SvelScrollbar from '@svelement-ui/scrollbar';
  import { getContext, createEventDispatcher } from 'svelte';
  import { isArray } from '@svelement-ui/utils';
  import { debounce as debouncing } from 'debouncing';

  const dispatch = createEventDispatcher();

  export let value;
  export let placeholder;
  export let clearable = false;
  export let disabled = false;
  export let valueKey = 'value';
  export let debounce = 300;
  export let placement = 'bottom-start';
  export let fetchSuggestions;
  export let triggerOnFocus = true;
  export let selectWhenUnmatched = false;
  export let name;
  export let label;
  export let hideLoading = false;
  export let popperClass;
  export let teleported = false;
  export let highlightFirstItem = false;
  export let fitInputWidth = false;

  let inputRef;
  let suggestions = [];
  let dropdownWidth = '';
  let ignoreFocusEvent = false;
  let suggestionDisabled = false;
  let loading = false;
  let activated = false;
  let tooltipVisible = false;
  let highlightedIndex = -1;
  $: dark = dark || getContext('svel-dark');
  $: suggestionVisible = (suggestions.length > 0 || loading) && activated;
  $: suggestionLoading = !hideLoading && loading;

  const onSuggestionShow = () => {
    console.log(12);
    if (suggestionVisible) {
      dropdownWidth = `${inputRef.offsetWidth}px`;
    }
  };
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

    loading = true;
    if (isArray(fetchSuggestions)) {
      cb(fetchSuggestions);
    } else {
      const result = await fetchSuggestions(queryString, cb);
      if (isArray(result)) cb(result);
    }
  };
  const debouncedGetData = debouncing(getData, debounce);

  const handleInput = ({ detail: v }) => {
    const valuePresented = !!v;

    dispatch('input', v);
    value = v;

    suggestionDisabled = false;
    activated ||= valuePresented;

    if (!triggerOnFocus && !v) {
      suggestionDisabled = true;
      suggestions = [];
      return;
    }

    debouncedGetData(v);
  };

  function handleFocus() {
    tooltipVisible = true;
  }

  function handleInputBlur() {
    tooltipVisible = false;
  }
</script>

{suggestions}
<SvelTooltip effect="light" visible={tooltipVisible}>
  <div
    aria-controls="svel-id-6711-108"
    aria-expanded="false"
    aria-haspopup="listbox"
    on:beforeShow={onSuggestionShow}
    role="combobox"
  >
    <SvelInput
      bind:this={inputRef}
      bind:value
      on:blur={handleInputBlur}
      on:focus={handleFocus}
      on:input={handleInput}
    />
  </div>
  <div slot="content">
    <div role="region">
      <SvelScrollbar>
        <li>1</li>
      </SvelScrollbar>
    </div>
  </div>
</SvelTooltip>
