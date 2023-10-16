import util from '$lib/i18n/zh/util.js';
import button from '$lib/i18n/zh/button.js';
import container from '$lib/i18n/zh/container.js';
import icon from '$lib/i18n/zh/icon.js';

export const langDict = {
  ...util,
  ...button,
  ...container,
  ...icon,

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
  clay07010: '响应式布局',
  clay07020: '参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。',
  clay08010: '基于断点的隐藏类',
  clay08020:
    '同Element Plus 一样，Svelement-ui 额外提供了一系列类名，用于在某些条件下隐藏元素。 这些类名可以添加在任何 DOM 元素或自定义组件上。 如果需要，请自行引入以下文件：',
  clay08030: '这些类名为：',
  clay08040: '当视口在 xs 尺寸时隐藏',
  clay08050: '当视口在 sm 尺寸时隐藏',
  clay08060: '当视口在 sm 及以下尺寸时隐藏',
  clay08070: '当视口在 sm 及以上尺寸时隐藏',
  clay08080: '当视口在 md 尺寸时隐藏',
  clay08090: '当视口在 md 及以下尺寸时隐藏',
  clay08100: '当视口在 md 及以上尺寸时隐藏',
  clay08110: '当视口在 lg 尺寸时隐藏',
  clay08120: '当视口在 lg 及以下尺寸时隐藏',
  clay08130: '当视口在 lg 及以上尺寸时隐藏',
  clay08140: '当视口在 xl 尺寸时隐藏',

  clin01010: 'Link 链接',
  clin01020: '文字超链接',
  clin02010: '基础用法',
  clin02020: '基础的文字链接用法。',
  clin03010: '禁用状态',
  clin03020: '文字链接不可用状态。',
  clin04010: '下划线',
  clin04020: '文字链接下划线。',
  clin05010: '图标',
  clin05020: '带图标的链接',

  cscr01010: 'Scrollbar 滚动条',

  ccheckbox01010: 'Checkbox 多选框',
  ccheckbox01011: '在一组备选项中进行多选。',
  ccheckbox02010: '基础用法',
  ccheckbox02011: '单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。',
  ccheckbox03010: '禁用状态',
  ccheckbox03020: '多选框不可用状态。',
  ccheckbox03030: '设置 disabled 属性即可。',
  ccheckbox04010: '多选框组',
  ccheckbox04020:
    '适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。',
  ccheckbox05010: '中间状态',
  ccheckbox05020: 'indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果',

  odiv01010: 'Divider 分割线',
  odiv01020: '区隔内容的分割线。',
  odiv01030: '基础用法',
  odiv01040: '对不同段落的文本进行分割。',
  odiv01050: '设置文案',
  odiv01060: '可以在分割线上自定义文本内容',
};

function getText(key) {
  if (key in langDict) {
    return langDict[key];
  }
  return 'todo';
}

export default getText;
