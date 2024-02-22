<script>
  import SvelSwitch from '$lib/index.js';
  import { Check, Close } from '@svelement-ui/icon';

  let value;
  let value2;
</script>

{value}
<SvelSwitch bind:value />

<SvelSwitch style="--svel-switch-on-color: #13ce66; --svel-switch-off-color: #ff4949" />

<div />

<SvelSwitch size="large" />
<SvelSwitch size="small" />

<SvelSwitch activeValue="100" bind:value={value2} inactiveValue="0" />
<div />
<SvelSwitch activeText="Pay by month" inactiveText="Pay by year" />
<SvelSwitch activeText="Y" inactiveText="N" inlinePrompt />
<div />
<SvelSwitch activeText="超出省略" inactiveText="超出省略" inlinePrompt width="60" />
<div />
<SvelSwitch activeText="完整展示多个内容" inactiveText="多个内容" inlinePrompt />

<div />
<SvelSwitch bind:value>
  <Check slot="activeIcon" />
  <Close slot="inactiveIcon" />
</SvelSwitch>

<SvelSwitch bind:value inlinePrompt>
  <Check slot="activeIcon" />
  <Close slot="inactiveIcon" />
</SvelSwitch>

<div />
<SvelSwitch bind:value disabled />
