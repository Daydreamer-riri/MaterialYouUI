import type { App } from 'vue'
import IconButton from './IconButton.vue'

IconButton.install = function (app: App) {
    app.component(IconButton.name, IconButton)
}

export const _IconButtonComponent = IconButton

export default IconButton
