<script context="module">
  /* eslint-disable @typescript-eslint/no-unused-vars */
  import Prism from 'prismjs';
</script>

<script lang="ts">
  import PrismBase from './prism_base.svelte';
  import PrismSvelte from './prism_svelte.svelte';
  import './prism.css';

  export let language: string;
  export let code: string;
  $: {
    code = code.replaceAll('!@/', '</').trimStart().trimEnd();
  }
</script>

<div class="svel-code" data-lang={language}>
  {#if code === 'svelte'}
    <PrismSvelte {code} />
  {:else}
    <PrismBase {code} {language} />
  {/if}
</div>

<style lang="scss">
  .svel-code::before {
    box-sizing: border-box;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    content: attr(data-lang);
    color: #ccc;
    position: absolute;
    top: 0.4em;
    right: 0.8em;
    z-index: 2;
  }
  .svel-code {
    // margin: 1rem 0;
    // border-radius: 6px;
    position: relative;
    overflow-x: auto;

    :global(pre) {
      position: relative;
      z-index: 1;
      margin: 0;
      overflow-x: auto;
    }
  }
</style>
