import type { App } from 'vue'
import MDialog from './Dialog.vue'

MDialog.install = (app: App) => {
  app.component(MDialog.name, MDialog)
}

export default MDialog
