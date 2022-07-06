export default {
  category: '基础',
  componentName: 'ElIcon',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElIcon',
    destructuring: true,
  },
  props: [
    {
      name: 'size',
      propType: {
        type: 'oneOfType',
        value: ['number', 'string'],
      },
      title: '尺寸',
      setter: [
        {
          componentName: 'RadioGroupSetter',
          props: {
            options: [
              {
                title: '大',
                value: 'large',
              },
              {
                title: '默认',
                value: 'default',
              },
              {
                title: '小',
                value: 'small',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'color',
      propType: 'string',
      title: 'color',
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
      isContainer: false,
      isModal: false,
    },
  },
  keywords: 'ElIcon',
};
