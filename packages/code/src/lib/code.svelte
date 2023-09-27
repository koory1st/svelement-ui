<script lang="ts">
  /* eslint-disable @typescript-eslint/no-unused-vars */
  import Prism from 'prismjs';
  import 'prism-svelte';
  import { afterUpdate } from 'svelte';
  import './prism.css';

  export let language: string;
  export let code: string;

  let divRef: Element;
  $: {
    code = code.replaceAll('@@@/', '</').trimStart().trimEnd();
  }

  afterUpdate(() => {
    Prism.highlightElement(divRef);
  });
</script>

<div class="svel-code" data-lang={language}>
  <pre class={`language-${language}`} bind:this={divRef}>
<code>{code}</code>
</pre>
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
