<script lang="ts">
  import Code from '$lib/code.svelte';
</script>

<Code
  language="typescript"
  code={`
const add = (a: number, b: number) => a + b;
`}
/>
<Code
  language="svelte"
  code={`
<script lang="ts">
  import { Highlight, HighlightSvelte, HighlightAuto } from 'svelte-highlight';
  import 'svelte-highlight/styles/github.css';
  import { getLang } from './language.js';
  import type { Language } from 'highlight.js';

  export let language: string;
  export let code: string;
  let lang: Language | null;
  $: {
    lang = getLang(language);
  }
!@/script>
`}
/>
