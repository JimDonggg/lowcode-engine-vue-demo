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
      name: 'children',
      propType: {
        type: 'oneOfType',
        value: ['node', 'string'],
      },
      setter: ['SlotSetter', 'StringSetter', 'VariableSetter'],
    },
    {
      name: 'v-model',
      propType: 'string',
      title: 'v-model',
      setter: 'ExpressionSetter',
    },
    {
      name: 'label',
      propType: {
        type: 'oneOfType',
        value: ['string', 'bool', 'number'],
      },
      title: '标签',
      setter: false,
    },
    {
      name: 'indeterminate',
      propType: 'bool',
      title: 'indeterminate',
      setter: 'BoolSetter',
    },
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
      name: 'name',
      propType: 'string',
      title: 'name',
      setter: 'StringSetter',
    },
    {
      name: 'trueLabel',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: 'trueLabel',
      setter: false,
    },
    {
      name: 'falseLabel',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: 'falseLabel',
      setter: false,
    },
    {
      name: 'id',
      propType: 'string',
      title: 'id',
      setter: 'StringSetter',
    },
    {
      name: 'controls',
      propType: 'string',
      title: 'controls',
      setter: 'StringSetter',
    },
    {
      name: 'border',
      propType: 'bool',
      title: 'border',
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
      name: 'tabindex',
      propType: 'any',
      title: 'tabindex',
      setter: false,
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
  keywords: 'ElCheckbox',
};
