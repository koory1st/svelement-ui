<script lang="ts">
  import { SvelDivider } from '@svelement-ui/all';
  import Example from '$lib/example.svelte';
</script>

<h1>Divider 分割线</h1>
<p>区隔内容的分割线。</p>

<h2>基础用法</h2>
<p>对不同段落的文本进行分割。</p>

<Example
  code={`
<script lang="ts">
  import { SvelDivider } from '@svelement-ui/all';
!@/script>
<div>
  <span>
    I sit at my window this morning where the world like a passer-by stops for a moment, nods to
    me and goes.
  </span>
  <SvelDivider />
  <span>
    There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.
  </span>
</div>`}
>
  <div>
    <span>
      I sit at my window this morning where the world like a passer-by stops for a moment, nods to
      me and goes.
    </span>
    <SvelDivider />
    <span>
      There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.
    </span>
  </div>
</Example>

<div>
  <span>What you are you do not see, what you see is your shadow.</span>
  <SvelDivider contentPosition="left">Rabindranath Tagore</SvelDivider>
  <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
  <SvelDivider>abc</SvelDivider>
  <span>I cannot choose the best. The best chooses me.</span>
  <SvelDivider contentPosition="right">abc</SvelDivider>
</div>
<div>
  <span>What you are you do not see, what you see is your shadow.</span>
  <SvelDivider borderStyle="dashed" />
  <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
</div>

<div>
  <span>Rain</span>
  <SvelDivider direction="vertical" />
  <span>Home</span>
  <SvelDivider direction="vertical" borderStyle="dashed" />
  <span>Grass</span>
</div>
