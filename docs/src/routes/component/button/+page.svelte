<script lang="ts">
  import Example from '$lib/example.svelte';
  import type GetText from '$lib/i18n';
  import { getContext } from 'svelte';
  import { SvelButton, SvelButtonGroup, SvelRow } from '@svelement-ui/all';

  import {
    SvelIcon,
    Search,
    Edit,
    Check,
    Message,
    Star,
    Delete,
    Share,
    ArrowLeft,
    ArrowRight,
  } from '@svelement-ui/icon';

  const buttons = [
    { type: '', text: 'plain' },
    { type: 'primary', text: 'primary' },
    { type: 'success', text: 'success' },
    { type: 'info', text: 'info' },
    { type: 'warning', text: 'warning' },
    { type: 'danger', text: 'danger' },
  ] as const;

  let lang: GetText = getContext('lang');
</script>

<h1>{lang('cbut01010')}</h1>
<p>{lang('cbut01020')}</p>

<h2>{lang('cbut01030')}</h2>
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

<h2>{lang('cbut02010')}</h2>
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

<h2>{lang('cbut03010')}</h2>
<p>{lang('cbut03020')}</p>
<Example
  code={`
<script lang="ts">
  import SvelButton from '@svelement-ui/button';
  import SvelRow from '@svelement-ui/row';
  import Example from '$lib/example.svelte';

  import { SvelIcon, Search, Edit, Check, Message, Star, Delete, Share } from '@svelement-ui/icon';

  const buttons = [
  { type: '', text: 'plain' },
  { type: 'primary', text: 'primary' },
  { type: 'success', text: 'success' },
  { type: 'info', text: 'info' },
  { type: 'warning', text: 'warning' },
  { type: 'danger', text: 'danger' },
] as const
@@@/>

<p>Basic text button</p>
<div class="flex justify-space-between mb-4 flex-wrap gap-4">
  {#each buttons as button}
    <SvelButton type={button.type} text>{button.text}</SvelButton>
  {/each}
</div>

<p>Background color always on</p>
<div class="flex justify-space-between mb-4 flex-wrap gap-4">
  {#each buttons as button}
    <SvelButton type={button.type} text bg>{button.text}</SvelButton>
  {/each}
</div>

<p>Disabled text button</p>
<div class="flex justify-space-between mb-4 flex-wrap gap-4">
  {#each buttons as button}
    <SvelButton type={button.type} text disabled>{button.text}</SvelButton>
  {/each}
</div>
`}
>
  <p>Basic text button</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    {#each buttons as button}
      <SvelButton type={button.type} text>{button.text}</SvelButton>
    {/each}
  </div>

  <p>Background color always on</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    {#each buttons as button}
      <SvelButton type={button.type} text bg>{button.text}</SvelButton>
    {/each}
  </div>

  <p>Disabled text button</p>
  <div class="flex justify-space-between mb-4 flex-wrap gap-4">
    {#each buttons as button}
      <SvelButton type={button.type} text disabled>{button.text}</SvelButton>
    {/each}
  </div>
</Example>

<h2>{lang('cbut04010')}</h2>
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

<h2>{lang('cbut05010')}</h2>
<p>以按钮组的方式出现，常用于多项类似操作。</p>
<p>
  使用 <span class="code">&lt;svel-button-group&gt;</span>
  对多个按钮分组。
</p>

<Example
  code={`
<SvelButtonGroup type="primary">
  <SvelButton>
    <SvelIcon slot="icon">
      <ArrowLeft />
    </SvelIcon>Previous Page
  </SvelButton>
  <SvelButton>
    Next Page
    <SvelIcon class="svel-icon--right">
      <ArrowRight />
    </SvelIcon>
  </SvelButton>
</SvelButtonGroup>

<SvelButtonGroup type="success" size="small" class="ml-4">
  <SvelButton>
    <SvelIcon slot="icon">
      <Edit />
    </SvelIcon>
  </SvelButton>
  <SvelButton >
    <SvelIcon slot="icon">
      <Share />
    </SvelIcon>
  </SvelButton>
  <SvelButton >
    <SvelIcon slot="icon">
      <Delete />
    </SvelIcon>
  </SvelButton>
</SvelButtonGroup>
`}
>
  <SvelButtonGroup type="primary">
    <SvelButton>
      <SvelIcon slot="icon">
        <ArrowLeft />
      </SvelIcon>Previous Page
    </SvelButton>
    <SvelButton>
      Next Page
      <SvelIcon class="svel-icon--right">
        <ArrowRight />
      </SvelIcon>
    </SvelButton>
  </SvelButtonGroup>

  <SvelButtonGroup type="success" size="small" class="ml-4">
    <SvelButton>
      <SvelIcon slot="icon">
        <Edit />
      </SvelIcon>
    </SvelButton>
    <SvelButton>
      <SvelIcon slot="icon">
        <Share />
      </SvelIcon>
    </SvelButton>
    <SvelButton>
      <SvelIcon slot="icon">
        <Delete />
      </SvelIcon>
    </SvelButton>
  </SvelButtonGroup>
</Example>

<h2>{lang('cbut06010')}</h2>
<p>点击按钮来加载数据，并向用户反馈加载状态。</p>
<p>
  通过设置 <span class="code">loading</span>
  属性为
  <span class="code">true</span>
  来显示加载中状态。
</p>
<p>
  也可以通过 <span class="code">loadingIcon</span>
  slot 设置其他 icon
</p>

<Example
  code={`
<SvelButton type="primary" loading>Loading</SvelButton>
<SvelButton type="primary">
  <SvelIcon slot="loadingIcon" class="is-loading">
    <Edit />
  </SvelIcon>
</SvelButton>`}
>
  <SvelButton type="primary" loading>Loading</SvelButton>
  <SvelButton type="primary">
    <SvelIcon slot="loadingIcon" class="is-loading">
      <Edit />
    </SvelIcon>
    Loading
  </SvelButton>
</Example>

<h2>{lang('cbut07010')}</h2>
<p>{lang('cbut07020')}</p>
<p>{@html lang('cbut07030')}</p>

<Example
  code={`
<SvelRow>
  <SvelButton size="large">Large</SvelButton>
  <SvelButton>Default</SvelButton>
  <SvelButton size="small">Small</SvelButton>
  <SvelButton size="large"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
  <SvelButton><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
  <SvelButton size="small"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
</SvelRow>
<SvelRow class="my-4">
  <SvelButton round size="large">Large</SvelButton>
  <SvelButton round>Default</SvelButton>
  <SvelButton round size="small">Small</SvelButton>
  <SvelButton round size="large"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
  <SvelButton round><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
  <SvelButton round size="small"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
</SvelRow>
<SvelRow>
  <SvelButton circle size="large"><SvelIcon slot="icon"><Search /></SvelIcon></SvelButton>
  <SvelButton circle><SvelIcon slot="icon"><Search /></SvelIcon></SvelButton>
  <SvelButton circle size="small"><SvelIcon slot="icon"><Search /></SvelIcon></SvelButton>
</SvelRow>`}
>
  <SvelRow>
    <SvelButton size="large">Large</SvelButton>
    <SvelButton>Default</SvelButton>
    <SvelButton size="small">Small</SvelButton>
    <SvelButton size="large"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
    <SvelButton><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
    <SvelButton size="small"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
  </SvelRow>
  <SvelRow class="my-4">
    <SvelButton round size="large">Large</SvelButton>
    <SvelButton round>Default</SvelButton>
    <SvelButton round size="small">Small</SvelButton>
    <SvelButton round size="large"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
    <SvelButton round><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
    <SvelButton round size="small"><SvelIcon slot="icon"><Search /></SvelIcon>Search</SvelButton>
  </SvelRow>
  <SvelRow>
    <SvelButton circle size="large"><SvelIcon slot="icon"><Search /></SvelIcon></SvelButton>
    <SvelButton circle><SvelIcon slot="icon"><Search /></SvelIcon></SvelButton>
    <SvelButton circle size="small"><SvelIcon slot="icon"><Search /></SvelIcon></SvelButton>
  </SvelRow>
</Example>

<h2>{lang('cbut08010')}</h2>
<p>{lang('cbut08020')}</p>
<p>{lang('cbut08030')}</p>

<Example
  code={`
<SvelButton color="#626aef" dark>Default</SvelButton>
<SvelButton color="#626aef" dark plain>Default</SvelButton>
<SvelButton color="#626aef" dark disabled>Default</SvelButton>
<SvelButton color="#626aef" dark plain disabled>Default</SvelButton>
`}
>
  <SvelButton color="#626aef" dark>Default</SvelButton>
  <SvelButton color="#626aef" dark plain>Default</SvelButton>
  <SvelButton color="#626aef" dark disabled>Default</SvelButton>
  <SvelButton color="#626aef" dark plain disabled>Default</SvelButton>
</Example>
