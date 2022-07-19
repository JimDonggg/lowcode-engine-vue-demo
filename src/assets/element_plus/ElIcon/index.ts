import iconSetter from '@/assets/element_plus/setter/iconSetter';
export default {
  category: '基础',
  componentName: 'ElIcon',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElIcon',
    destructuring: true,
  },
  props: [
    {
      name: 'children',
      description: '图标',
      propType: 'string',
      setter: iconSetter,
    },
    {
      name: 'size',
      propType: 'number',
      title: '尺寸',
    },
    {
      name: 'color',
      propType: 'string',
      title: '颜色',
      setter: 'ColorSetter',
      defaultValue: '#000000',
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
  keywords: 'ElIcon',
};
