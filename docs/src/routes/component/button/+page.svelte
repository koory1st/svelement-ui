<script>
  import Example from '$lib/example.svelte';
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
  ];

  let langFn = getContext('langFn');
</script>

<h1>{$langFn('cbut01010')}</h1>
<p>{$langFn('cbut01020')}</p>

<h2>{$langFn('cbut01030')}</h2>
<p>{$langFn('cbut01040')}</p>

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

<h2>{$langFn('cbut02010')}</h2>
<p>{$langFn('cbut02020')}</p>
<p>{$langFn('cbut02030')}</p>

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

<h2>{$langFn('cbut03010')}</h2>
<p>{$langFn('cbut03020')}</p>
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

<h2>{$langFn('cbut04010')}</h2>
<p>{$langFn('cbut04020')}</p>

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

<h2>{$langFn('cbut05010')}</h2>
<p>{$langFn('cbut05020')}</p>

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

<h2>{$langFn('cbut06010')}</h2>
<p>{$langFn('cbut06020')}</p>
<p>{$langFn('cbut06030')}</p>

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

<h2>{$langFn('cbut07010')}</h2>
<p>{$langFn('cbut07020')}</p>
<p>{$langFn('cbut07030')}</p>

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

<h2>{$langFn('cbut08010')}</h2>
<p>{$langFn('cbut08020')}</p>
<p>{$langFn('cbut08030')}</p>

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
