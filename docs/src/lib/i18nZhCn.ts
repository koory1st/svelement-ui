const langDict: { [key: string]: string } = {
  cb01010: 'Button 按钮',
  cb01020: '常用的操作按钮。',
  cb01030: '基础用法',
  cb01040: '使用',

  cb02010: '禁用状态',

  cb03010: '文字按钮',
  cb03020: '没有边框和背景色的按钮。',

  cb04010: '图标按钮',

  cb05010: '按钮组',

  cb06010: '加载状态按钮',

  cb07010: '调整尺寸',
  cb07020: '除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。',
  cb07030:
    '使用 <span class="code">size</span> 属性额外配置尺寸，可使用 <span class="code">large</span>和<span class="code">small</span>两种值。',
};

function getText(key: string): string {
  return langDict[key];
}

export default getText;
