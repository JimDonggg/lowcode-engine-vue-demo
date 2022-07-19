import simulator, { vueRendererConfig } from '@knxcloud/lowcode-vue-simulator-renderer';
import tools from '../utils/tools';
import { ConfigProvider } from './config-provider';
tools(simulator.app);
vueRendererConfig.setConfigProvider(ConfigProvider);
