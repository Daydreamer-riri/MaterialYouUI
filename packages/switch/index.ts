// import MSwitch from './Switch.vue'
import type { App } from 'vue'
import MSwitch from './Switch.vue'

MSwitch.install = (app: App) => {
  app.component(MSwitch.name, MSwitch)
}

export default MSwitch
