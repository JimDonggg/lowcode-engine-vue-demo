import iconSelectSetter from '../setter/iconSelectSetter';
import snippets from './snippets';

export default {
  group: '基础组件',
  category: '数据展示',
  componentName: 'ElTimelineItem',
  title: '时间线',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElTimelineItem',
    destructuring: true,
  },
  props: [
    {
      name: 'timestamp',
      propType: 'string',
      title: '时间戳',
      setter: 'StringSetter',
    },
    {
      name: 'hide-timestamp',
      propType: 'bool',
      title: '是否隐藏时间戳',
      setter: 'BoolSetter',
    },
    {
      name: 'center',
      propType: 'bool',
      title: '是否垂直居中',
      setter: 'BoolSetter',
    },
    {
      name: 'placement',
      propType: 'string',
      title: '时间戳位置',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '时间戳居上',
                value: 'top',
              },
              {
                title: '时间戳居下',
                value: 'bottom',
              }
            ]
          }
        },
        'VariableSetter',
      ]
    },
    {
      name: 'type',
      propType: 'string',
      title: '节点类型',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '默认',
                value: '',
              },
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
              {
                title: '信息',
                value: 'info',
              },
            ],
          },
        },
        'VariableSetter',
      ],
    },
    {
      name: 'color',
      propType: 'string',
      title: '节点颜色',
      setter: 'ColorSetter',
    },
    {
      name: 'size',
      propType: 'string',
      title: '节点尺寸',
      setter: [
        {
          componentName: 'SelectSetter',
          props: {
            options: [
              {
                title: '正常',
                value: 'normal',
              },
              {
                title: '大',
                value: 'large',
              }
            ]
          }
        },
        'VariableSetter',
      ]
    },
    {
      name: 'icon',
      propType: 'string',
      title: '自定义图标',
      setter: iconSelectSetter,
    },
    {
      name: 'hollow',
      propType: 'bool',
      title: '是否空心点',
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      style: false,
      loop: true,
      events: false,
    },
    component: {
      isContainer: true,
      isModal: false,
    },
  },
  snippets,
  keywords: 'ElTimelineItem',
};
