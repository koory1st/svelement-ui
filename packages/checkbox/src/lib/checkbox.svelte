<script>
  import a2s from '@svelement-ui/util-array-2-class-string';
  import { createEventDispatcher } from 'svelte';
  import { getContext } from 'svelte';
  import {
    getDisabled,
    getInnerCheckedValue,
    getValueByInnerChecked,
    validateCheckedValue,
    getGroupByInnerChecked,
    getInnerCheckedByValue,
  } from '@svelement-ui/util-checkbox';

  /** @type {string[]|number[]|boolean[]} */
  export let group = [];
  /** @type {boolean | string | number} */
  export let value = false;
  /** @type {string | number | boolean} */
  export let label;
  export let indeterminate = false;
  export let disabled = false;
  /** @type {string} */
  export let name = null;
  export let border = false;
  /** @type {string} */
  export let size = null;
  /** @type {string | number | boolean} */
  export let checkedValue = null;
  /** @type {string | number | boolean} */
  export let uncheckedValue = null;
  const dispatch = createEventDispatcher();

  validateCheckedValue(checkedValue, uncheckedValue);

  const isGroup = getContext('checkboxGroup_flg');
  const changeEvent = getContext('checkboxGroup_changeEvent');
  const checkboxGroupMax = getContext('checkboxGroup_max');
  const checkboxGroupMin = getContext('checkboxGroup_min');

  let isFocus = false;

  let ariaChecked;

  $: tabindex = indeterminate ? 0 : null;
  $: role = indeterminate ? 'checkbox' : null;
  $: ariaChecked = indeterminate ? 'mixed' : null;

  // innerCheckedValue, get by props
  $: innerCheckedValue = getInnerCheckedValue(isGroup, checkedValue, label);
  // fired by value and group props changed
  $: innerChecked = getInnerCheckedByValue(isGroup, value || false, group, innerCheckedValue);
  $: isDisabled = getDisabled(
    disabled,
    isGroup,
    group,
    checkboxGroupMax,
    checkboxGroupMin,
    innerChecked,
  );

  $: classString = a2s([
    'svel-checkbox',
    [`svel-checkbox--${size}`, Boolean(size)],
    [`is-checked`, innerChecked],
    [`is-disabled`, isDisabled],
    [`is-indeterminate`, indeterminate],
    [`is-bordered`, border],
    $$props.class,
  ]);

  function handleKeydown(event) {
    if (event.code !== 'Space') {
      return;
    }

    if (isDisabled) {
      return;
    }

    event.stopPropagation();
    event.preventDefault();

    if (isGroup) {
      value = value !== innerCheckedValue ? innerCheckedValue : null;
    }
  }

  function handleChange({ target }) {
    innerChecked = target.checked;
    value = getValueByInnerChecked(innerChecked, innerCheckedValue, uncheckedValue);
    group = getGroupByInnerChecked(isGroup, innerChecked, group, innerCheckedValue);
    dispatch('change', value);

    // if in group, fire the group event
    if (isGroup) {
      changeEvent(group);
    }
  }
</script>

<!-- svelte-ignore a11y-role-has-required-aria-props -->
<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
<label role="checkbox" class={classString} on:keydown={handleKeydown}>
  <input
    class="svel-checkbox__original"
    type="checkbox"
    checked={innerChecked}
    aria-hidden={indeterminate ? 'true' : 'false'}
    {name}
    disabled={isDisabled}
    on:focus={() => (isFocus = true)}
    on:blur={() => (isFocus = false)}
    on:change={handleChange}
  />
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <span
    class="svel-checkbox__input"
    class:is-checked={innerChecked}
    class:is-disabled={isDisabled}
    class:is-indeterminate={indeterminate}
    class:is-focus={isFocus}
    {role}
    {tabindex}
    aria-checked={ariaChecked}
  >
    <span class="svel-checkbox__inner" />
  </span>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span class="svel-checkbox__label" on:keydown|stopPropagation>
    {#if $$slots.default}
      <slot />
    {:else}{label}{/if}
  </span>
</label>
