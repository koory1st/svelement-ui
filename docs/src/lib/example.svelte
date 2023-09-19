<script lang="ts">
  import { fade } from 'svelte/transition';
  import { SvelDivider, SvelCode } from '@svelement-ui/all';
  import {
    SvelIcon,
    ConicalFlask,
    Github,
    CopyDocumentSquare,
    ArrowLeftRight,
  } from '@svelement-ui/icon';
  export let code = '';

  let codeShowFlg = false;

  function toggleCode() {
    codeShowFlg = !codeShowFlg;
  }
</script>

<div class="example">
  <div class="example-showcase"><slot /></div>
  <SvelDivider class="m-0" />
  <div class="op-btns">
    <SvelIcon class="op-btn"><ConicalFlask /></SvelIcon>
    <SvelIcon class="op-btn"><Github /></SvelIcon>
    <SvelIcon class="op-btn"><CopyDocumentSquare /></SvelIcon>
    <SvelIcon class="op-btn" on:click={toggleCode}><ArrowLeftRight /></SvelIcon>
  </div>
  {#if codeShowFlg}
    <div transition:fade={{ delay: 250, duration: 300 }} class="example-source-wrapper">
      <SvelCode {code} language="svelte" />
    </div>

    <div class="example-float-control">example-float-control</div>
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
</style>
