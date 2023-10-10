<script>
  import { SvelDivider } from '@svelement-ui/all';
  import { SvelIcon, StarFilled } from '@svelement-ui/icon';
  import Example from '$lib/example.svelte';
  import { getContext } from 'svelte';
  let lang = getContext('lang');
</script>

<h1>{lang('odiv01010')}</h1>
<p>{lang('odiv01020')}</p>

<h2>{lang('odiv01030')}</h2>
<p>{lang('odiv01040')}</p>

<Example
  code={`
<script lang="ts">
  import { SvelDivider } from '@svelement-ui/all';
@@@/>
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

<h2>{lang('odiv01050')}</h2>
<p>{lang('odiv01060')}</p>

<Example
  code={`
<script lang="ts">
  import { SvelDivider } from '@svelement-ui/all';
  import { SvelIcon, StarFilled } from '@svelement-ui/icon';
!@/script>
<div>
  <span>What you are you do not see, what you see is your shadow.</span>
  <SvelDivider contentPosition="left">Rabindranath Tagore</SvelDivider>
  <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
  <SvelDivider>
    <SvelIcon><StarFilled /></SvelIcon>
  </SvelDivider>
  <span>I cannot choose the best. The best chooses me.</span>
  <SvelDivider contentPosition="right">Rabindranath Tagore</SvelDivider>
</div>`}
>
  <div>
    <span>What you are you do not see, what you see is your shadow.</span>
    <SvelDivider contentPosition="left">Rabindranath Tagore</SvelDivider>
    <span>My wishes are fools, they shout across thy song, my Master. Let me but listen.</span>
    <SvelDivider>
      <SvelIcon><StarFilled /></SvelIcon>
    </SvelDivider>
    <span>I cannot choose the best. The best chooses me.</span>
    <SvelDivider contentPosition="right">Rabindranath Tagore</SvelDivider>
  </div>
</Example>

<h2>虚线</h2>
<p>您可以设置分隔符的样式。</p>
<Example
  code={`
<script lang="ts">
  import { SvelDivider } from '@svelement-ui/all';
!@/script>
<div>
  <div>
    <span>What language is thine, O sea?</span>
    <SvelDivider borderStyle="dashed" />
    <span>The language of eternal question.</span>
  </div>
  <SvelDivider borderStyle="dotted" />
  <span>What language is thy answer, O sky?</span>
  <SvelDivider borderStyle="double" />
  <span>The language of eternal silence.</span>
</div>`}
>
  <div>
    <div>
      <span>What language is thine, O sea?</span>
      <SvelDivider borderStyle="dashed" />
      <span>The language of eternal question.</span>
    </div>
    <SvelDivider borderStyle="dotted" />
    <span>What language is thy answer, O sky?</span>
    <SvelDivider borderStyle="double" />
    <span>The language of eternal silence.</span>
  </div>
</Example>

<h2>垂直分隔线</h2>
<Example
  code={`
<script lang="ts">
  import { SvelDivider } from '@svelement-ui/all';
!@/script>
<div>
  <span>Rain</span>
  <SvelDivider direction="vertical" />
  <span>Home</span>
  <SvelDivider direction="vertical" borderStyle="dashed" />
  <span>Grass</span>
</div>`}
>
  <div>
    <span>Rain</span>
    <SvelDivider direction="vertical" />
    <span>Home</span>
    <SvelDivider direction="vertical" borderStyle="dashed" />
    <span>Grass</span>
  </div>
</Example>

<h2>API</h2>
<h3>Attributes</h3>
<div class="vp-table">
  <table>
    <thead>
      <tr>
        <th>属性名</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>direction</td>
        <td>设置分割线方向</td>
        <td>
          <span class="inline-flex items-center">
            <code class="api-typing mr-1">enum</code>
            <button
              aria-disabled="false"
              type="button"
              class="el-button is-text p-2 text-4 el-tooltip__trigger el-tooltip__trigger"
              aria-label="Type details"
            >
              <i class="el-icon">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
                  />
                </svg>
              </i>
              <!--v-if-->
            </button>
          </span>
        </td>
        <td>horizontal</td>
      </tr>
      <tr>
        <td>borderStyle</td>
        <td>设置分隔符样式</td>
        <td>
          <span class="inline-flex items-center">
            <code class="api-typing mr-1">enum</code>
            <button
              aria-disabled="false"
              type="button"
              class="el-button is-text p-2 text-4 el-tooltip__trigger el-tooltip__trigger"
              aria-label="Type details"
            >
              <i class="el-icon">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
                  />
                </svg>
              </i>
              <!--v-if-->
            </button>
          </span>
          <a
            href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style"
            class="vp-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            css/border-style
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              class="link-icon"
            >
              <path
                fill="currentColor"
                d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794l-1.414-1.414L17.585 5H13V3h8z"
              />
            </svg>
          </a>
        </td>
        <td>solid</td>
      </tr>
      <tr>
        <td>contentPosition</td>
        <td>自定义分隔线内容的位置</td>
        <td>
          <span class="inline-flex items-center">
            <code class="api-typing mr-1">enum</code>
            <button
              aria-disabled="false"
              type="button"
              class="el-button is-text p-2 text-4 el-tooltip__trigger el-tooltip__trigger"
              aria-label="Type details"
            >
              <i class="el-icon">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="currentColor"
                    d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
                  />
                </svg>
              </i>
              <!--v-if-->
            </button>
          </span>
        </td>
        <td>center</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="vp-table">
  <table>
    <thead>
      <tr>
        <th>插槽名</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>default</td>
        <td>设置分割线文案的位置</td>
      </tr>
    </tbody>
  </table>
</div>
