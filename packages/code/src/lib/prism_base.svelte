<script lang="ts">
  import Prism from 'prismjs';
  export let language: string;
  export let code: string;
</script>

<pre class={`language-${language}`}>
<code>{code}</code>
</pre>
