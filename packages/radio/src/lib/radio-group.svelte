<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import SvelRadio from '$lib/radio.svelte';
  import SvelRadioButton from '$lib/radio-button.svelte';
  import { setContext, createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  /** @type {string | number} */
  export let value;
  /** @type {Array<string> | Array<{ label: string; value: string | number | boolean; disabled?: boolean }>} */
  export let options = [];
  export let border = false;
  /** @type {string} */
  export let size;
  export let disabled = false;
  /** @type {string} */
  export let type;
  /** @type {string} */
  export let name;

  setContext('radioGroup_flg', true);
  setContext('radioGroup_changeEvent', changeEventForChild);
  setContext('radioGroup_name', name);

  let propList = [];

  $: classString = a2s(['svel-radio-group', $$props.class]);

  for (let index = 0; index < options.length; index++) {
    const prop = {};
    const option = options[index];

    if (typeof option === 'string') {
      prop.label = option;
      prop.value = option;
      propList.push(prop);
      continue;
    }

    if (option instanceof Object) {
      if ('label' in option === false && 'value' in option === false) {
        continue;
      }
      let optionLabel = option.label || String(option.value);
      let optionValue = String(option.value) || option.label;

      prop.label = optionLabel;
      prop.value = optionValue;
      prop.disabled = option.disabled;
      propList.push(prop);
    }
  }

  function changeEventForChild(valueFromChild) {
    dispatch('change', valueFromChild);
  }
</script>

<div class={classString}>
  {#each propList as radio}
    {#if type === 'button'}
      <SvelRadioButton
        bind:value
        label={radio.value}
        disabled={disabled || radio.disabled}
        {size}
        on:change
      >
        {radio.label || radio.value}
      </SvelRadioButton>
    {:else}
      <SvelRadio
        bind:value
        label={radio.value}
        disabled={disabled || radio.disabled}
        {border}
        {size}
        on:change
      >
        {radio.label || radio.value}
      </SvelRadio>
    {/if}
  {/each}
  <slot />
</div>
