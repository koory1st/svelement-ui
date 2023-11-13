<script>
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';
  import { SvelCol, SvelInput, SvelRow } from '@svelement-ui/all';
  import { Calendar, Search, SvelIcon } from '@svelement-ui/icon';

  let langFn = getContext('langFn');

  let input1 = '';
  let inputF = '';

  let textarea = '';
  let textarea1 = '';
  let textarea2 = '';
</script>

<h1>{$langFn('cinput01010')}</h1>
<p>{$langFn('cinput01020')}</p>

<h2>{$langFn('cinput02010')}</h2>
<Example
  code={`
<script>
  let input1 = '';
@@@/script>
<SvelInput bind:value={input1} placeholder="Please input" />
`}
>
  <SvelInput bind:value={input1} placeholder="Please input" />
</Example>

<h2>{$langFn('cinput03010')}</h2>
<p>{$langFn('cinput03020')}</p>

<Example
  code={`
<script>
  let input1 = '';
@@@/script>
<SvelInput bind:value={input1} placeholder="Please input" disabled />
`}
>
  <SvelInput bind:value={input1} disabled placeholder="Please input" />
</Example>

<h2>{$langFn('cinput04010')}</h2>
<p>{$langFn('cinput04020')}</p>

<Example
  code={`
<script>
  let input1 = '';
@@@/script>
<SvelInput bind:value={input1} placeholder="Please input" clearable />
`}
>
  <SvelInput bind:value={input1} clearable placeholder="Please input" />
</Example>

<h2>{$langFn('cinput05010')}</h2>
<p>{$langFn('cinput05020')}</p>
<Example
  code={`
<script>
  let inputF = '';
@@@/script>
<SvelInput
  bind:value={inputF}
  placeholder="Please input"
    formatter={(value) => \`$ @@@dolor{value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}
    parser={(value) => value.replace(/\\$\\s?|(,*)/g, '')}
/>
`}
>
  <SvelInput
    bind:value={inputF}
    formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
    placeholder="Please input"
  />
</Example>

<h2>{$langFn('cinput06010')}</h2>
<p>{$langFn('cinput06020')}</p>

<Example
  code={`
<script>
  let input1 = '';
@@@/script>
<SvelInput bind:value={input1} type="password" placeholder="Please input password" showPassword />
`}
>
  <SvelInput bind:value={input1} placeholder="Please input password" showPassword type="password" />
</Example>

<h2>{$langFn('cinput07010')}</h2>
<p>{$langFn('cinput07020')}</p>
<p>{$langFn('cinput07030')}</p>

<Example
  code={`
<div class="demo-input-suffix">
  <SvelRow gutter={20}>
    <SvelCol span={6}>
      <span class="text-gray-600 inline-flex items-center">Using slots</span>
    </SvelCol>
    <SvelCol span={8}>
      <SvelInput bind:value={input1} placeholder="Pick a date">
        <SvelIcon slot="suffix">
          <Calendar />
        </SvelIcon>
      </SvelInput>
    </SvelCol>
    <SvelCol span={8}>
      <SvelInput bind:value={input1} placeholder="Type something">
        <SvelIcon slot="prefix">
          <Search />
        </SvelIcon>
      </SvelInput>
    </SvelCol>
  </SvelRow>
</div>
`}
>
  <div class="demo-input-suffix">
    <SvelRow gutter={20}>
      <SvelCol span={6}>
        <span class="text-gray-600 inline-flex items-center">Using slots</span>
      </SvelCol>
      <SvelCol span={8}>
        <SvelInput bind:value={input1} placeholder="Pick a date">
          <SvelIcon slot="suffix">
            <Calendar />
          </SvelIcon>
        </SvelInput>
      </SvelCol>
      <SvelCol span={8}>
        <SvelInput bind:value={input1} placeholder="Type something">
          <SvelIcon slot="prefix">
            <Search />
          </SvelIcon>
        </SvelInput>
      </SvelCol>
    </SvelRow>
  </div>
</Example>

<h2>{$langFn('cinput08010')}</h2>
<p>{$langFn('cinput08020')}</p>
<p>{$langFn('cinput08030')}</p>

<Example
  code={`
<script>
  let textarea = '';
@@@/script>
<SvelInput bind:value={textarea} placeholder="Please input" rows={2} type="textarea" />
`}
>
  <SvelInput bind:value={textarea} placeholder="Please input" rows={2} type="textarea" />
</Example>

<h2>{$langFn('cinput09010')}</h2>
<p>{$langFn('cinput09020')}</p>

<Example
  code={`
<script>
  let textarea = '';
@@@/script>
`}
>
  <SvelInput autosize bind:value={textarea1} placeholder="Please input" type="textarea" />
  <div style="margin: 20px 0" />
  <SvelInput
    autosize={{ minRows: 2, maxRows: 4 }}
    bind:value={textarea2}
    placeholder="Please input"
    type="textarea"
  />
</Example>
