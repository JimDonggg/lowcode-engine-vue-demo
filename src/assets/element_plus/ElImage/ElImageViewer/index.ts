export default {
  category: '数据展示',
  componentName: 'ElImageViewer',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElImageViewer',
    destructuring: true,
  },
  props: [
    {
      name: 'urlList',
      propType: 'array',
      title: '图片链接列表',
      defaultValue: [],
      setter: 'JsonSetter',
    },
    {
      name: 'zIndex',
      propType: 'number',
      title: {
        label: '遮罩层级',
        tip: 'z-index',
      },
      setter: 'NumberSetter',
    },
    {
      name: 'initialIndex',
      propType: 'number',
      title: '初始预览图像索引',
      defaultValue: 0,
      setter: 'NumberSetter',
    },
    {
      name: 'infinite',
      propType: 'bool',
      title: '无限循环预览',
      setter: 'BoolSetter',
      defaultValue: true,
    },
    {
      name: 'hideOnClickModal',
      propType: 'bool',
      title: '点击遮罩层关闭',
      setter: 'BoolSetter',
    },
    // {
    //   name: 'teleported',
    //   propType: 'bool',
    //   title: 'teleported',
    //   setter: 'BoolSetter',
    // },
    // {
    //   name: 'closeOnPressEscape',
    //   propType: 'bool',
    //   title: 'ESC关闭',
    //   setter: 'BoolSetter',
    // },
  ],
  configure: {
    supports: {
      style: true,
      loop: true,
      events: ['onClose', 'onSwitch'],
    },
    component: {
      isContainer: false,
      isModal: false,
    },
  },
  keywords: 'ElImageViewer',
};
