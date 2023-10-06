<script lang="ts">
  import SvelCheckbox from '$lib/index.js';
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
