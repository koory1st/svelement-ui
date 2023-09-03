<script lang="ts">
  import SvelButton from '@svelement-ui/button';
  import SvelRow from '@svelement-ui/row';
</script>

<h1>Button 按钮</h1>
<p>常用的操作按钮。</p>

<h2>基础用法</h2>
<p>使用 type、plain、round 和 circle 来定义按钮的样式。</p>

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
  <SvelButton circle>Default</SvelButton>
  <SvelButton circle type="primary">Primary</SvelButton>
  <SvelButton circle type="success">Success</SvelButton>
  <SvelButton circle type="info">Info</SvelButton>
  <SvelButton circle type="warning">Warning</SvelButton>
  <SvelButton circle type="danger">Danger</SvelButton>
</SvelRow>
