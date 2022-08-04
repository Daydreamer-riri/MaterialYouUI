import { App, AppContext, createVNode, render } from 'vue'
import type { DialogConfig } from './props'

import _MDialog from './Dialog.vue'

import { getSlotFunction } from '@packages/utils/vue-utils'
import { omit } from '@packages/utils/utils'
import { getOverlay } from '@packages/utils/elements'
import { isFunction } from '@packages/utils/share'

const open = (config: DialogConfig, appContext?: AppContext) => {
  let container: HTMLElement | null = getOverlay('modal')

  const handleOk = () => {
    if (vm.component) {
      vm.component.props.visible = false
    }

    if (isFunction(config.onOk)) {
      config.onOk()
    }
  }

  const handleCancel = () => {
    if (vm.component) {
      vm.component.props.visible = false
    }

    if (isFunction(config.onCancel)) {
      config.onCancel()
    }
  }

  const handleClose = () => {
    if (container) {
      render(null, container)
      document.body.removeChild(container)
    }

    container = null

    if (isFunction(config.onClose)) {
      config.onClose()
    }
  }

  const defaultConfig = {
    visible: true,
    // renderToBody: false,
    onOk: handleOk,
    onCancel: handleCancel,
    onClose: handleClose,
  }

  const vm = createVNode(
    _MDialog,
    {
      ...omit(config, ['title', 'content', 'actions']),
      ...defaultConfig,
    },
    {
      default: getSlotFunction(config.content),
      title: getSlotFunction(config.title),
      actions: config.actions ? getSlotFunction(config.actions) : undefined,
    }
  )

  // TODO: 上下文

  render(vm, container)
  document.body.appendChild(container)

  return {
    close: handleClose,
  }
}

// const dialog = {
//   open,
//   confirm:()
// }

const MDialog = Object.assign(_MDialog, {
  open,
  install: (app: App) => {
    app.component(_MDialog.name, _MDialog)
  },
})

// MDialog.install = (app: App) => {
//   app.component(MDialog.name, MDialog)
// }

export default MDialog
