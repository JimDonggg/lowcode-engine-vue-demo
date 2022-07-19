import iconList from '@/assets/element_plus/setter/utils/iconList';

function generateIconList() {
  const componentlist: {
    category: string;
    componentName: string;
    npm: { package: string; version: string; exportName: string; destructuring: boolean };
    props: any[];
    configure: { supports: { style: boolean; loop: boolean; events: never[] } };
    keywords: string;
  }[] = [];
  iconList.forEach((item) => {
    componentlist.push({
      category: '基础',
      componentName: item,
      npm: {
        package: '@element-plus/icons-vue',
        version: '2.2.6',
        exportName: item,
        destructuring: true,
      },
      props: [
        {
          name: 'width',
          propType: 'string',
          title: '尺寸',
          defaultValue: '20',
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
          style: false,
          loop: true,
          events: [],
        },
      },
      keywords: item,
    });
  });
  return componentlist;
}
const list = generateIconList();
export default list;
