<script>
  import { slide } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { SvelDivider, SvelCode } from '@svelement-ui/all';
  import {
    SvelIcon,
    ConicalFlask,
    Github,
    CopyDocumentSquare,
    ArrowLeftRight,
    CaretTop,
  } from '@svelement-ui/icon';
  export let code = '';
  $: code = code.replaceAll('@@@>', '').trimStart().trimEnd();

  let codeShowFlg = false;

  function toggleCode() {
    codeShowFlg = !codeShowFlg;
  }

  function copy2Clip() {
    navigator.clipboard.writeText(code);
  }

  let classString = 'example ' + $$props.class;
</script>

<div class={classString}>
  <div class="example-showcase"><slot /></div>
  <SvelDivider class="m-0" />
  <div class="op-btns">
    <SvelIcon class="op-btn"><ConicalFlask /></SvelIcon>
    <SvelIcon class="op-btn"><Github /></SvelIcon>
    <SvelIcon class="op-btn" on:click={copy2Clip}><CopyDocumentSquare /></SvelIcon>
    <SvelIcon class="op-btn" on:click={toggleCode}><ArrowLeftRight /></SvelIcon>
  </div>
  {#if codeShowFlg}
    <div
      transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y' }}
      class="example-source-wrapper"
    >
      <SvelCode {code} language="svelte" />
    </div>

    <div
      class="example-float-control"
      role="button"
      tabindex="0"
      transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'y' }}
      on:mousedown={toggleCode}
    >
      <SvelIcon><CaretTop /></SvelIcon>
      <span>隐藏源代码</span>
    </div>
  {/if}
</div>

<style>
  .example {
    border: 1px solid var(--border-color);
    border-radius: var(--svel-border-radius-base);
  }

  .example-showcase {
    padding: 1.5rem;
    margin: 0.5px;
    background-color: var(--bg-color);
  }

  .op-btns {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 2.5rem;
  }

  :global(.op-btn) {
    margin: 0 0.5rem;
    cursor: pointer;
    color: var(--text-color-lighter);
    transition: 0.2s;
  }

  .example-float-control:hover {
    color: var(--svel-color-primary);
  }
  .example-float-control {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    box-sizing: border-box;
    background-color: var(--bg-color, #fff);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--svel-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
</style>
