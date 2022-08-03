import type { CSSProperties, PropType } from 'vue'
import type { ButtonProps } from '@packages/button'

export default {
  visible: {
    type: Boolean,
    default: undefined,
  },

  defaultVisible: {
    type: Boolean,
    default: false,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  popupContainer: {
    type: [String, Object] as PropType<string | HTMLElement>,
    default: 'body',
  },
  dialogClass: {
    type: String,
  },
  dialogStyle: {
    type: Object as PropType<CSSProperties>,
  },
  maskAnimationName: {
    type: String,
    default: (props: Record<string, any>) => {
      if (props.fullscreen) {
        return 'fade-in-standard'
      }
      return 'fade-modal'
    },
  },

  modalAnimationName: {
    type: String,
    default: (props: Record<string, any>) => {
      if (props.fullscreen) {
        return 'zoom-in'
      }
      return 'slide-modal'
    },
  },
  width: {
    type: [Number, String],
  },
  top: {
    type: [Number, String],
  },
  left: {
    type: [Number, String],
  },
  mask: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
  },

  unmountOnClose: Boolean,

  maskClosable: {
    type: Boolean,
    default: true,
  },
  maskStyle: {
    type: Object as PropType<CSSProperties>,
  },

  okButtonFilled: {
    type: Boolean,
    default: false,
  },

  okText: {
    type: String,
    default: 'OK',
  },

  cancelText: {
    type: String,
    default: 'Cancel',
  },

  okButtonProps: {
    type: Object as PropType<ButtonProps>,
  },

  cancelButtonProps: {
    type: Object as PropType<ButtonProps>,
  },

  okLoading: {
    type: Boolean,
    default: false,
  },

  withIcon: {
    type: String,
  },

  onBeforeOk: {
    type: [Function, Array] as PropType<(done: (closed: boolean) => void) => void | boolean>,
  },
  /**
   * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
   * @en The callback function before the cancel event is triggered. If it returns false, no subsequent events will be triggered.
   * @version 2.7.0
   */
  onBeforeCancel: {
    type: [Function, Array] as PropType<() => boolean>,
  },
}

export interface DialogConfig {
  title?: string
}

export interface ModalConfig {
  title?: string

  content: string

  okText?: string

  cancelText?: string

  okButtonProps?: ButtonProps

  cancelButtonProps?: ButtonProps

  okLoading?: boolean

  hideCancel?: boolean

  mask?: boolean

  maskClosable?: boolean

  maskStyle?: CSSProperties

  /**
   * @zh 是否开启全屏
   */
  fullscreen?: boolean
  /**
   * @zh 点击确定按钮的回调函数
   */
  onOk?: () => void
  /**
   * @zh 点击取消按钮的回调函数
   */
  onCancel?: () => void
  /**
   * @zh 触发 ok 事件前的回调函数。如果返回 false 则不会触发后续事件，也可使用 done 进行异步关闭。
   */
  onBeforeOk?: (done: (closed: boolean) => void) => void | boolean
  /**
   * @zh 触发 cancel 事件前的回调函数。如果返回 false 则不会触发后续事件。
   */
  onBeforeCancel?: () => boolean
  /**
   * @zh 对话框打开后（动画结束）触发
   */
  onOpen?: () => void
  /**
   * @zh 对话框关闭后（动画结束）触发
   */
  onClose?: () => void
  /**
   * @zh 对话框打开前触发
   */
  onBeforeOpen?: () => void
  /**
   * @zh 对话框关闭前触发
   */
  onBeforeClose?: () => void
  /**
   * @zh 对话框的宽度，不设置的情况下会使用样式中的宽度值
   */
  width?: number | string
  /**
   * @zh 对话框的距离顶部的高度，居中显示开启的情况下不生效
   */
  top?: number | string
  // renderToBody?: boolean
  /**
   * @zh 弹出框的挂载容器
   */
  popupContainer?: string | HTMLElement
  /**
   * @zh 对话框的类名
   * @en The classname of the modal
   */
  dialogClass?: string | any[]
  /**
   * @zh 对话框的样式
   */
  dialogStyle?: CSSProperties
  /**
   * @zh 遮罩层动画名字
   */
  maskAnimationName?: string
  /**
   * @zh 对话框动画名字
   */
  modalAnimationName?: string
}
