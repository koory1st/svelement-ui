<script>
  import { SvelCheckbox, SvelCheckboxButton, SvelCheckboxGroup } from '$lib/index.js';

  let group;
  let changedValue;
</script>

<div>
  <SvelCheckbox label="option1" size="large" />
  <SvelCheckbox label="option2" size="large" />
</div>

<div>
  <SvelCheckbox label="option1" name="1" />
  <SvelCheckbox label="option2" />
</div>

<div>
  <SvelCheckbox label="option1" size="small" />
  <SvelCheckbox label="option2" size="small" />
</div>

<div>
  <SvelCheckbox label="option1" size="small" disabled />
  <SvelCheckbox label="option2" size="small" disabled />
</div>

<div>
  <SvelCheckboxButton label="option1" size="large" />
  <SvelCheckboxButton label="option2" size="large" />
</div>

<div>
  <SvelCheckboxButton label="option1" name="1" />
  <SvelCheckboxButton label="option2" />
</div>

<div>
  <SvelCheckboxButton label="option1" size="small" />
  <SvelCheckboxButton label="option2" size="small" />
</div>

<div>
  <SvelCheckboxButton label="option1" size="small" disabled />
  <SvelCheckboxButton label="option2" size="small" disabled />
</div>

<div>
  test component
  <span>changedValue:{changedValue}</span>
  <span>group:{group}</span>
  <SvelCheckboxGroup
    options={[
      { label: 'Shanghai', value: 1 },
      { label: 'Beijing', value: 2 },
      { label: 'Guangzhou', value: 3 },
      { label: 'Shenzhen', value: 4 },
    ]}
    bind:group
    on:change={(event) => {
      changedValue = event.detail;
    }}
  />
</div>
