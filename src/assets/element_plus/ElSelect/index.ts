export default {
  category: '表单',
  componentName: 'ElSelect',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElSelect',
    destructuring: true,
  },
  props: [
    {
      name: 'name',
      propType: 'string',
      title: 'name',
      setter: 'StringSetter',
    },
    {
      name: 'id',
      propType: 'string',
      title: 'id',
      setter: 'StringSetter',
    },
    {
      name: 'v-model',
      propType: 'string',
      title: 'v-model',
      setter: 'ExpressionSetter',
    },
    {
      name: 'autocomplete',
      propType: 'string',
      title: 'autocomplete',
      setter: 'StringSetter',
    },
    {
      name: 'automaticDropdown',
      propType: 'bool',
      title: 'automaticDropdown',
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
      name: 'effect',
      propType: 'string',
      title: 'effect',
      setter: 'StringSetter',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'clearable',
      propType: 'bool',
      title: '支持清除',
      setter: 'BoolSetter',
    },
    {
      name: 'filterable',
      propType: 'bool',
      title: 'filterable',
      setter: 'BoolSetter',
    },
    {
      name: 'allowCreate',
      propType: 'bool',
      title: 'allowCreate',
      setter: 'BoolSetter',
    },
    {
      name: 'loading',
      propType: 'bool',
      title: '显示加载状态',
      setter: 'BoolSetter',
    },
    {
      name: 'popperClass',
      propType: 'string',
      title: 'popperClass',
      setter: 'StringSetter',
    },
    {
      name: 'remote',
      propType: 'bool',
      title: 'remote',
      setter: 'BoolSetter',
    },
    {
      name: 'loadingText',
      propType: 'string',
      title: 'loadingText',
      setter: 'StringSetter',
    },
    {
      name: 'noMatchText',
      propType: 'string',
      title: 'noMatchText',
      setter: 'StringSetter',
    },
    {
      name: 'noDataText',
      propType: 'string',
      title: 'noDataText',
      setter: 'StringSetter',
    },
    {
      name: 'remoteMethod',
      propType: 'func',
      title: 'remoteMethod',
      setter: false,
    },
    {
      name: 'filterMethod',
      propType: 'func',
      title: 'filterMethod',
      setter: false,
    },
    {
      name: 'multiple',
      propType: 'bool',
      title: 'multiple',
      setter: 'BoolSetter',
    },
    {
      name: 'multipleLimit',
      propType: 'number',
      title: 'multipleLimit',
      setter: false,
    },
    {
      name: 'placeholder',
      propType: 'string',
      title: '输入提示',
      setter: 'StringSetter',
    },
    {
      name: 'defaultFirstOption',
      propType: 'bool',
      title: 'defaultFirstOption',
      setter: 'BoolSetter',
    },
    {
      name: 'reserveKeyword',
      propType: 'bool',
      title: 'reserveKeyword',
      setter: 'BoolSetter',
    },
    {
      name: 'valueKey',
      propType: 'string',
      title: 'valueKey',
      setter: 'StringSetter',
    },
    {
      name: 'collapseTags',
      propType: 'bool',
      title: 'collapseTags',
      setter: 'BoolSetter',
    },
    {
      name: 'collapseTagsTooltip',
      propType: 'bool',
      title: 'collapseTagsTooltip',
      setter: 'BoolSetter',
    },
    {
      name: 'teleported',
      propType: 'bool',
      title: 'teleported',
      setter: 'BoolSetter',
    },
    {
      name: 'persistent',
      propType: 'bool',
      title: 'persistent',
      setter: 'BoolSetter',
    },
    {
      name: 'clearIcon',
      propType: {
        type: 'oneOfType',
        value: ['string'],
      },
      title: 'clearIcon',
      setter: false,
    },
    {
      name: 'fitInputWidth',
      propType: 'bool',
      title: 'fitInputWidth',
      setter: 'BoolSetter',
    },
    {
      name: 'suffixIcon',
      propType: {
        type: 'oneOfType',
        value: ['string'],
      },
      title: 'suffixIcon',
      setter: false,
    },
    {
      name: 'tagType',
      propType: 'string',
      title: 'tagType',
      setter: 'StringSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['on0', 'on1', 'on2', 'on3', 'on4', 'on5', 'on6'],
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  keywords: 'ElSelect',
};
