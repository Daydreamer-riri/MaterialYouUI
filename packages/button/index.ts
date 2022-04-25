import type { App } from 'vue'
import Button from './Button.vue'

Button.install = function (app: App) {
    app.component(Button.name, Button)
}

// 待理解
export const _ButtonComponent = Button

export default Button
