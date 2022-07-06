export default {
  category: '表单',
  componentName: 'ElOption',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElOption',
    destructuring: true,
  },
  props: [
    {
      name: 'value',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'bool'],
      },
      title: 'value',
      setter: false,
    },
    {
      name: 'label',
      propType: 'any',
      title: '标签',
      setter: false,
    },
    {
      name: 'created',
      propType: 'bool',
      title: 'created',
      setter: 'BoolSetter',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
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
      isContainer: false,
      isModal: false,
    },
  },
  keywords: 'ElOption',
};
