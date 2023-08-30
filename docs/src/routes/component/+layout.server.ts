export function load({ params }) {
  return {
    component_group_list: [
      {
        name: 'Basic',
        name_cn: '基础组件',
        component_list: [
          { key: 'button', name: 'Button', name_cn: '按钮' },
          { key: 'container', name: 'Container', name_cn: '布局容器' },
        ],
      },
    ],
  };
}
