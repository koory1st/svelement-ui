<script lang="ts">
  import { SvelCode } from '@svelement-ui/all';

  import {
    SvelIcon,
    Edit,
    Share,
    Delete,
    Loading,
    Search,
    Plus,
    Minus,
    CirclePlus,
    Female,
    Male,
    Aim,
    House,
    FullScreen,
    Link,
    Service,
    Pointer,
    Star,
    Notification,
    Connection,
    ChatDotRound,
    Setting,
    Clock,
    Position,
    Discount,
    Odometer,
    ChatSquare,
    ChatRound,
    ChatLineRound,
    ChatLineSquare,
    ChatDotSquare,
    View,
    Hide,
    Unlock,
    Lock,
    RefreshRight,
    RefreshLeft,
    Refresh,
    Bell,
    MuteNotification,
    User,
    Check,
    CircleCheck,
    Warning,
    CircleClose,
    Close,
    PieChart,
    More,
    Compass,
    Filter,
    Switch,
    Select,
    SemiSelect,
  } from '@svelement-ui/icon';
  import '@svelement-ui/icon/dist/style.css';

  import { SvelRow, SvelCol, SvelButton } from '@svelement-ui/all';

  let baseSize = 50;
  let baseColor = 'green';

  import IconName from './icon-item.svelte';
  function copy2Clip() {
    console.log("🚀 ~ file: +page.svelte:98 ~ copy2Clip ~ 'aaaa':", 'aaaa');
  }
</script>

<h1>Icon 图标</h1>
<h2>使用图标</h2>
<SvelCode language="bash" code="pnpm install -D @svelement-ui/icon" />

<h2>基础用法</h2>
<SvelCode
  language="svelte"
  code={`<script lang="ts">
import { SvelIcon, Edit } from '@svelement-ui/icon';
import '@svelement-ui/icon/dist/style.css';
let baseSize = 50;
let baseColor = 'green';
!@/script>
<div>
  <!-- 使用 el-icon 为 SVG 图标提供属性 -->
  <SvelIcon size={baseSize} color={baseColor}>
    <Edit />
  </SvelIcon>
  <!-- 或者独立使用它，不从父级获取属性 -->
  <Edit />
</div>`}
/>
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
<SvelCode
  language="svelte"
  code={`<SvelIcon size={20}>
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
</SvelButton>`}
/>
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

<SvelCode
  language="svelte"
  code={`<div style="font-size: 20px">
  <!-- 由于SVG图标默认不携带任何属性 -->
  <!-- 你需要直接提供它们 -->
  <Edit style="display:inline; width: 1em; height: 1em; margin-right: 8px" />
  <Share style="display:inline; width: 1em; height: 1em; margin-right: 8px" />
  <Delete style="display:inline; width: 1em; height: 1em; margin-right: 8px" />
  <Search style="display:inline; width: 1em; height: 1em; margin-right: 8px" />
</div>`}
/>
<div style="font-size: 20px">
  <!-- 由于SVG图标默认不携带任何属性 -->
  <!-- 你需要直接提供它们 -->
  <Edit style="display:inline; width: 1em; height: 1em; margin-right: 8px" />
  <Share style="display:inline; width: 1em; height: 1em; margin-right: 8px" />
  <Delete style="display:inline; width: 1em; height: 1em; margin-right: 8px" />
  <Search style="display:inline; width: 1em; height: 1em; margin-right: 8px" />
</div>

<h2>图标集合</h2>
<h3>System</h3>
<ul class="demo-icon-list">
  <IconName name="Plus"><Plus /></IconName>
  <IconName name="Minus"><Minus /></IconName>
  <IconName name="CirclePlus"><CirclePlus /></IconName>
  <IconName name="Search"><Search /></IconName>
  <IconName name="Female"><Female /></IconName>
  <IconName name="Male"><Male /></IconName>
  <IconName name="Aim"><Aim /></IconName>
  <IconName name="House"><House /></IconName>
  <IconName name="FullScreen"><FullScreen /></IconName>
  <IconName name="Loading"><Loading /></IconName>
  <IconName name="Link"><Link /></IconName>
  <IconName name="Service"><Service /></IconName>
  <IconName name="Pointer"><Pointer /></IconName>
  <IconName name="Star"><Star /></IconName>
  <IconName name="Notification"><Notification /></IconName>
  <IconName name="Connection"><Connection /></IconName>
  <IconName name="ChatDotRound"><ChatDotRound /></IconName>
  <IconName name="Setting"><Setting /></IconName>
  <IconName name="Clock"><Clock /></IconName>
  <IconName name="Position"><Position /></IconName>
  <IconName name="Discount"><Discount /></IconName>
  <IconName name="Odometer"><Odometer /></IconName>
  <IconName name="ChatSquare"><ChatSquare /></IconName>
  <IconName name="ChatRound"><ChatRound /></IconName>
  <IconName name="ChatLineRound"><ChatLineRound /></IconName>
  <IconName name="ChatLineSquare"><ChatLineSquare /></IconName>
  <IconName name="ChatDotSquare"><ChatDotSquare /></IconName>
  <IconName name="View"><View /></IconName>
  <IconName name="Hide"><Hide /></IconName>
  <IconName name="Unlock"><Unlock /></IconName>
  <IconName name="Lock"><Lock /></IconName>
  <IconName name="RefreshRight"><RefreshRight /></IconName>
  <IconName name="RefreshLeft"><RefreshLeft /></IconName>
  <IconName name="Refresh"><Refresh /></IconName>
  <IconName name="Bell"><Bell /></IconName>
  <IconName name="MuteNotification"><MuteNotification /></IconName>
  <IconName name="User"><User /></IconName>
  <IconName name="Check"><Check /></IconName>
  <IconName name="CircleCheck"><CircleCheck /></IconName>
  <IconName name="Warning"><Warning /></IconName>
  <IconName name="CircleClose"><CircleClose /></IconName>
  <IconName name="Close"><Close /></IconName>
  <IconName name="PieChart"><PieChart /></IconName>
  <IconName name="More"><More /></IconName>
  <IconName name="Compass"><Compass /></IconName>
  <IconName name="Filter"><Filter /></IconName>
  <IconName name="Switch"><Switch /></IconName>
  <IconName name="Select"><Select /></IconName>
  <IconName name="SemiSelect"><SemiSelect /></IconName>
</ul>

<style lang="scss">
  .demo-icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border-top: 1px solid var(--svel-border-color);
    border-left: 1px solid var(--svel-border-color);
    border-radius: 4px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
</style>
