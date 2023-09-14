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
    CloseBold,
    EditPen,
    Message,
    MessageBox,
    TurnOff,
    Finished,
    Crop,
    SwitchButton,
    Operation,
    Open,
    Remove,
    ZoomOut,
    ZoomIn,
    InfoFilled,
    CircleCheckFilled,
    SuccessFilled,
    WarningFilled,
    CircleCloseFilled,
    QuestionFilled,
    WarnTriangleFilled,
    UserFilled,
    MoreFilled,
    Tools,
    HomeFilled,
    Menu,
    UploadFilled,
    Avatar,
    HelpFilled,
    StarFilled,
    Comment,
    Histogram,
    Grid,
    Promotion,
    DeleteFilled,
    RemoveFilled,
    CirclePlusFilled,
    ArrowLeft,
    ArrowUp,
    ArrowRight,
    ArrowDown,
    ArrowLeftBold,
    ArrowUpBold,
    ArrowRightBold,
    ArrowDownBold,
    DArrowRight,
    DArrowLeft,
    Download,
    Upload,
    Top,
    Bottom,
    Back,
    Right,
    TopRight,
    TopLeft,
    BottomRight,
    BottomLeft,
    Sort,
    SortUp,
    SortDown,
    Rank,
    CaretLeft,
    CaretTop,
    CaretRight,
    CaretBottom,
    DCaret,
    Expand,
    Fold,
    DocumentAdd,
    Document,
    Notebook,
    Tickets,
    Memo,
    Collection,
    Postcard,
    ScaleToOriginal,
    SetUp,
    DocumentDelete,
    DocumentChecked,
    DataBoard,
    DataAnalysis,
    CopyDocument,
    FolderChecked,
    Files,
    Folder,
    FolderDelete,
    FolderRemove,
    FolderOpened,
    DocumentCopy,
    DocumentRemove,
    FolderAdd,
    FirstAidKit,
    Reading,
    DataLine,
    Management,
    Checked,
    Ticket,
    Failed,
    TrendCharts,
    List,
    Microphone,
    Mute,
    Mic,
    VideoPause,
    VideoCamera,
    VideoPlay,
    Headset,
    Monitor,
    Film,
    Camera,
    Picture,
    PictureRounded,
    Cellphone,
    VideoCameraFilled,
    PictureFilled,
    Platform,
    CameraFilled,
    BellFilled,
    Location,
    LocationInformation,
    DeleteLocation,
    Coordinate,
    Bicycle,
    OfficeBuilding,
    School,
    Guide,
    AddLocation,
    MapLocation,
    Place,
    LocationFilled,
    Van,
    Iphone,
    Watermelon,
    Pear,
    NoSmoking,
    Smoking,
    Mug,
    GobletSquareFull,
    GobletFull,
    KnifeFork,
    Sugar,
    Bowl,
    MilkTea,
    Lollipop,
    Coffee,
    Chicken,
    Dish,
    IceTea,
    ColdDrink,
    CoffeeCup,
    DishDot,
    IceDrink,
    IceCream,
    Dessert,
    IceCreamSquare,
    ForkSpoon,
    IceCreamRound,
    Food,
    Grape,
    Fries,
    Apple,
    Burger,
    Goblet,
    GobletSquare,
    Orange,
    Cherry,
    HotWater,
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
  <IconName name="CloseBold"><CloseBold /></IconName>
  <IconName name="EditPen"><EditPen /></IconName>
  <IconName name="Edit"><Edit /></IconName>
  <IconName name="Message"><Message /></IconName>
  <IconName name="MessageBox"><MessageBox /></IconName>
  <IconName name="TurnOff"><TurnOff /></IconName>
  <IconName name="Finished"><Finished /></IconName>
  <IconName name="Delete"><Delete /></IconName>
  <IconName name="Crop"><Crop /></IconName>
  <IconName name="SwitchButton"><SwitchButton /></IconName>
  <IconName name="Operation"><Operation /></IconName>
  <IconName name="Open"><Open /></IconName>
  <IconName name="Remove"><Remove /></IconName>
  <IconName name="ZoomOut"><ZoomOut /></IconName>
  <IconName name="ZoomIn"><ZoomIn /></IconName>
  <IconName name="InfoFilled"><InfoFilled /></IconName>
  <IconName name="CircleCheckFilled"><CircleCheckFilled /></IconName>
  <IconName name="SuccessFilled"><SuccessFilled /></IconName>
  <IconName name="WarningFilled"><WarningFilled /></IconName>
  <IconName name="CircleCloseFilled"><CircleCloseFilled /></IconName>
  <IconName name="QuestionFilled"><QuestionFilled /></IconName>
  <IconName name="WarnTriangleFilled"><WarnTriangleFilled /></IconName>
  <IconName name="UserFilled"><UserFilled /></IconName>
  <IconName name="MoreFilled"><MoreFilled /></IconName>
  <IconName name="Tools"><Tools /></IconName>
  <IconName name="HomeFilled"><HomeFilled /></IconName>
  <IconName name="Menu"><Menu /></IconName>
  <IconName name="UploadFilled"><UploadFilled /></IconName>
  <IconName name="Avatar"><Avatar /></IconName>
  <IconName name="HelpFilled"><HelpFilled /></IconName>
  <IconName name="Share"><Share /></IconName>
  <IconName name="StarFilled"><StarFilled /></IconName>
  <IconName name="Comment"><Comment /></IconName>
  <IconName name="Histogram"><Histogram /></IconName>
  <IconName name="Grid"><Grid /></IconName>
  <IconName name="Promotion"><Promotion /></IconName>
  <IconName name="DeleteFilled"><DeleteFilled /></IconName>
  <IconName name="RemoveFilled"><RemoveFilled /></IconName>
  <IconName name="CirclePlusFilled"><CirclePlusFilled /></IconName>
