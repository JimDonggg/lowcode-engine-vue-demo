export default {
  category: '数据展示',
  componentName: 'NDataTable',
  npm: {
    package: 'naive-ui',
    version: '2.30.6',
    exportName: 'NDataTable',
    destructuring: true,
  },
  props: [
    {
      name: 'data',
      propType: 'object',
    },
    {
      name: 'columns',
      propType: 'array',
    },
  ],
  configure: {
    props: [
      {
        name: 'data',
        title: {
          label: '数据',
        },
        propType: 'object',
        setters: 'JsonSetter',
      },
      {
        name: 'columns',
        title: {
          label: '表格列',
          tip: '表格列的配置描述，具体项见下表',
        },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: {
                        label: '列标题',
                        tip: 'title | 列标题',
                      },
                      propType: {
                        type: 'oneOfType',
                        value: ['string', 'func'],
                      },
                      setter: [
                        'StringSetter',
                        {
                          componentName: 'SlotSetter',
                          title: '列标题插槽',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['options'],
                            value: [],
                          },
                        },
                      ],
                    },
                    {
                      name: 'key',
                      title: {
                        label: '数据字段',
                        tip: 'key | 数据字段',
                      },
                      propType: 'string',
                      setter: 'StringSetter',
                      isRequired: true,
                    },
                    {
                      name: 'align',
                      title: {
                        label: '对齐方式',
                        tip: 'align | 对齐方式',
                      },
                      propType: {
                        type: 'oneOf',
                        value: ['left', 'right', 'center'],
                      },
                      defaultValue: 'left',
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: 'left',
                                value: 'left',
                              },
                              {
                                title: 'right',
                                value: 'right',
                              },
                              {
                                title: 'center',
                                value: 'center',
                              },
                            ],
                          },
                        },
                        'VariableSetter',
                      ],
                    },
                    {
                      name: 'fixed',
                      title: {
                        label: '列是否固定',
                        tip: 'fixed | 列是否固定',
                      },
                      description:
                        '（IE 下无效）列是否固定，可选 true (等效于 left) left right',
                      defaultValue: '',
                      propType: {
                        type: 'oneOf',
                        value: ['', 'left', 'right'],
                      },
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: '不固定',
                                value: '',
                              },
                              {
                                title: '固定在左侧',
                                value: 'left',
                              },
                              {
                                title: '固定在右侧',
                                value: 'right',
                              },
                            ],
                          },
                        },
                        'VariableSetter',
                      ],
                    },
                    {
                      name: 'className',
                      title: {
                        label: '列样式类名',
                        tip: 'className | 列样式类名',
                      },
                      propType: 'string',
                      setter: 'StringSetter',
                    },
                    {
                      name: 'width',
                      title: {
                        label: '宽度',
                        tip: 'width | 宽度',
                      },
                      propType: {
                        type: 'oneOfType',
                        value: ['number', 'string'],
                      },
                      setter: ['NumberSetter', 'StringSetter', 'VariableSetter'],
                    },
                    {
                      name: 'sorter',
                      title: {
                        label: '排序规则',
                        tip: 'sorter | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true',
                      },
                      propType: {
                        type: 'oneOfType',
                        value: ['bool', 'func'],
                      },
                      setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter'],
                    },
                    {
                      name: 'hidden',
                      title: {
                        label: '是否隐藏',
                        tip: 'hidden | 是否隐藏当前列',
                      },
                      propType: 'bool',
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'filters',
                      title: {
                        label: '筛选菜单项',
                        tip: 'filters | 表头的筛选菜单项',
                      },
                      propType: 'object',
                      setter: 'JsonSetter',
                    },
                    {
                      name: 'render',
                      title: {
                        label: '自定义渲染',
                        tip: 'render | 插槽内的物料表达式可通过this.record获取当前行数据，this.index获取索引',
                      },
                      propType: 'func',
                      setter: [
                        {
                          componentName: 'SlotSetter',
                          title: '单元格插槽',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['text', 'record', 'index'],
                            value: [],
                          },
                        },
                        'VariableSetter',
                      ],
                    },
                  ],
                },
              },
              initialValue: {
                title: '标题',
              },
            },
          },
        },
      },
    ],
  },
};
