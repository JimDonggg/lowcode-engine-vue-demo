export default {
  category: '数据展示',
  componentName: 'ElCard',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElCard',
    destructuring: true,
  },
  props: [
    {
      name: 'header',
      propType: 'string',
      title: '标题',
      setter: 'StringSetter',
    },
    {
      name: 'bodyStyle',
      propType: {
        type: 'oneOfType',
        value: ['string', 'array'],
      },
      title: 'bodyStyle',
      setter: false,
    },
    {
      name: 'shadow',
      propType: 'string',
      title: '阴影时机',
      setter: 'StringSetter',
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
  keywords: 'ElCard',
};
