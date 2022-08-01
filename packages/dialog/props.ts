import type { PropType } from 'vue'

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
}
