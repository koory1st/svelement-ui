<script>
  import SvelSwitch from '$lib/index.js';
  import { Check, Close, View, Hide } from '@svelement-ui/icon';

  let value;
  let value2;

  let loading1;
  let loading2;

  const beforeChange1 = () => {
    loading1 = true;
    return new Promise((resolve) => {
      setTimeout(() => {
        loading1 = false;
        return resolve(true);
      }, 1000);
    });
  };

  const beforeChange2 = () => {
    loading2 = true;
    return new Promise((_, reject) => {
      setTimeout(() => {
        loading2 = false;
        return reject(new Error('Error'));
      }, 1000);
    });
  };
</script>

<!--<SvelSwitch bind:value />-->

<!--<SvelSwitch style="&#45;&#45;svel-switch-on-color: #13ce66; &#45;&#45;svel-switch-off-color: #ff4949" />-->

<!--<div />-->

<!--<SvelSwitch size="large" />-->
<!--<SvelSwitch size="small" />-->

<!--<SvelSwitch activeValue="100" bind:value={value2} inactiveValue="0" />-->
<!--<div />-->
<!--<SvelSwitch activeText="Pay by month" inactiveText="Pay by year" />-->
<!--<SvelSwitch activeText="Y" inactiveText="N" inlinePrompt />-->
<!--<div />-->
<!--<SvelSwitch activeText="超出省略" inactiveText="超出省略" inlinePrompt width="60" />-->
<!--<div />-->
<!--<SvelSwitch activeText="完整展示多个内容" inactiveText="多个内容" inlinePrompt />-->

<!--<div />-->
<!--<SvelSwitch bind:value>-->
<!--  <Check slot="activeIcon" />-->
<!--  <Close slot="inactiveIcon" />-->
<!--</SvelSwitch>-->

<!--<SvelSwitch bind:value inlinePrompt>-->
<!--  <Check slot="activeIcon" />-->
<!--  <Close slot="inactiveIcon" />-->
<!--</SvelSwitch>-->

<!--<div />-->
<!--<SvelSwitch bind:value disabled />-->

<!--<div />-->
<!--<SvelSwitch loading value={true} />-->
<!--<SvelSwitch loading value={false} />-->

<!--<div />-->
<!--<SvelSwitch beforeChange={beforeChange1} bind:value loading={loading1} />-->
<!--<SvelSwitch beforeChange={beforeChange2} bind:value={value2} loading={loading2} />-->

<div />
<SvelSwitch bind:value>
  <View slot="activeActionIcon" />
  <Hide slot="inactiveActionIcon" />
</SvelSwitch>
