export default {
  category: '表单',
  componentName: 'ElRadioGroup',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElRadioGroup',
    destructuring: true,
  },
  props: [
    {
      name: 'id',
      propType: 'string',
      title: 'id',
      setter: 'StringSetter',
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
      name: 'v-model',
      propType: 'string',
      title: 'v-model',
      setter: 'ExpressionSetter',
    },
    {
      name: 'fill',
      propType: 'string',
      title: 'fill',
      setter: 'StringSetter',
    },
    {
      name: 'label',
      propType: 'string',
      title: '标签',
      setter: 'StringSetter',
    },
    {
      name: 'textColor',
      propType: 'string',
      title: 'textColor',
      setter: 'StringSetter',
    },
    {
      name: 'name',
      propType: 'string',
      title: 'name',
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
  keywords: 'ElRadioGroup',
};