</ul>

<h3>Arrow</h3>
<ul class="demo-icon-list">
  <IconName name="ArrowLeft"><ArrowLeft /></IconName>
  <IconName name="ArrowUp"><ArrowUp /></IconName>
  <IconName name="ArrowRight"><ArrowRight /></IconName>
  <IconName name="ArrowDown"><ArrowDown /></IconName>
  <IconName name="ArrowLeftBold"><ArrowLeftBold /></IconName>
  <IconName name="ArrowUpBold"><ArrowUpBold /></IconName>
  <IconName name="ArrowRightBold"><ArrowRightBold /></IconName>
  <IconName name="ArrowDownBold"><ArrowDownBold /></IconName>
  <IconName name="DArrowRight"><DArrowRight /></IconName>
  <IconName name="DArrowLeft"><DArrowLeft /></IconName>
  <IconName name="Download"><Download /></IconName>
  <IconName name="Upload"><Upload /></IconName>
  <IconName name="Top"><Top /></IconName>
  <IconName name="Bottom"><Bottom /></IconName>
  <IconName name="Back"><Back /></IconName>
  <IconName name="Right"><Right /></IconName>
  <IconName name="TopRight"><TopRight /></IconName>
  <IconName name="TopLeft"><TopLeft /></IconName>
  <IconName name="BottomRight"><BottomRight /></IconName>
  <IconName name="BottomLeft"><BottomLeft /></IconName>
  <IconName name="Sort"><Sort /></IconName>
  <IconName name="SortUp"><SortUp /></IconName>
  <IconName name="SortDown"><SortDown /></IconName>
  <IconName name="Rank"><Rank /></IconName>
  <IconName name="CaretLeft"><CaretLeft /></IconName>
  <IconName name="CaretTop"><CaretTop /></IconName>
  <IconName name="CaretRight"><CaretRight /></IconName>
  <IconName name="CaretBottom"><CaretBottom /></IconName>
  <IconName name="DCaret"><DCaret /></IconName>
  <IconName name="Expand"><Expand /></IconName>
  <IconName name="Fold"><Fold /></IconName>
</ul>

<h3>Document</h3>
<ul class="demo-icon-list">
  <IconName name="DocumentAdd"><DocumentAdd /></IconName>
  <IconName name="Document"><Document /></IconName>
  <IconName name="Notebook"><Notebook /></IconName>
  <IconName name="Tickets"><Tickets /></IconName>
  <IconName name="Memo"><Memo /></IconName>
  <IconName name="Collection"><Collection /></IconName>
  <IconName name="Postcard"><Postcard /></IconName>
  <IconName name="ScaleToOriginal"><ScaleToOriginal /></IconName>
  <IconName name="SetUp"><SetUp /></IconName>
  <IconName name="DocumentDelete"><DocumentDelete /></IconName>
  <IconName name="DocumentChecked"><DocumentChecked /></IconName>
  <IconName name="DataBoard"><DataBoard /></IconName>
  <IconName name="DataAnalysis"><DataAnalysis /></IconName>
  <IconName name="CopyDocument"><CopyDocument /></IconName>
  <IconName name="FolderChecked"><FolderChecked /></IconName>
  <IconName name="Files"><Files /></IconName>
  <IconName name="Folder"><Folder /></IconName>
  <IconName name="FolderDelete"><FolderDelete /></IconName>
  <IconName name="FolderRemove"><FolderRemove /></IconName>
  <IconName name="FolderOpened"><FolderOpened /></IconName>
  <IconName name="DocumentCopy"><DocumentCopy /></IconName>
  <IconName name="DocumentRemove"><DocumentRemove /></IconName>
  <IconName name="FolderAdd"><FolderAdd /></IconName>
  <IconName name="FirstAidKit"><FirstAidKit /></IconName>
  <IconName name="Reading"><Reading /></IconName>
  <IconName name="DataLine"><DataLine /></IconName>
  <IconName name="Management"><Management /></IconName>
  <IconName name="Checked"><Checked /></IconName>
  <IconName name="Ticket"><Ticket /></IconName>
  <IconName name="Failed"><Failed /></IconName>
  <IconName name="TrendCharts"><TrendCharts /></IconName>
  <IconName name="List"><List /></IconName>
