<script lang="ts">
  import { SvelIcon } from '@svelement-ui/icon';
  export let name: string;

  function copy2Clip() {
    navigator.clipboard.writeText(`<SvelIcon><${name} /></SvelIcon>`);
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li class="icon-item" on:mouseup={copy2Clip}>
  <span class="demo-svg-icon">
    <SvelIcon size={20}>
      <slot />
    </SvelIcon>
    <span class="icon-name">{name}</span>
  </span>
</li>

<style lang="scss">
  .icon-item {
    text-align: center;
    color: var(--el-text-color-regular);
    height: 90px;
    font-size: 13px;
    border-right: 1px solid var(--svel-border-color);
    border-bottom: 1px solid var(--svel-border-color);
    transition: background-color var(--svel-transition-duration);

    :hover {
      background-color: var(--svel-border-color-extra-light);
      color: var(--brand-color-light);
    }

    .demo-svg-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      cursor: pointer;
    }
  }
</style>
