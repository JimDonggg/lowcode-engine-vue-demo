export default {
  category: '表单',
  componentName: 'ElCheckboxGroup',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElCheckboxGroup',
    destructuring: true,
  },
  props: [
    {
      name: 'v-model',
      propType: 'string',
      title: 'v-model',
      setter: 'ExpressionSetter',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'min',
      propType: 'number',
      title: 'min',
      setter: false,
    },
    {
      name: 'max',
      propType: 'number',
      title: 'max',
      setter: false,
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
      name: 'id',
      propType: 'string',
      title: 'id',
      setter: 'StringSetter',
    },
    {
      name: 'label',
      propType: 'string',
      title: '标签',
      setter: 'StringSetter',
    },
    {
      name: 'fill',
      propType: 'string',
      title: 'fill',
      setter: 'StringSetter',
    },
    {
      name: 'textColor',
      propType: 'string',
      title: 'textColor',
      setter: 'StringSetter',
    },
    {
      name: 'tag',
      propType: 'string',
      title: 'tag',
      setter: 'StringSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onUpdate:modelvalue', 'onChange'],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  keywords: 'ElCheckboxGroup',
};