</ul>

<h3>Media</h3>
<ul class="demo-icon-list">
  <IconName name="Microphone"><Microphone /></IconName>
  <IconName name="Mute"><Mute /></IconName>
  <IconName name="Mic"><Mic /></IconName>
  <IconName name="VideoPause"><VideoPause /></IconName>
  <IconName name="VideoCamera"><VideoCamera /></IconName>
  <IconName name="VideoPlay"><VideoPlay /></IconName>
  <IconName name="Headset"><Headset /></IconName>
  <IconName name="Monitor"><Monitor /></IconName>
  <IconName name="Film"><Film /></IconName>
  <IconName name="Camera"><Camera /></IconName>
  <IconName name="Picture"><Picture /></IconName>
  <IconName name="PictureRounded"><PictureRounded /></IconName>
  <IconName name="Iphone"><Iphone /></IconName>
  <IconName name="Cellphone"><Cellphone /></IconName>
  <IconName name="VideoCameraFilled"><VideoCameraFilled /></IconName>
  <IconName name="PictureFilled"><PictureFilled /></IconName>
  <IconName name="Platform"><Platform /></IconName>
  <IconName name="CameraFilled"><CameraFilled /></IconName>
  <IconName name="BellFilled"><BellFilled /></IconName>
</ul>

<h3>Traffic</h3>
<ul class="demo-icon-list">
  <IconName name="Location"><Location /></IconName>
  <IconName name="LocationInformation"><LocationInformation /></IconName>
  <IconName name="DeleteLocation"><DeleteLocation /></IconName>
  <IconName name="Coordinate"><Coordinate /></IconName>
  <IconName name="Bicycle"><Bicycle /></IconName>
  <IconName name="OfficeBuilding"><OfficeBuilding /></IconName>
  <IconName name="School"><School /></IconName>
  <IconName name="Guide"><Guide /></IconName>
  <IconName name="AddLocation"><AddLocation /></IconName>
  <IconName name="MapLocation"><MapLocation /></IconName>
  <IconName name="Place"><Place /></IconName>
  <IconName name="LocationFilled"><LocationFilled /></IconName>
  <IconName name="Van"><Van /></IconName>
</ul>

<h3>Food</h3>
<ul class="demo-icon-list">
  <IconName name="Watermelon"><Watermelon /></IconName>
  <IconName name="Pear"><Pear /></IconName>
  <IconName name="NoSmoking"><NoSmoking /></IconName>
  <IconName name="Smoking"><Smoking /></IconName>
  <IconName name="Mug"><Mug /></IconName>
  <IconName name="GobletSquareFull"><GobletSquareFull /></IconName>
  <IconName name="GobletFull"><GobletFull /></IconName>
  <IconName name="KnifeFork"><KnifeFork /></IconName>
  <IconName name="Sugar"><Sugar /></IconName>
  <IconName name="Bowl"><Bowl /></IconName>
  <IconName name="MilkTea"><MilkTea /></IconName>
  <IconName name="Lollipop"><Lollipop /></IconName>
  <IconName name="Coffee"><Coffee /></IconName>
  <IconName name="Chicken"><Chicken /></IconName>
  <IconName name="Dish"><Dish /></IconName>
  <IconName name="IceTea"><IceTea /></IconName>
  <IconName name="ColdDrink"><ColdDrink /></IconName>
  <IconName name="CoffeeCup"><CoffeeCup /></IconName>
  <IconName name="DishDot"><DishDot /></IconName>
  <IconName name="IceDrink"><IceDrink /></IconName>
  <IconName name="IceCream"><IceCream /></IconName>
  <IconName name="Dessert"><Dessert /></IconName>
  <IconName name="IceCreamSquare"><IceCreamSquare /></IconName>
  <IconName name="ForkSpoon"><ForkSpoon /></IconName>
  <IconName name="IceCreamRound"><IceCreamRound /></IconName>
  <IconName name="Food"><Food /></IconName>
  <IconName name="HotWater"><HotWater /></IconName>
  <IconName name="Grape"><Grape /></IconName>
  <IconName name="Fries"><Fries /></IconName>
  <IconName name="Apple"><Apple /></IconName>
  <IconName name="Burger"><Burger /></IconName>
  <IconName name="Goblet"><Goblet /></IconName>
  <IconName name="GobletSquare"><GobletSquare /></IconName>
  <IconName name="Orange"><Orange /></IconName>
  <IconName name="Cherry"><Cherry /></IconName>
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
