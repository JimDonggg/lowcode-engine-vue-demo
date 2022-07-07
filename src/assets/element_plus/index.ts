import {
  AssetsJson,
  ComponentDescription,
  ComponentCategory,
} from '@alilc/lowcode-types';
import componentMetas, { CategoryEnum } from './componentMetas';
import ElButton from './ElButton';
import ElButtonGroup from './ElButton/ElButtonGroup';
import ElCard from './ElCard';
import ElInput from './ElInput';
import NDataTable from '../naive_ui/NDataTable';
import ElCheckbox from './ElCheckbox';
import ElCheckboxGroup from './ElCheckbox/ElCheckboxGroup';
import ElDatePicker from './ElDatePicker';
import ElRadio from './ElRadio';
import ElRadioGroup from './ElRadio/ElRadioGroup';
import ElForm from './ElForm';
import ElFormItem from './ElForm/ElFormItem';
import ElSelect from './ElSelect';
import ElOptions from './ElSelect/ElOptions';
import ElTabs from './ElTabs';
import ElTabPane from './ElTabs/ElTabPane';
import ElIcon from './ElIcon';
import ElDialog from './ElDialog';
import ElRow from './ElRow';
import ElCol from './ElRow/ElCol';
import ElSpace from './ElSpace';
export default main();
function main() {
  const components = [
    ElButton,
    ElButtonGroup,
    NDataTable,
    ElCard,
    ElDatePicker,
    ElInput,
    ElCheckbox,
    ElCheckboxGroup,
    ElRadio,
    ElRadioGroup,
    ElSelect,
    ElOptions,
    ElForm,
    ElFormItem,
    ElTabs,
    ElTabPane,
    ElIcon,
    ElDialog,
    ElRow,
    ElCol,
    ElSpace,
  ];
  const componentList = generateComponentList(components);
  const assets: AssetsJson = {
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
    ],
    components,
    componentList,
  };
  console.log('assets', assets);
  return assets;
}

function generateComponentList(
  components: Array<ComponentDescription>
): ComponentCategory[] {
  const componentList: ComponentCategory[] = [];
  for (const category in CategoryEnum) {
    const componentCategory: ComponentCategory = {
      title: CategoryEnum[category],
      children: components
        .filter((com) => com.category === CategoryEnum[category])
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
