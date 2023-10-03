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
