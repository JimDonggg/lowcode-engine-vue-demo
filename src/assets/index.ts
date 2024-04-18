import {
  IPublicTypeAssetsJson,
  IPublicTypeComponentMetadata,
} from '@alilc/lowcode-types';
import componentMetas, { CategoryEnum } from './componentMetas';

import element_plus from './element_plus';
import naive_ui from './naive_ui';
export default main();
function main() {
  const components = [...naive_ui, ...element_plus];
  const componentList = generateComponentList(components);
  const assets: IPublicTypeAssetsJson = {
    version: '2.2.6',
    packages: [
      {
        package: 'vue',
        version: '3.2.33',
        urls: ['https://unpkg.com/vue@3.2.37/dist/vue.runtime.global.js'],
        library: 'Vue',
      },
      {
        package: 'element-plus',
        version: '2.2.6',
        urls: ['//unpkg.com/element-plus', '//unpkg.com/element-plus/dist/index.css'],
        library: 'ElementPlus',
      },
      {
        package: 'naive-ui',
        version: '2.30.6',
        urls: ['https://unpkg.com/naive-ui@2.30.6/dist/index.prod.js'],
        library: 'naive',
      },
      {
        package: '@element-plus/icons-vue',
        version: '2.2.6',
        urls: ['//unpkg.com/@element-plus/icons-vue'],
        library: 'ElementPlusIconsVue',
      },
    ],
    components,
    componentList,
  };
  return assets;
}

function generateComponentList(components: Array<IPublicTypeComponentMetadata>): any[] {
  const componentList: any[] = [];
  for (const category in CategoryEnum) {
    const componentCategory: any = {
      title: CategoryEnum[category],
      children: components
        .filter((com) => {
          return (
            com.category === CategoryEnum[category] && componentMetas[com.componentName]
          );
        })
        .map((component) => {
          return {
            componentName: component.componentName,
            library: component.npm?.package,
            title: componentMetas[component.componentName].title,
            snippets: componentMetas[component.componentName].snippets,
          };
        }),
    };
    componentList.push(componentCategory);
  }
  return componentList;
}
