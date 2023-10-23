<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { createEventDispatcher } from 'svelte';
  import { getContext } from 'svelte';
  const dispatch = createEventDispatcher();
  /** @type {boolean | string | number} */
  export let value = false;
  /** @type {boolean | string | number} */
  export let label = '';
  export let disabled = false;
  /** @type {string} */
  export let name;
  /** @type {string} */
  export let size;

  // just for group
  const radioGroupFlg = getContext('radioGroup_flg');
  const changeEvent = getContext('radioGroup_changeEvent');

  let isFocus = false;

  $: name = name || getContext('radioGroup_name');
  $: isChecked = value === label ? true : null;
  $: isDisabled = disabled ? disabled : null;
  $: tabindex = isDisabled || (radioGroupFlg && value !== label) ? -1 : 0;

  $: classString = a2s([
    'seu-radio-button',
    [`seu-radio-button--${size}`, Boolean(size)],
    [`is-active`, isChecked],
    [`is-focus`, isFocus],
    [`is-disabled`, isDisabled],
  ]);

  function handleKeydown(event) {
    if (event.code !== 'Space') {
      return;
    }

    value = isDisabled ? value : label;
    event.stopPropagation();
    event.preventDefault();
  }

  function handleChange() {
    value = label;
    dispatch('change', value);

    // if in group, fire the group event
    if (radioGroupFlg) {
      changeEvent(value);
    }
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<label
  role="radio"
  class={classString}
  {tabindex}
  aria-disabled={isDisabled}
  aria-checked={isChecked}
  on:keydown={handleKeydown}
>
  <input
    class="seu-radio-button__orig-radio"
    type="radio"
    value={label}
    bind:group={value}
    aria-hidden="true"
    {name}
    disabled={isDisabled}
    tabindex="-1"
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange}
  />
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span class="seu-radio-button__inner" on:keydown|stopPropagation>
    <slot />
    {#if !$$slots.default}{label}{/if}
  </span>
</label>
