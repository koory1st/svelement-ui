const langDict: { [key: string]: string } = {
  cbut01010: 'Button 按钮',
  cbut01020: '常用的操作按钮。',
  cbut01030: '基础用法',
  cbut01040: '使用',
  cbut02010: '禁用状态',
  cbut03010: '文字按钮',
  cbut03020: '没有边框和背景色的按钮。',
  cbut04010: '图标按钮',
  cbut05010: '按钮组',
  cbut06010: '加载状态按钮',
  cbut07010: '调整尺寸',
  cbut07020: '除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。',
  cbut07030:
    '使用 <span class="code">size</span> 属性额外配置尺寸，可使用 <span class="code">large</span>和<span class="code">small</span>两种值。',
  cbut08010: '自定义颜色',
  cbut08020: '您可以自定义按钮的颜色。',
  cbut08030: '我们将自动计算按钮处于 hover 和 active 状态时的颜色。',

  ccon01010: 'Container 布局容器',
  ccon01020: '用于布局的容器组件，方便快速搭建页面的基本结构：',
  ccon01030:
    '外层容器。 当子元素中包含 <SvelHeader> 或 <SvelFooter> 时，全部子元素会垂直上下排列， 否则会水平左右排列。',
  ccon01040: '顶栏容器。',
  ccon01050: '侧边栏容器。',
  ccon01060: '主要区域容器。',
  ccon01070: '底栏容器。',
  ccon02010: '常见页面布局',

  cico01010: 'Icon 图标',

  clay01010: 'Layout 布局',
  clay01020: '通过基础的 24 分栏，迅速简便地创建布局。',
  clay02010: '基础布局',
  clay02020: '使用列创建基础网格布局。',
  clay02030: '通过 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。',
  clay03010: '分栏间隔',
  clay03020: '支持列间距。',
  clay03030: '行提供 gutter 属性来指定列之间的间距，其默认值为0。',
  clay04010: '混合布局',
  clay04020: '通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。',
  clay05010: '列偏移',
  clay05020: '您可以指定列偏移量。',
  clay05030: '通过制定 col 组件的 offset 属性可以指定分栏偏移的栏数。',
  clay06010: '对齐方式',
  clay06020: '默认使用 flex 布局来对分栏进行灵活的对齐。',
  clay06030:
    '您可以通过justify 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。',

  odiv01010: 'Divider 分割线',
  odiv01020: '区隔内容的分割线。',
  odiv01030: '基础用法',
  odiv01040: '对不同段落的文本进行分割。',
  odiv01050: '设置文案',
  odiv01060: '可以在分割线上自定义文本内容',
};

function getText(key: string): string {
  return langDict[key];
}

export default getText;
