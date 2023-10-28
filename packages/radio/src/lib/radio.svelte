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
  export let border = false;
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
    'svel-radio',
    [`is-bordered`, border],
    [`svel-radio--${size}`, Boolean(size)],
    [`is-checked`, isChecked],
    [`is-focus`, isFocus],
    [`is-disabled`, isDisabled],
    $$props.class,
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
    class="svel-radio__original"
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
  <span class="svel-radio__input" class:is-checked={isChecked} class:is-disabled={isDisabled}>
    <span class="svel-radio__inner" />
  </span>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span class="svel-radio__label" on:keydown|stopPropagation>
    {#if $$slots.default}
      <slot />
    {:else}{label}{/if}
  </span>
</label>
