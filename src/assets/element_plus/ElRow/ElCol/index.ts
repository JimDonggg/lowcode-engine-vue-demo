export default {
  category: '布局',
  componentName: 'ElCol',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElCol',
    destructuring: true,
  },
  props: [
    // {
    //   name: 'tag',
    //   propType: 'string',
    //   title: 'tag',
    //   setter: 'StringSetter',
    // },
    {
      name: 'span',
      propType: 'number',
      title: '栅格列数',
      setter: false,
    },
    {
      name: 'offset',
      propType: 'number',
      title: '左侧的间隔格数',
    },
    {
      name: 'pull',
      propType: 'number',
      title: '栅格向左移动格数',
    },
    {
      name: 'push',
      propType: 'number',
      title: '栅格向右移动格数',
    },
    {
      name: 'xs',
      propType: {
        type: 'oneOfType',
        value: ['number'],
      },
      title: 'xs',
      setter: false,
    },
    {
      name: 'sm',
      propType: {
        type: 'oneOfType',
        value: ['number'],
      },
      title: 'sm',
      setter: false,
    },
    {
      name: 'md',
      propType: {
        type: 'oneOfType',
        value: ['number'],
      },
      title: 'md',
      setter: false,
    },
    {
      name: 'lg',
      propType: {
        type: 'oneOfType',
        value: ['number'],
      },
      title: 'lg',
      setter: false,
    },
    {
      name: 'xl',
      propType: {
        type: 'oneOfType',
        value: ['number'],
      },
      title: 'xl',
      setter: false,
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
  keywords: 'ElCol',
};
