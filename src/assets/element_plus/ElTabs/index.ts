export default {
  category: '导航',
  componentName: 'ElTabs',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElTabs',
    destructuring: true,
  },
  props: [
    {
      name: 'type',
      propType: 'string',
      title: '类型',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '主要',
                value: 'primary',
              },
              {
                title: '成功',
                value: 'success',
              },
              {
                title: '警告',
                value: 'warning',
              },
              {
                title: '危险',
                value: 'danger',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'activeName',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: 'activeName',
      setter: false,
    },
    {
      name: 'closable',
      propType: 'bool',
      title: '标签可关闭',
      setter: 'BoolSetter',
    },
    {
      name: 'addable',
      propType: 'bool',
      title: '标签可增加',
      setter: 'BoolSetter',
    },
    {
      name: 'v-model',
      propType: 'string',
      title: 'v-model',
      setter: 'ExpressionSetter',
    },
    {
      name: 'editable',
      propType: 'bool',
      title: '标签可增加关闭',
      setter: 'BoolSetter',
    },
    {
      name: 'tabPosition',
      propType: 'string',
      title: '选项卡位置',
      setter: 'StringSetter',
    },
    {
      name: 'beforeLeave',
      propType: 'func',
      title: 'beforeLeave',
      setter: false,
    },
    {
      name: 'stretch',
      propType: 'bool',
      title: '宽度自撑开',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [
        'onUpdate:modelvalue',
        'onTab-click',
        'onTab-change',
        'onEdit',
        'onTab-remove',
        'onTab-add',
      ],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  keywords: 'ElTabs',
};
