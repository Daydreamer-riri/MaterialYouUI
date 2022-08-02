import type { CSSProperties, PropType } from 'vue'

export default {
  /**
   * @zh 对话框是否可见
   * @en Whether the modal is visible
   * @vModel
   */
  visible: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @zh 对话框默认是否可见（非受控状态）
   * @en Whether the modal is visible by default (uncontrolled state)
   */
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
  okBtnFilled: {
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
    type: Object,
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
