<script lang="ts">
  import { HighlightAuto, HighlightSvelte } from 'svelte-highlight';
  import github from 'svelte-highlight/styles/github';

  import SvelIcon from '../icon.svelte';
  import Edit from '../edit.svelte';

  const codePnpmInstall = `$ pnpm install @svelement-ui/icon`;

  const codeBasic = `
<script lang="ts">
  import SvelIcon from '../icon.svelte';
  import Edit from '../edit.svelte';

  let size = 20;
  let color = 'red';
<\/script>

<!-- 使用 SvelIcon 为 SVG 图标提供属性 -->
<SvelIcon {size} {color}>
  <Edit \/>
<\/SvelIcon>
<!-- 或者独立使用它，不从父级获取属性 -->
<Edit \/>
  `;

  let size = 20;
  let color = 'red';
</script>

<svelte:head>
  {@html github}
</svelte:head>

<h1>安装</h1>
<h2>使用包管理器</h2>
<HighlightAuto code={codePnpmInstall} />

<h2>基础用法</h2>

<HighlightAuto code={codeBasic} />
<SvelIcon {size} {color}>
  <Edit />
</SvelIcon>
<Edit />
