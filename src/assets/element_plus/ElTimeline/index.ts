import snippets from './snippets'

export default {
  group: '基础组件',
  category: '数据展示',
  componentName: 'ElTimeline',
  title: '时间线容器',
  npm: {
    package: 'element-plus',
    version: '2.2.6',
    exportName: 'ElTimeline',
    destructuring: true,
  },
  props: [
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
      nestingRule: {
        childWhitelist: ['ElTimelineItem'],
      },
    },
  },
  snippets,
  keywords: 'ElTimeline',
}
