import { Snippet, FieldConfig } from '@alilc/lowcode-types'
export type Category = '基础' | '表单' | '数据展示' | '导航' | '反馈' | '布局'
interface ComponentMeta {
  [index: string]: {
    title: string
    category: Category
    isContainer?: boolean // 是否容器组件
    isModal?: boolean // 组件是否带浮层
    snippets?: Snippet[] // 只能手工写
    childrenProp?: boolean // 非自闭合标签需要一个children属性
    slots?: FieldConfig[]
  }
}
export enum CategoryEnum {
  'layout' = '布局',
  'base' = '基础',
  'form' = '表单',
  'data' = '数据展示',
  'nav' = '导航',
  'feedback' = '反馈',
}
const componentMetas: ComponentMeta = {
  NDataTable: {
    title: '表格',
    category: CategoryEnum.data,
    snippets: [
      {
        screenshot: '/images/table-1.png',
        title: '表格',
        schema: {
          componentName: 'NDataTable',
          props: {
            data: [
              { no: 3, title: 'Wonderwall', length: '4:18' },
              { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
              { no: 12, title: 'Champagne Supernova', length: '7:27' }
            ],
            columns: [{
              title: 'No',
              key: 'no'
            },
            {
              title: 'Title',
              key: 'title'
            },
            {
              title: 'Length',
              key: 'length'
            }],
            bordered: true,
            size: 'medium',
          }
        }
      }
    ]
  },
  // ElAffix: {
  //   title: '固钉',
  //   category: CategoryEnum.feedback,
  // },
  // ElAlert: {
  //   title: '提示',
  //   category: CategoryEnum.feedback,
  // },
  // ElAutocomplete: {
  //   title: '自动补全输入框',
  //   category: CategoryEnum.form,
  // },
  // ElAvatar: {
  //   title: '头像',
  //   category: CategoryEnum.data,
  // },
  // ElBacktop: {
  //   title: '回到顶部',
  //   category: CategoryEnum.nav,
  // },
  // ElBadge: {
  //   title: '徽章',
  //   category: CategoryEnum.data,
  //   isContainer: true,
  // },
  // ElBreadcrumb: {
  //   title: '面包屑',
  //   category: CategoryEnum.nav,
  //   isContainer: true,
  // },
  // ElBreadcrumbItem: {
  //   title: '面包屑项',
  //   category: CategoryEnum.nav,
  // },
  ElButton: {
    title: '按钮',
    category: CategoryEnum.base,
    childrenProp: true,
    snippets: [
      {
        title: '主按钮',
        screenshot:
          '/images/button-1.png',
        schema: {
          componentName: 'ElButton',
          props: {
            children: ['主按钮'],
            size: 'default',
            type: 'primary'
          },
        },
      },
      {
        title: '次按钮',
        screenshot:
          '/images/button-2.png',
        schema: {
          componentName: 'ElButton',
          props: {
            children: ['次按钮'],
            size: 'default',
          },
        },
      },
      {
        title: '危险按钮',
        screenshot:
          '/images/button-3.png',
        schema: {
          componentName: 'ElButton',
          props: {
            children: ['危险按钮'],
            size: 'danger',
          },
        },
      },
    ],
  },
  ElButtonGroup: {
    title: '按钮组',
    category: CategoryEnum.base,
    isContainer: true,
    snippets: [
      {
        title: '按钮组',
        schema: {
          componentName: 'ElButtonGroup',
          children: [
            {
              componentName: 'ElButton',
              props: {
                children: ['按钮1'],
              },
            },
            {
              componentName: 'ElButton',
              props: {
                children: ['按钮2'],
              },
            },
          ],
        },
      },
    ],
  },
  // ElCalendar: {
  //   title: '日历',
  //   category: CategoryEnum.data,
  // },
  ElCard: {
    title: '卡片',
    category: CategoryEnum.data,
    isContainer: true,
    snippets: [
      {
        title: '卡片',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/card-1.png',
        schema: {
          componentName: 'ElCard',
          props: {
            header: '我是标题',
          },
        },
      },
    ],
  },
  // ElCarousel: {
  //   title: '走马灯',
  //   category: CategoryEnum.data,
  //   isContainer: true,
  // },
  // ElCarouselItem: {
  //   title: '走马灯项',
  //   category: CategoryEnum.data,
  // },
  ElCascader: {
    title: '级联选择器',
    category: CategoryEnum.form,
    snippets: [
      {
        title: '级联选择',
        screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/cascader-1.png',
        schema: {
          componentName: 'ElCascader',
          props: {
            options: [
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        label: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ],
            placeholder: '请选择',
            separator: '/',
            tagType: 'info'
          },
        },
      },
    ]
  },
  ElCheckbox: {
    title: '多选框',
    category: CategoryEnum.form,
    childrenProp: true,
    snippets: [
      {
        title: '多选框',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/checkbox-1.png',
        schema: {
          componentName: 'ElCheckbox',
          props: {
            children: ['多选框'],
            label: 'value1',
          },
        },
      },
    ],
  },
  // ElCheckboxButton: {
  //   title: '按钮多选框',
  //   category: CategoryEnum.form,
  //   isContainer: true,
  // },
  ElCheckboxGroup: {
    title: '多选框组',
    category: CategoryEnum.form,
    isContainer: true,
    snippets: [
      {
        title: '多选框组',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/checkbox-group-1.png',
        schema: {
          componentName: 'ElCheckboxGroup',
          children: [
            {
              componentName: 'ElCheckbox',
              props: {
                children: ['多选框1'],
                size: 'default',
                label: 'value1',
              },
            },
            {
              componentName: 'ElCheckbox',
              props: {
                children: ['多选框2'],
                size: 'default',
                label: 'value2',
              },
            },
          ],
        },
      },
    ],
  },
  // ElCollapse: {
  //   title: '折叠面板',
  //   category: CategoryEnum.data,
  //   isContainer: true,
  // },
  // ElCollapseItem: {
  //   title: '折叠面板项',
  //   category: CategoryEnum.data,
  // },
  // ElAside: {
  //   title: '布局容器-侧边栏',
  //   category: CategoryEnum.layout,
  //   isContainer: true,
  // },
  // ElContainer: {
  //   title: '布局容器-外层容器',
  //   category: CategoryEnum.layout,
  //   isContainer: true,
  // },
  // ElFooter: {
  //   title: '布局容器-底栏',
  //   category: CategoryEnum.layout,
  //   isContainer: true,
  // },
  // ElHeader: {
  //   title: '布局容器-顶栏',
  //   category: CategoryEnum.layout,
  //   isContainer: true,
  // },
  // ElMain: {
  //   title: '布局容器-主要部分',
  //   category: CategoryEnum.layout,
  //   isContainer: true,
  // },
  ElDatePicker: {
    title: '日期选择器',
    category: CategoryEnum.form,
    snippets: [
      {
        title: '日期选择器',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-1.png',
        schema: {
          componentName: 'ElDatePicker',
          props: {
            editable: true,
            clearable: true,
            type: 'date',
            format: 'YYYY-MM-DD',
          },
        },
      },
      {
        title: '日期区间',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/date-picker-range-picker-1.png',
        schema: {
          componentName: 'ElDatePicker',
          props: {
            editable: true,
            clearable: true,
            type: 'daterange',
            format: 'YYYY-MM-DD',
          },
        },
      },
    ],
  },
  // ElDescriptions: {
  //   title: '',
  //   category: '',
  // },
  // ElDescriptionsItem: {
  //   title: '',
  //   category: '',
  // },
  ElDialog: {
    title: '弹窗',
    category: CategoryEnum.feedback,
    isContainer: true,
    isModal: true,
    snippets: [
      {
        title: '弹窗',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/modal-1.png',
        schema: {
          componentName: 'ElDialog',
          props: {
            title: '标题',
            top: '15vh',
            lockScroll: true,
            closeOnClickModal: true,
            closeOnPressEscape: true,
            showClose: true,
          },
          children: [],
        },
      },
    ],
  },
  // ElDivider: {
  //   title: '分割线',
  //   category: CategoryEnum.base,
  // },
  // ElDrawer: {
  //   title: '抽屉',
  //   category: CategoryEnum.feedback,
  // },
  // ElCollection: {
  //   title: '',
  //   category: '',
  // },
  // ElCollectionItem: {
  //   title: '',
  //   category: '',
  // },
  // ElDropdown: {
  //   title: '下拉菜单',
  //   category: CategoryEnum.nav,
  //   isContainer: true,
  // },
  // ElDropdownItem: {
  //   title: '下拉菜单项',
  //   category: CategoryEnum.nav,
  // },
  // ElDropdownMenu: {
  //   title: '',
  //   category: '',
  // },
  // ElEmpty: {
  //   title: '缺省',
  //   category: CategoryEnum.data,
  // },
  ElForm: {
    title: '表单',
    category: CategoryEnum.form,
    isContainer: true,
    snippets: [
      {
        screenshot:
          'https://helios-allpublic-1257616148.cos.ap-shanghai.myqcloud.com/img/form.png',
        title: '表单容器',
        schema: {
          componentName: 'ElForm',
          props: {
            labelWidth: '120',
            labelPosition: 'right'
          },
          children: [
            {
              componentName: 'ElFormItem',
              props: {
                label: '用户名',
              },
              children: [
                {
                  componentName: 'ElInput',
                  props: {
                    placeholder: '请输入用户名',
                  },
                },
              ],
            },
            {
              componentName: 'ElFormItem',
              props: {
                label: '密码',
              },
              children: [
                {
                  componentName: 'ElInput',
                  props: {
                    type: 'password',
                    placeholder: '请输入密码',
                  },
                },
              ],
            },
            {
              componentName: 'ElFormItem',
              props: {
                label: '',
              },
              children: [
                {
                  componentName: 'ElButton',
                  props: {
                    children: ['确定'],
                    size: 'default',
                    type: 'primary'
                  },
                },
                {
                  componentName: 'ElButton',
                  props: {
                    children: ['取消'],
                    size: 'default',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        screenshot:
          'https://helios-allpublic-1257616148.cos.ap-shanghai.myqcloud.com/img/form.png',
        title: '列表搜索框',
        schema: {
          componentName: 'ElForm',
          props: {
            labelWidth: '120',
            labelPosition: 'right',
            inline: true,
          },
          children: [
            {
              componentName: 'ElFormItem',
              props: {
                label: '用户名',
              },
              children: [
                {
                  componentName: 'ElInput',
                  props: {
                    placeholder: '请输入用户名',
                  },
                },
              ],
            },
            {
              componentName: 'ElFormItem',
              props: {
                label: '密码',
              },
              children: [
                {
                  componentName: 'ElInput',
                  props: {
                    type: 'password',
                    placeholder: '请输入密码',
                  },
                },
              ],
            },
            {
              componentName: 'ElFormItem',
              props: {
                label: '',
              },
              children: [
                {
                  componentName: 'ElButton',
                  props: {
                    children: ['搜索'],
                    size: 'default',
                    type: 'primary'
                  },
                },
                {
                  componentName: 'ElButton',
                  props: {
                    children: ['重置'],
                    size: 'default',
                  },
                },
              ],
            },
          ],
        },
      },
    ],
  },
  ElFormItem: {
    title: '表单项',
    category: CategoryEnum.form,
    isContainer: true,
    snippets: [
      {
        screenshot:
          'https://helios-allpublic-1257616148.cos.ap-shanghai.myqcloud.com/img/input.png',
        title: '表单项',
        schema: {
          componentName: 'ElFormItem',
          props: {
            label: '标签',
            showMessage: true,
          },
          children: [
            {
              componentName: 'ElInput',
            },
          ],
        },
      },
    ],
  },
  ElIcon: {
    title: '图标',
    category: CategoryEnum.base,
  },
  // ElImage: {
  //   title: '图片',
  //   category: CategoryEnum.data,
  // },
  // ElImageViewer: {
  //   title: '图片预览',
  //   category: CategoryEnum.data,
  // },
  ElInput: {
    title: '输入框',
    category: CategoryEnum.form,
    snippets: [
      {
        title: '输入框',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/input-1.png',
        schema: {
          componentName: 'ElInput',
          props: {
            placeholder: '请输入',
          },
        },
      },
    ],
  },
  // ElInputNumber: {
  //   title: '数字输入框',
  //   category: CategoryEnum.form,
  // },
  // ElLink: {
  //   title: '链接',
  //   category: CategoryEnum.base,
  //   childrenProp: true,
  // },
  // ElMenu: {
  //   title: '',
  //   category: '',
  // },
  // ElMenuItem: {
  //   title: '',
  //   category: '',
  // },
  // ElMenuItemGroup: {
  //   title: '',
  //   category: '',
  // },
  // ElSubMenu: {
  //   title: '',
  //   category: '',
  // },
  // ElOverlay: {
  //   title: '',
  //   category: '',
  // },
  // ElPageHeader: {
  //   title: '',
  //   category: '',
  // },
  // ElPagination: {
  //   title: '分页',
  //   category: CategoryEnum.data,
  // },
  // ElPopconfirm: {
  //   title: '弹出确认框',
  //   category: CategoryEnum.feedback,
  // },
  // ElPopperArrow: {
  //   title: '',
  //   category: '',
  // },
  // ElPopperTrigger: {
  //   title: '',
  //   category: '',
  // },
  // ElPopperContent: {
  //   title: '',
  //   category: '',
  // },
  // ElPopper: {
  //   title: '气泡卡片',
  //   category: CategoryEnum.feedback,
  // },
  // ElProgress: {
  //   title: '进度条',
  //   category: CategoryEnum.data,
  // },
  ElRadio: {
    title: '单选框',
    category: CategoryEnum.form,
    childrenProp: true,
    snippets: [
      {
        title: '单选框',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/radio-1.png',
        schema: {
          componentName: 'ElRadio',
          props: {
            children: ['单选框'],
            label: 'value',
          },
        },
      },
    ],
  },
  // ElRadioButton: {
  //   title: '单选按钮',
  //   category: CategoryEnum.form,
  //   isContainer: true,
  // },
  ElRadioGroup: {
    title: '单选按钮组',
    category: CategoryEnum.form,
    isContainer: true,
    snippets: [
      {
        title: '单选按钮组',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/radio-group-1.png',
        schema: {
          componentName: 'ElRadioGroup',
          children: [
            {
              componentName: 'ElRadio',
              props: {
                children: ['单选框1'],
                label: 'value1',
              },
            },
            {
              componentName: 'ElRadio',
              props: {
                children: ['单选框2'],
                label: 'value2',
              },
            },
          ],
        },
      },
    ],
  },
  // ElRate: {
  //   title: '评分',
  //   category: CategoryEnum.form,
  // },
  // ElResult: {
  //   title: '结果',
  //   category: CategoryEnum.data,
  // },
  ElRow: {
    title: '行',
    category: CategoryEnum.layout,
    isContainer: true,
    snippets: [
      {
        title: '两栏',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-1.png',
        schema: {
          componentName: 'ElRow',
          props: {},
          children: [
            {
              componentName: 'ElCol',
              props: {
                span: 12,
              },
            },
            {
              componentName: 'ElCol',
              props: {
                span: 12,
              },
            },
          ],
        },
      },
      {
        title: '三栏',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-1-1.png',
        schema: {
          componentName: 'ElRow',
          props: {},
          children: [
            {
              componentName: 'ElCol',
              props: {
                span: 8,
              },
            },
            {
              componentName: 'ElCol',
              props: {
                span: 8,
              },
            },
            {
              componentName: 'ElCol',
              props: {
                span: 8,
              },
            },
          ],
        },
      },
      {
        title: '四栏',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/1-1-1-1.png',
        schema: {
          componentName: 'ElRow',
          props: {},
          children: [
            {
              componentName: 'ElCol',
              props: {
                span: 6,
              },
            },
            {
              componentName: 'ElCol',
              props: {
                span: 6,
              },
            },
            {
              componentName: 'ElCol',
              props: {
                span: 6,
              },
            },
            {
              componentName: 'ElCol',
              props: {
                span: 6,
              },
            },
          ],
        },
      },
    ],
  },
  ElCol: {
    title: '列',
    category: CategoryEnum.layout,
    isContainer: true,
    snippets: [],
  },
  // ElScrollbar: {
  //   title: '',
  //   category: '',
  // },
  // ElOptionGroup: {
  //   title: '',
  //   category: '',
  // },
  ElSelect: {
    title: '选择框',
    category: CategoryEnum.form,
    isContainer: true,
    snippets: [
      {
        title: '选择框',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
        schema: {
          componentName: 'ElSelect',
          children: [
            {
              componentName: 'ElOption',
              props: {
                label: '选项1',
                value: 'value1',
              },
            },
            {
              componentName: 'ElOption',
              props: {
                label: '选项2',
                value: 'value2',
              },
            },
          ],
        },
      },
    ],
  },
  ElOption: {
    title: '选择框项',
    category: CategoryEnum.form,
    snippets: [
      {
        title: '选择框项',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/select-1.png',
        schema: {
          componentName: 'ElOption',
          props: {
            label: '选项1',
            value: 'value1',
          },
        },
      },
    ],
  },
  // ElSelectV2: {
  //   title: '虚拟列表选择器',
  //   category: CategoryEnum.form,
  // },
  // ElSkeleton: {
  //   title: '',
  //   category: '',
  // },
  // ElSkeletonItem: {
  //   title: '',
  //   category: '',
  // },
  // ElSlider: {
  //   title: '滑块',
  //   category: CategoryEnum.form,
  // },
  ElSpace: {
    title: '间距',
    category: CategoryEnum.layout,
    isContainer: true,
  },
  // ElSteps: {
  //   title: '步骤条',
  //   category: CategoryEnum.nav,
  // },
  // ElStep: {
  //   title: '',
  //   category: '',
  // },
  // ElSwitch: {
  //   title: '开关',
  //   category: CategoryEnum.form,
  // },
  // ElTable: {
  //   title: '表格',
  //   category: CategoryEnum.data,
  //   isContainer: true,
  // },
  // ElTableColumn: {
  //   title: '表格列',
  //   category: CategoryEnum.data,
  //   slots: [getSlotSetter('header'), getSlotSetter('default')],
  // },
  // ElAutoResizer: {
  //   title: '',
  //   category: '',
  // },
  // ElTableV2: {
  //   title: '虚拟化表格',
  //   category: CategoryEnum.data,
  // },
  ElTabPane: {
    title: '标签面板',
    category: CategoryEnum.nav,
    isContainer: true,
    snippets: [
      {
        title: 'tab面板',
        schema: {
          componentName: 'ElTabPane',
          props: {
            label: '标签项',
            name: 'tab',
          },
        },
      },
    ],
  },
  ElTabs: {
    title: '标签页',
    category: CategoryEnum.nav,
    isContainer: true,
    snippets: [
      {
        title: 'tab-普通',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-1.jpg',
        schema: {
          componentName: 'ElTabs',
          props: {
            activeName: 'tab-item-1',
            tabPosition: 'top',
          },
          children: [
            {
              componentName: 'ElTabPane',
              props: {
                label: '标签项1',
                name: 'tab-item-1',
              },
            },
            {
              componentName: 'ElTabPane',
              props: {
                label: '标签项2',
                name: 'tab-item-2',
              },
            },
          ],
        },
      },
      {
        title: 'tab-卡片',
        screenshot:
          'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/tabs-2.jpg',
        schema: {
          componentName: 'ElTabs',
          props: {
            type: 'card',
          },
          children: [
            {
              componentName: 'ElTabPane',
              props: {
                label: '标签项1',
                name: 'tab-item-1',
              },
            },
            {
              componentName: 'ElTabPane',
              props: {
                label: '标签项2',
                name: 'tab-item-2',
              },
            },
          ],
        },
      },
    ],
  },
  // ElTag: {
  //   title: '标签',
  //   category: CategoryEnum.data,
  // },
  // ElTimePicker: {
  //   title: '时间选择器',
  //   category: CategoryEnum.form,
  // },
  // ElTimeSelect: {
  //   title: '时间选择',
  //   category: CategoryEnum.form,
  // },
  // ElTimeline: {
  //   title: '时间线',
  //   category: CategoryEnum.data,
  // },
  // ElTimelineItem: {
  //   title: '时间线项',
  //   category: CategoryEnum.data,
  // },
  // ElTooltip: {
  //   title: '文字提示',
  //   category: CategoryEnum.feedback,
  // },
  // ElTransfer: {
  //   title: '穿梭框',
  //   category: CategoryEnum.form,
  // },
  // ElTree: {
  //   title: '树形控件',
  //   category: CategoryEnum.data,
  // },
  // ElTreeSelect: {
  //   title: '树形选择器',
  //   category: CategoryEnum.data,
  // },
  // ElTreeV2: {
  //   title: '虚拟化树形控件',
  //   category: CategoryEnum.data,
  // },
  // ElUpload: {
  //   title: '文件上传',
  //   category: CategoryEnum.form,
  // },
  // ElInfiniteScroll: {
  //   title: '',
  //   category: '',
  // },
  // ElLoading: {
  //   title: '',
  //   category: '',
  // },
  // ElLoadingDirective: {
  //   title: '',
  //   category: '',
  // },
  // ElLoadingService: {
  //   title: '',
  //   category: '',
  // },
  // ElMessage: {
  //   title: '',
  //   category: '',
  // },
  // ElMessageBox: {
  //   title: '',
  //   category: '',
  // },
  // ElNotification: {
  //   title: '',
  //   category: '',
  // },
  // ElPopover: {
  //   title: '',
  //   category: '',
  // },
  // ElPopoverDirective: {
  //   title: '',
  //   category: '',
  // },
}

function getSlotSetter(slotName: string, title?: string): FieldConfig {
  title = title ? title : slotName + '-slot'
  return {
    name: slotName,
    title: title,
    setter: {
      componentName: 'SlotSetter',
      initialValue: {
        type: 'JSSlot',
        title: title,
        value: [],
      },
    },
  }
}
export default componentMetas
