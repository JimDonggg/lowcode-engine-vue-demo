export default {
  category: '表单',
  componentName: 'ElCheckbox',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElCheckbox',
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
      name: 'children',
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      title: '标签内容',
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
      name: 'label',
      propType: {
        type: 'oneOfType',
        value: ['string', 'bool', 'number'],
      },
      title: {
        label: '选中状态的值',
        tip: '只有在checkbox-group或者绑定对象类型为array时有效',
      },
      setter: false,
    },
    // {
    //   name: 'indeterminate',
    //   propType: 'bool',
    //   title: 'indeterminate',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'checked',
      propType: 'bool',
      title: 'checked',
      setter: 'BoolSetter',
    },
    {
      name: 'trueLabel',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: '选中时的值',
      setter: false,
    },
    {
      name: 'falseLabel',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: '未选中时的值',
      setter: false,
    },
    {
      name: 'border',
      propType: 'bool',
      title: '显示边框',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onChange'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  keywords: 'ElCheckbox',
};
