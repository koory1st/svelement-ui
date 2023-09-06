export const component_group_list = [
  {
    name: 'Basic',
    name_cn: '基础组件',
    component_list: [
      { key: 'button', name: 'Button', name_cn: '按钮' },
      { key: 'container', name: 'Container', name_cn: '布局容器' },
    ],
  },
];

function get_component_route_list() {
  /**
   * @type {string[]}
   */
  const ret = [];

  component_group_list.forEach((g) =>
    g.component_list.forEach((c) => ret.push(`/component/${c.key}`)),
  );

  return ret;
}

export const component_route_list = get_component_route_list();
