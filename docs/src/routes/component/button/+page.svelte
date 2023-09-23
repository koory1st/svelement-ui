<script lang="ts">
  import SvelButton from '@svelement-ui/button';
  import SvelRow from '@svelement-ui/row';
  import Example from '$lib/example.svelte';

  import { SvelIcon, Search, Edit, Check, Message, Star, Delete } from '@svelement-ui/icon';
</script>

<h1>Button 按钮</h1>
<p>常用的操作按钮。</p>

<h2>基础用法</h2>
<p>
  使用 <span class="code">type</span>
  、
  <span class="code">plain</span>
  、
  <span class="code">round</span>
  和
  <span class="code">circle</span>
  来定义按钮的样式。
</p>

<Example
  code={`
<script lang="ts">
  import SvelButton from '@svelement-ui/button';
  import { SvelIcon, Search, Edit, Check, Message, Star, Delete } from '@svelement-ui/icon';
@@@/>
<SvelRow class="mb-4">
  <SvelButton>Default</SvelButton>
  <SvelButton type="primary">Primary</SvelButton>
  <SvelButton type="success">Success</SvelButton>
  <SvelButton type="info">Info</SvelButton>
  <SvelButton type="warning">Warning</SvelButton>
  <SvelButton type="danger">Danger</SvelButton>
</SvelRow>
<SvelRow class="mb-4">
  <SvelButton plain>Default</SvelButton>
  <SvelButton plain type="primary">Primary</SvelButton>
  <SvelButton plain type="success">Success</SvelButton>
  <SvelButton plain type="info">Info</SvelButton>
  <SvelButton plain type="warning">Warning</SvelButton>
  <SvelButton plain type="danger">Danger</SvelButton>
</SvelRow>

<SvelRow class="mb-4">
  <SvelButton round>Default</SvelButton>
  <SvelButton round type="primary">Primary</SvelButton>
  <SvelButton round type="success">Success</SvelButton>
  <SvelButton round type="info">Info</SvelButton>
  <SvelButton round type="warning">Warning</SvelButton>
  <SvelButton round type="danger">Danger</SvelButton>
</SvelRow>

<SvelRow class="mb-4">
  <SvelButton circle><SvelIcon slot="icon"><Search /></SvelIcon></SvelButton>
  <SvelButton circle type="primary"><SvelIcon slot="icon"><Edit /></SvelIcon></SvelButton>
  <SvelButton circle type="success"><SvelIcon slot="icon"><Check /></SvelIcon></SvelButton>
  <SvelButton circle type="info"><SvelIcon slot="icon"><Message /></SvelIcon></SvelButton>
  <SvelButton circle type="warning"><SvelIcon slot="icon"><Star /></SvelIcon></SvelButton>
  <SvelButton circle type="danger"><SvelIcon slot="icon"><Delete /></SvelIcon></SvelButton>
</SvelRow>`}
>
  <SvelRow class="mb-4">
    <SvelButton>Default</SvelButton>
    <SvelButton type="primary">Primary</SvelButton>
    <SvelButton type="success">Success</SvelButton>
    <SvelButton type="info">Info</SvelButton>
    <SvelButton type="warning">Warning</SvelButton>
    <SvelButton type="danger">Danger</SvelButton>
  </SvelRow>
  <SvelRow class="mb-4">
    <SvelButton plain>Default</SvelButton>
    <SvelButton plain type="primary">Primary</SvelButton>
    <SvelButton plain type="success">Success</SvelButton>
    <SvelButton plain type="info">Info</SvelButton>
    <SvelButton plain type="warning">Warning</SvelButton>
    <SvelButton plain type="danger">Danger</SvelButton>
  </SvelRow>

  <SvelRow class="mb-4">
    <SvelButton round>Default</SvelButton>
    <SvelButton round type="primary">Primary</SvelButton>
    <SvelButton round type="success">Success</SvelButton>
    <SvelButton round type="info">Info</SvelButton>
    <SvelButton round type="warning">Warning</SvelButton>
    <SvelButton round type="danger">Danger</SvelButton>
  </SvelRow>

  <SvelRow class="mb-4">
    <SvelButton circle><SvelIcon slot="icon"><Search /></SvelIcon></SvelButton>
    <SvelButton circle type="primary"><SvelIcon slot="icon"><Edit /></SvelIcon></SvelButton>
    <SvelButton circle type="success"><SvelIcon slot="icon"><Check /></SvelIcon></SvelButton>
    <SvelButton circle type="info"><SvelIcon slot="icon"><Message /></SvelIcon></SvelButton>
    <SvelButton circle type="warning"><SvelIcon slot="icon"><Star /></SvelIcon></SvelButton>
    <SvelButton circle type="danger"><SvelIcon slot="icon"><Delete /></SvelIcon></SvelButton>
  </SvelRow>
</Example>
