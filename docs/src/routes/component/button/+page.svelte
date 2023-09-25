<script lang="ts">
  import SvelButton from '@svelement-ui/button';
  import SvelRow from '@svelement-ui/row';
  import Example from '$lib/example.svelte';

  import { SvelIcon, Search, Edit, Check, Message, Star, Delete, Share } from '@svelement-ui/icon';
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

<h2>禁用状态</h2>
<p>
  你可以使用 <span class="code">disabled</span>
  属性来定义按钮是否被禁用。
</p>
<p>
  使用 <span class="code">disabled</span>
  属性来控制按钮是否为禁用状态。 该属性接受一个
  <span class="code">Boolean</span>
  类型的值。
</p>

<Example
  code={`
<SvelRow class="mb-4">
  <SvelButton disabled>Default</SvelButton>
  <SvelButton type="primary" disabled>Primary</SvelButton>
  <SvelButton type="success" disabled>Success</SvelButton>
  <SvelButton type="info" disabled>Info</SvelButton>
  <SvelButton type="warning" disabled>Warning</SvelButton>
  <SvelButton type="danger" disabled>Danger</SvelButton>
</SvelRow>
<SvelRow class="mb-4">
  <SvelButton plain disabled>Default</SvelButton>
  <SvelButton plain type="primary" disabled>Primary</SvelButton>
  <SvelButton plain type="success" disabled>Success</SvelButton>
  <SvelButton plain type="info" disabled>Info</SvelButton>
  <SvelButton plain type="warning" disabled>Warning</SvelButton>
  <SvelButton plain type="danger" disabled>Danger</SvelButton>
</SvelRow>`}
>
  <SvelRow class="mb-4">
    <SvelButton disabled>Default</SvelButton>
    <SvelButton type="primary" disabled>Primary</SvelButton>
    <SvelButton type="success" disabled>Success</SvelButton>
    <SvelButton type="info" disabled>Info</SvelButton>
    <SvelButton type="warning" disabled>Warning</SvelButton>
    <SvelButton type="danger" disabled>Danger</SvelButton>
  </SvelRow>
  <SvelRow class="mb-4">
    <SvelButton plain disabled>Default</SvelButton>
    <SvelButton plain type="primary" disabled>Primary</SvelButton>
    <SvelButton plain type="success" disabled>Success</SvelButton>
    <SvelButton plain type="info" disabled>Info</SvelButton>
    <SvelButton plain type="warning" disabled>Warning</SvelButton>
    <SvelButton plain type="danger" disabled>Danger</SvelButton>
  </SvelRow>
</Example>

<h2>文字按钮</h2>

<h2>图标按钮</h2>
<p>使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。</p>

<Example
  code={`
<script lang="ts">
  import SvelButton from '@svelement-ui/button';
  import { SvelIcon, Search, Edit, Delete, Share } from '@svelement-ui/icon';
@@@/>
<div class="flex">
  <SvelButton type="primary"><SvelIcon><Edit /></SvelIcon></SvelButton>
  <SvelButton type="primary"><SvelIcon><Share /></SvelIcon></SvelButton>
  <SvelButton type="primary"><SvelIcon><Delete /></SvelIcon></SvelButton>
  <SvelButton type="primary"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
  <SvelButton type="primary">
    Upload<SvelIcon class="svel-icon--right"><Search /></SvelIcon>
  </SvelButton>
</div>`}
>
  <div class="flex">
    <SvelButton type="primary"><SvelIcon><Edit /></SvelIcon></SvelButton>
    <SvelButton type="primary"><SvelIcon><Share /></SvelIcon></SvelButton>
    <SvelButton type="primary"><SvelIcon><Delete /></SvelIcon></SvelButton>
    <SvelButton type="primary"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
    <SvelButton type="primary">
      Upload<SvelIcon class="svel-icon--right"><Search /></SvelIcon>
    </SvelButton>
  </div>
</Example>
