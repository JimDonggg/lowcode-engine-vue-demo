export default {
  category: '表单',
  componentName: 'ElDatePicker',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElDatePicker',
    destructuring: true,
  },
  props: [
    {
      name: 'v-model',
      propType: 'string',
      title: 'v-model',
      setter: 'ExpressionSetter',
    },
    // {
    //   name: 'popperClass',
    //   propType: 'string',
    //   title: 'popperClass',
    //   setter: 'StringSetter',
    // },
    {
      name: 'format',
      propType: 'string',
      title: '显示格式',
      setter: 'StringSetter',
    },
    {
      name: 'valueFormat',
      propType: 'string',
      title: '值格式',
      setter: 'StringSetter',
    },
    {
      name: 'type',
      propType: 'string',
      title: '显示类型',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '年',
                value: 'year',
              },
              {
                title: '月',
                value: 'month',
              },
              {
                title: '星期',
                value: 'week',
              },
              {
                title: '天',
                value: 'date',
              },
              {
                title: '日期时间',
                value: 'datetime',
              },
              {
                title: '日期范围',
                value: 'daterange',
              },
              {
                title: '日期时间范围',
                value: 'datetimerange',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'clearable',
      propType: 'bool',
      title: '支持清除',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'clearIcon',
    //   propType: {
    //     type: 'oneOfType',
    //     value: ['string'],
    //   },
    //   title: 'clearIcon',
    //   setter: false,
    // },
    // {
    //   name: 'editable',
    //   propType: 'bool',
    //   title: '标签可增加关闭',
    //   setter: 'BoolSetter',
    // },
    {
      name: 'prefixIcon',
      propType: {
        type: 'oneOfType',
        value: ['string'],
      },
      title: 'prefixIcon',
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
      name: 'readonly',
      propType: 'bool',
      title: '是否只读',
      setter: 'BoolSetter',
    },
    {
      name: 'disabled',
      propType: 'bool',
      title: '是否禁用',
      setter: 'BoolSetter',
    },
    {
      name: 'placeholder',
      propType: 'string',
      title: '输入提示',
      setter: 'StringSetter',
    },
    {
      name: 'popperOptions',
      propType: 'object',
      title: 'popperOptions',
      setter: false,
    },
    {
      name: 'rangeSeparator',
      propType: 'string',
      title: 'rangeSeparator',
      setter: 'StringSetter',
    },
    {
      name: 'startPlaceholder',
      propType: 'string',
      title: 'startPlaceholder',
      setter: 'StringSetter',
    },
    {
      name: 'endPlaceholder',
      propType: 'string',
      title: 'endPlaceholder',
      setter: 'StringSetter',
    },
    {
      name: 'defaultValue',
      propType: {
        type: 'oneOfType',
        value: ['string', 'array'],
      },
      title: 'defaultValue',
      setter: false,
    },
    {
      name: 'defaultTime',
      propType: {
        type: 'oneOfType',
        value: ['string', 'array'],
      },
      title: 'defaultTime',
      setter: false,
    },
    {
      name: 'isRange',
      propType: 'bool',
      title: 'isRange',
      setter: 'BoolSetter',
    },
    {
      name: 'disabledHours',
      propType: 'func',
      title: 'disabledHours',
      setter: false,
    },
    {
      name: 'disabledMinutes',
      propType: 'func',
      title: 'disabledMinutes',
      setter: false,
    },
    {
      name: 'disabledSeconds',
      propType: 'func',
      title: 'disabledSeconds',
      setter: false,
    },
    {
      name: 'disabledDate',
      propType: 'func',
      title: 'disabledDate',
      setter: false,
    },
    {
      name: 'cellClassName',
      propType: 'func',
      title: 'cellClassName',
      setter: false,
    },
    {
      name: 'shortcuts',
      propType: 'array',
      title: 'shortcuts',
      setter: false,
    },
    {
      name: 'arrowControl',
      propType: 'bool',
      title: 'arrowControl',
      setter: 'BoolSetter',
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
      name: 'unlinkPanels',
      propType: 'bool',
      title: 'unlinkPanels',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onChange', 'onBlur', 'onFocus', 'onCalendarChange', 'onVisibleChange'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  keywords: 'ElDatePicker',
};
