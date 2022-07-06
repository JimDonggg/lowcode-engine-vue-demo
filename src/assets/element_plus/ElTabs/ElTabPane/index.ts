export default {
  category: '导航',
  componentName: 'ElTabPane',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElTabPane',
    destructuring: true,
  },
  props: [
    {
      name: 'label',
      propType: 'string',
      title: '标签',
      setter: 'StringSetter',
    },
    {
      name: 'name',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: 'name',
      setter: false,
    },
    {
      name: 'closable',
      propType: 'bool',
      title: '标签可关闭',
      setter: 'BoolSetter',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'lazy',
      propType: 'bool',
      title: '延迟渲染',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  keywords: 'ElTabPane',
};
