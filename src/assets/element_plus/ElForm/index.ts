export default {
  category: '表单',
  componentName: 'ElForm',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElForm',
    destructuring: true,
  },
  props: [
    {
      name: 'model',
      propType: 'object',
      title: '数据对象',
      setter: false,
    },
    {
      name: 'rules',
      propType: 'object',
      title: '验证规则',
      setter: false,
    },
    {
      name: 'labelPosition',
      propType: 'string',
      title: '标签位置',
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
      name: 'labelSuffix',
      propType: 'string',
      title: 'labelSuffix',
      setter: 'StringSetter',
    },
    {
      name: 'inline',
      propType: 'bool',
      title: 'inline',
      setter: 'BoolSetter',
    },
    {
      name: 'inlineMessage',
      propType: 'bool',
      title: 'inlineMessage',
      setter: 'BoolSetter',
    },
    {
      name: 'statusIcon',
      propType: 'bool',
      title: 'statusIcon',
      setter: 'BoolSetter',
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
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'validateOnRuleChange',
      propType: 'bool',
      title: 'validateOnRuleChange',
      setter: 'BoolSetter',
    },
    {
      name: 'hideRequiredAsterisk',
      propType: 'bool',
      title: 'hideRequiredAsterisk',
      setter: 'BoolSetter',
    },
    {
      name: 'scrollToError',
      propType: 'bool',
      title: 'scrollToError',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onValidate'],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  keywords: 'ElForm',
};
