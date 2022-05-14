import type { App } from 'vue'
import Divider from './Divider.vue'

Divider.install = function (app: App) {
    app.component(Divider.name, Divider)
}

export const _DividerComponent = Divider

export default Divider
