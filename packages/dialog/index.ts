import type { App } from 'vue'
import MDialog from './Dialog.vue'

// const open = ()

MDialog.install = (app: App) => {
  app.component(MDialog.name, MDialog)
}

export default MDialog
