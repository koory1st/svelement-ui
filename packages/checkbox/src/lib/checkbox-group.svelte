<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import SvelCheckbox from './checkbox.svelte';
  import SvelCheckboxButton from './checkbox-button.svelte';
  import { setContext } from 'svelte';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  /** @type {string[]|{ label: string; value: string | number | boolean; disabled?: boolean }[]} */
  export let options = [];
  /** @type {string[]|number[]|boolean[]} */
  export let group = [];
  export let border = false;
  /** @type {string} */
  export let size = null;
  export let disabled = false;
  /** @type {string} */
  export let type = null;
  /**
   * max and min props are only avalible in creation
   */
  /** @type {string|number} */
  export let max = null;
  /** @type {string|number} */
  export let min = null;

  setContext('checkboxGroup_flg', true);
  setContext('checkboxGroup_changeEvent', changeEventForChild);
  setContext('checkboxGroup_max', max);
  setContext('checkboxGroup_min', min);

  $: classString = a2s(['svel-checkbox-group', $$props.class]);

  let checkboxPropList = [];

  for (let index = 0; index < options.length; index++) {
    const checkboxProp = {};
    const option = options[index];

    if (typeof option === 'string') {
      checkboxProp.label = option;
      checkboxPropList.push(checkboxProp);
      continue;
    }

    if (option instanceof Object) {
      if ('label' in option === false && 'value' in option === false) {
        continue;
      }
      let optionLabel = option.label || String(option.value);
      let optionValue = String(option.value) || option.label;

      checkboxProp.label = optionLabel;
      checkboxProp.checkedValue = optionValue;
      checkboxProp.disabled = option.disabled;
      checkboxPropList.push(checkboxProp);
    }
  }

  function changeEventForChild(groupFromChild) {
    group = groupFromChild;
    dispatch('change', groupFromChild);
  }
</script>

<div class={classString}>
  {#each checkboxPropList as prop}
    {#if type === 'button'}
      <SvelCheckboxButton
        checkedValue={prop.checkedValue}
        bind:group
        label={prop.label}
        {size}
        disabled={disabled || prop.disabled}
      >
        {prop.label}
      </SvelCheckboxButton>
    {:else}
      <SvelCheckbox
        bind:group
        checkedValue={prop.checkedValue}
        label={prop.label}
        {border}
        {size}
        disabled={disabled || prop.disabled}
      >
        {prop.label}
      </SvelCheckbox>
    {/if}
  {/each}
  <slot />
</div>
