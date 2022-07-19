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
      name: 'v-model',
      propType: 'string',
      title: 'v-model',
      setter: 'ExpressionSetter',
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
      name: 'fill',
      propType: 'string',
      title: {
        label: '填充色和边框色',
        tip: '按钮形式的 Radio 激活时的填充色和边框色',
      },
      setter: 'ColorSetter',
    },
    {
      name: 'textColor',
      propType: 'string',
      title: {
        label: '文本颜色',
        tip: '按钮形式的 Radio 激活时的文本颜色',
      },
      setter: 'ColorSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onChange'],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  keywords: 'ElRadioGroup',
};
