<script lang="ts">
  import { Highlight, HighlightSvelte } from 'svelte-highlight';
  import bash from 'svelte-highlight/languages/bash';
  import 'svelte-highlight/styles/github.css';

  import { SvelIcon, Edit, Share, Delete, Loading, Search } from '@svelement-ui/icon';
  import '@svelement-ui/icon/dist/style.css';

  import { SvelRow, SvelCol, SvelButton } from '@svelement-ui/all';

  let codePnpm = `pnpm install -D @svelement-ui/icon`;

  let baseSize = 50;
  let baseColor = 'green';
  let codeBase = `
import { SvelIcon, Edit } from '@svelement-ui/icon';
import '@svelement-ui/icon/dist/style.css';
let baseSize = 50;
let baseColor = 'green';

<div>
  <!-- 使用 el-icon 为 SVG 图标提供属性 -->
  <SvelIcon size={baseSize} color={baseColor}>
    <Edit />
  </SvelIcon>
  <!-- 或者独立使用它，不从父级获取属性 -->
  <Edit />
</div>

  `;

  let codeWithIcon = `
<SvelIcon size={20}>
  <Edit />
</SvelIcon>
<SvelIcon color="#409EFC" class="no-inherit">
  <Share />
</SvelIcon>
<SvelIcon class="is-loading">
  <Loading />
</SvelIcon>
<SvelButton type="primary">
  <SvelIcon>
    <Search />
  </SvelIcon>
</SvelButton>
  `;
</script>

<h1>Icon 图标</h1>
<h2>使用图标</h2>
<Highlight language={bash} code={codePnpm} />

<h2>基础用法</h2>
<HighlightSvelte code={codeBase} />
<div>
  <SvelRow>
    <SvelIcon size={baseSize} color={baseColor}>
      <Edit />
    </SvelIcon>
  </SvelRow>

  <SvelRow>
    <Edit style="width:50px" />
  </SvelRow>
</div>

<h2>结合 SvelIcon 使用</h2>
<p>SvelIcon 为 raw SVG 图标提供额外的属性, 提供的详细属性请继续阅读。</p>
<HighlightSvelte code={codeWithIcon} />
<p>
  通过添加额外的类名 is-loading，你的图标就可以在 2 秒内旋转 360度，当然你也可以自己改写想要的动画。
</p>

<SvelRow>
  <SvelCol span={4}>
    <SvelIcon size={20}>
      <Edit />
    </SvelIcon>
  </SvelCol>
  <SvelCol span={4}>
    <SvelIcon color="#409EFC" class="no-inherit">
      <Share />
    </SvelIcon>
  </SvelCol>
  <SvelCol span={4}>
    <SvelIcon>
      <Delete />
    </SvelIcon>
  </SvelCol>
  <SvelCol span={4}>
    <SvelIcon class="is-loading">
      <Loading />
    </SvelIcon>
  </SvelCol>
  <SvelCol span={4}>
    <SvelButton type="primary">
      <SvelIcon>
        <Search />
      </SvelIcon>
    </SvelButton>
  </SvelCol>
</SvelRow>

<h2>直接使用 SVG 图标</h2>
