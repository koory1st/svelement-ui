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
};

function getText(key: string): string {
  return langDict[key];
}

export default getText;
