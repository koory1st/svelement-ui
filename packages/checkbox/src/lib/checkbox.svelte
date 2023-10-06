<script lang="ts">
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
  export let group: Array<string | number | boolean> = [];
  export let value: boolean | string | number | null = false;
  export let label: string | number | boolean | null | undefined;
  export let indeterminate = false;
  export let disabled = false;
  export let name: string | null = null;
  export let border = false;
  export let size: string | null = null;
  export let checkedValue: string | number | boolean | null | undefined = null;
  export let uncheckedValue: string | number | boolean | null | undefined = null;
  const dispatch = createEventDispatcher();

  validateCheckedValue(checkedValue, uncheckedValue);

  const isGroup: boolean = getContext('checkboxGroup_flg');
  const changeEvent: (p: Array<string | number | boolean>) => string = getContext(
    'checkboxGroup_changeEvent',
  );
  const checkboxGroupMax: string | number | null = getContext('checkboxGroup_max');
  const checkboxGroupMin: string | number | null = getContext('checkboxGroup_min');

  let isFocus = false;

  let ariaChecked: 'mixed' | null;

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
  ]);

  function handleKeydown(event: KeyboardEvent) {
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

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
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

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label class={classString} on:keydown={handleKeydown}>
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
