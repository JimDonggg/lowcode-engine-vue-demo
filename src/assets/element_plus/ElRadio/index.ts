export default {
  category: '表单',
  componentName: 'ElRadio',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElRadio',
    destructuring: true,
  },
  props: [
    {
      name: 'children',
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      setter: ['SlotSetter', 'StringSetter', 'VariableSetter'],
    },
    {
      name: 'size',
      propType: 'string',
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
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'label',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number', 'bool'],
      },
      title: '标签',
      setter: false,
    },
    {
      name: 'v-model',
      propType: 'string',
      title: 'v-model',
      setter: 'ExpressionSetter',
    },
    {
      name: 'name',
      propType: 'string',
      title: 'name',
      setter: 'StringSetter',
    },
    {
      name: 'border',
      propType: 'bool',
      title: 'border',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onUpdate:modelvalue', 'onChange'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  keywords: 'ElRadio',
};
