<script>
  import { SvelTooltip, SvelButton, SvelScrollbar } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
</script>

<Example
  code={`
<div class="tooltip-base-box">
  <div class="row center">
    <SvelTooltip
      class="box-item"
      content="Top Left prompts info"
      effect="dark"
      placement="top-start"
    >
      <SvelButton>top-start</SvelButton>
    </SvelTooltip>
  </div>
</div>
`}
>
  <div class="tooltip-base-box">
    <div class="row center">
      <SvelTooltip
        class="box-item"
        content="Top Left prompts info"
        effect="dark"
        placement="top-start"
      >
        <SvelButton>top-start</SvelButton>
      </SvelTooltip>
    </div>
  </div>
</Example>
