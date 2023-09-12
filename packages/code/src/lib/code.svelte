<script lang="ts">
  import PrismBase from './prism_base.svelte';
  import PrismSvelte from './prism_svelte.svelte';

  export let language: string;
  export let code: string;
  $: {
    code = code.replaceAll('!@/', '</').trimStart().trimEnd();
  }
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/prism-themes@1.4.0/themes/prism-vs.css"
    rel="stylesheet"
  />
</svelte:head>

<div class="svel-code" data-lang={language}>
  {#if code === 'svelte'}
    <PrismSvelte {code} />
  {:else}
    <PrismBase {code} {language} />
  {/if}
</div>

<style lang="scss">
  :root {
    --code-font-family: 'JetBrains Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    --prism-marker-font-size: 0.8em;
    --prism-marker-opacity: 0.6;
    --prism-marker-color: var(--code-text-color);
    --code-text-color: var(--text-color);
    --text-color: var(--svel-text-color-primary);
    --code-bg-color: var(--svel-fill-color-light);
  }
  .svel-code::before {
    box-sizing: border-box;
    font-family: var(--code-font-family);
    content: attr(data-lang);
    position: absolute;
    top: 0.4em;
    right: 0.8em;
    z-index: 2;
    opacity: var(--prism-marker-opacity);
    font-size: var(--prism-marker-font-size);
    color: var(--prism-marker-color);
  }
  .svel-code {
    margin: 1rem 0;
    border-radius: 6px;
    position: relative;
    background-color: var(--code-bg-color);
    overflow-x: auto;

    :global(pre) {
      position: relative;
      z-index: 1;
      margin: 0;
      padding: 0.25rem;
      background: transparent;
      overflow-x: auto;
    }
  }
</style>
