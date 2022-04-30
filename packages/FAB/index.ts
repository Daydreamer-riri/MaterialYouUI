import type { App } from 'vue'
import FAB from './FAB.vue'

FAB.install = (app: App) => {
    app.component(FAB.name, FAB)
}

export const _FABComponent = FAB

export default FAB
