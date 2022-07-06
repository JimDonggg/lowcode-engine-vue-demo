export default {
  category: '布局',
  componentName: 'ElRow',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElRow',
    destructuring: true,
  },
  props: [
    {
      name: 'tag',
      propType: 'string',
      title: 'tag',
      setter: 'StringSetter',
    },
    {
      name: 'gutter',
      propType: 'number',
      title: '栅格间隔',
      setter: false,
    },
    {
      name: 'justify',
      propType: 'string',
      title: 'flex 水平排列',
      setter: 'StringSetter',
    },
    {
      name: 'align',
      propType: 'string',
      title: 'flex 垂直排列',
      setter: 'StringSetter',
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
  keywords: 'ElRow',
};
