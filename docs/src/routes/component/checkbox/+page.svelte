<script>
  import { SvelCheckbox, SvelCheckboxGroup } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';

  let langFn = getContext('langFn');

  let option1 = true;
  let option2;

  let check1 = false;
  let check2 = true;

  let groupValue = ['selected and disabled'];
  let groupOptions = [
    { label: 'Option A', value: 'Option A' },
    { label: 'Option B', value: 'Option B' },
    { label: 'Option C', value: 'Option C' },
    { label: 'disabled', value: 'disabled', disabled: true },
    { label: 'selected and disabled', value: 'selected and disabled', disabled: true },
  ];

  let checkAll = false;
  let isIndeterminate = true;
  let checkedCities = ['Shanghai', 'Beijing'];
  let cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  function handleCheckAllChange({ detail }) {
    checkedCities = detail ? cities : [];
    isIndeterminate = false;
  }
  function handleCheckedCitiesChange({ detail }) {
    const checkedCount = detail.length;
    checkAll = checkedCount === cities.length;
    isIndeterminate = checkedCount > 0 && checkedCount < cities.length;
  }

  let checkedCities2 = ['Shanghai', 'Beijing'];
</script>

<h1>{$langFn('ccheckbox01010')}</h1>
<p>{$langFn('ccheckbox01011')}</p>
<h2>{$langFn('ccheckbox02010')}</h2>
<p>{$langFn('ccheckbox02011')}</p>

<Example
  code={`
<script>
  let option1 = true;
  let option2;
@@@/script>
<div>
  <SvelCheckbox bind:value={option1} label="Option 1" size="large" />
  <SvelCheckbox bind:value={option2} label="Option 2" size="large" />
</div>
<div>
  <SvelCheckbox bind:value={option1} label="Option 1" />
  <SvelCheckbox bind:value={option2} label="Option 2" />
</div>
<div>
  <SvelCheckbox bind:value={option1} label="Option 1" size="small" />
  <SvelCheckbox bind:value={option2} label="Option 2" size="small" />
</div>
<div>
  <SvelCheckbox bind:value={option1} label="Option 1" size="small" disabled />
  <SvelCheckbox bind:value={option2} label="Option 2" size="small" disabled />
</div>`}
>
  <div>
    <SvelCheckbox bind:value={option1} label="Option 1" size="large" />
    <SvelCheckbox bind:value={option2} label="Option 2" size="large" />
  </div>
  <div>
    <SvelCheckbox bind:value={option1} label="Option 1" />
    <SvelCheckbox bind:value={option2} label="Option 2" />
  </div>
  <div>
    <SvelCheckbox bind:value={option1} label="Option 1" size="small" />
    <SvelCheckbox bind:value={option2} label="Option 2" size="small" />
  </div>
  <div>
    <SvelCheckbox bind:value={option1} label="Option 1" size="small" disabled />
    <SvelCheckbox bind:value={option2} label="Option 2" size="small" disabled />
  </div>
</Example>

<h2>{$langFn('ccheckbox03010')}</h2>
<p>{$langFn('ccheckbox03020')}</p>
<p>{$langFn('ccheckbox03030')}</p>
<Example
  code={`
<script>
  let check1 = false;
  let check2 = true;
@@@/script>
<SvelCheckbox bind:value={check1} disabled>Disabled</SvelCheckbox>
<SvelCheckbox bind:value={check2}>Not disabled</SvelCheckbox>
`}
>
  <SvelCheckbox bind:value={check1} disabled>Disabled</SvelCheckbox>
  <SvelCheckbox bind:value={check2}>Not disabled</SvelCheckbox>
</Example>

<h2>{$langFn('ccheckbox04010')}</h2>
<p>{$langFn('ccheckbox04020')}</p>
<Example
  code={`
<script>
  let groupValue = ['selected and disabled'];
  let groupOptions = [
    { label: 'Option A', value: 'Option A' },
    { label: 'Option B', value: 'Option B' },
    { label: 'Option C', value: 'Option C' },
    { label: 'disabled', value: 'disabled', disabled: true },
    { label: 'selected and disabled', value: 'selected and disabled', disabled: true },
  ];
@@@/script>
<SvelCheckboxGroup bind:group={groupValue} options={groupOptions} />
`}
>
  {groupValue}
  <SvelCheckboxGroup bind:group={groupValue} options={groupOptions} />
</Example>

<h2>{$langFn('ccheckbox05010')}</h2>
<p>{$langFn('ccheckbox05020')}</p>
<Example
  code={`
<script>
  let checkAll = false;
  let isIndeterminate = true;
  let checkedCities = ['Shanghai', 'Beijing'];
  let cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
  function handleCheckAllChange({ detail }) {
    checkedCities = detail ? cities : [];
    isIndeterminate = false;
  }
  function handleCheckedCitiesChange({ detail }) {
    const checkedCount = detail.length;
    checkAll = checkedCount === cities.length;
    isIndeterminate = checkedCount > 0 && checkedCount < cities.length;
  }
@@@/script>
  <SvelCheckbox
    bind:value={checkAll}
    label="Check All"
    indeterminate={isIndeterminate}
    on:change={handleCheckAllChange}
  />
  <SvelCheckboxGroup
    bind:group={checkedCities}
    options={cities}
    on:change={handleCheckedCitiesChange}
  />
`}
>
  <SvelCheckbox
    bind:value={checkAll}
    label="Check All"
    indeterminate={isIndeterminate}
    on:change={handleCheckAllChange}
  />
  <SvelCheckboxGroup
    bind:group={checkedCities}
    options={cities}
    on:change={handleCheckedCitiesChange}
  />
</Example>

<h2>{$langFn('ccheckbox06010')}</h2>
<p>{$langFn('ccheckbox06020')}</p>

<Example
  code={`
<script>
  let checkedCities2 = ['Shanghai', 'Beijing'];
  let cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];
@@@/script>
<SvelCheckboxGroup bind:group={checkedCities2} options={cities} min={1} max={2} />
`}
>
  <SvelCheckboxGroup bind:group={checkedCities2} options={cities} min={1} max={2} />
</Example>
