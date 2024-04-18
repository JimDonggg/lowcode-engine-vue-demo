import dayjs from 'dayjs'

export default [
  {
    title: '时间线容器',
    screenshot: './images/timeline.png',
    schema: {
      componentName: 'ElTimeline',
      children: [
        {
          componentName: 'ElTimelineItem',
          props: {
            children: ['Start'],
            timestamp: dayjs().format('YYYY-MM-DD'),
          },
        },
      ],
    },
  }
]
