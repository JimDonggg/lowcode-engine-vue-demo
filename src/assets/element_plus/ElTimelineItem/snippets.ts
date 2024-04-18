import dayjs from 'dayjs'

export default [
  {
    title: '时间线',
    screenshot: './images/timeline-item.png',
    schema: {
      componentName: 'ElTimelineItem',
      props: {
        timestamp: dayjs().format('YYYY-MM-DD'),
        children: ['Content'],
      },
    },
  },
]
