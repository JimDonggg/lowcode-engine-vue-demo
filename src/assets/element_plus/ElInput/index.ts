export default {
  category: '表单',
  componentName: 'ElInput',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElInput',
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
      name: 'type',
      propType: 'string',
      title: '类型',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '主要',
                value: 'primary',
              },
              {
                title: '成功',
                value: 'success',
              },
              {
                title: '警告',
                value: 'warning',
              },
              {
                title: '危险',
                value: 'danger',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'resize',
      propType: 'string',
      title: 'resize',
      setter: 'StringSetter',
    },
    {
      name: 'autosize',
      propType: {
        type: 'oneOfType',
        value: ['bool'],
      },
      title: 'autosize',
      setter: false,
    },
    {
      name: 'autocomplete',
      propType: 'string',
      title: 'autocomplete',
      setter: 'StringSetter',
    },
    {
      name: 'formatter',
      propType: 'func',
      title: 'formatter',
      setter: false,
    },
    {
      name: 'parser',
      propType: 'func',
      title: 'parser',
      setter: false,
    },
    {
      name: 'placeholder',
      propType: 'string',
      title: '输入提示',
      setter: 'StringSetter',
    },
    {
      name: 'form',
      propType: 'string',
      title: 'form',
      setter: 'StringSetter',
    },
    {
      name: 'readonly',
      propType: 'bool',
      title: '是否只读',
      setter: 'BoolSetter',
    },
    {
      name: 'clearable',
      propType: 'bool',
      title: '支持清除',
      setter: 'BoolSetter',
    },
    {
      name: 'showPassword',
      propType: 'bool',
      title: '密码框',
      setter: 'BoolSetter',
    },
    {
      name: 'showWordLimit',
      propType: 'bool',
      title: '字数统计',
      setter: 'BoolSetter',
    },
    {
      name: 'suffixIcon',
      propType: {
        type: 'oneOfType',
        value: ['string', 'func'],
      },
      title: 'suffixIcon',
      setter: false,
    },
    {
      name: 'prefixIcon',
      propType: {
        type: 'oneOfType',
        value: ['string', 'func'],
      },
      title: 'prefixIcon',
      setter: false,
    },
    {
      name: 'containerRole',
      propType: 'string',
      title: 'containerRole',
      setter: 'StringSetter',
    },
    {
      name: 'label',
      propType: 'string',
      title: '标签',
      setter: 'StringSetter',
    },
    {
      name: 'tabindex',
      propType: {
        type: 'oneOfType',
        value: ['string', 'number'],
      },
      title: 'tabindex',
      setter: false,
    },
    {
      name: 'validateEvent',
      propType: 'bool',
      title: 'validateEvent',
      setter: 'BoolSetter',
    },
    {
      name: 'inputStyle',
      propType: {
        type: 'oneOfType',
        value: ['array', 'string'],
      },
      title: 'inputStyle',
      setter: false,
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: [
        'onUpdate:modelvalue',
        'onInput',
        'onChange',
        'onFocus',
        'onBlur',
        'onClear',
        'onMouseleave',
        'onMouseenter',
        'onKeydown',
        'onCompositionstart',
        'onCompositionupdate',
        'onCompositionend',
      ],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  keywords: 'ElInput',
};
