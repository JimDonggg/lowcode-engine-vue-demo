export default {
  category: '表单',
  componentName: 'ElFormItem',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElFormItem',
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
      name: 'labelWidth',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: '标签宽度',
      setter: false,
    },
    {
      name: 'prop',
      propType: {
        type: 'oneOfType',
        value: ['string', 'array'],
      },
      title: 'prop',
      setter: false,
    },
    {
      name: 'required',
      propType: 'bool',
      title: '是否必填',
      setter: 'BoolSetter',
    },
    {
      name: 'rules',
      propType: {
        type: 'oneOfType',
        value: ['array'],
      },
      title: '验证规则',
      setter: false,
    },
    {
      name: 'error',
      propType: 'string',
      title: 'error',
      setter: 'StringSetter',
    },
    {
      name: 'validateStatus',
      propType: 'string',
      title: 'validateStatus',
      setter: 'StringSetter',
    },
    {
      name: 'for',
      propType: 'string',
      title: 'for',
      setter: 'StringSetter',
    },
    {
      name: 'inlineMessage',
      propType: {
        type: 'oneOfType',
        value: ['string', 'bool'],
      },
      title: 'inlineMessage',
      setter: false,
    },
    {
      name: 'showMessage',
      propType: 'bool',
      title: 'showMessage',
      setter: 'BoolSetter',
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
  keywords: 'ElFormItem',
};
