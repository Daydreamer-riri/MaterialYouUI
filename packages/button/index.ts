import type { App } from 'vue'
import Button from './Button.vue'

Button.install = function (app: App) {
  app.component(Button.name, Button)
}

export const _ButtonComponent = Button

export type { ButtonProps, ButtonType } from './props'

export default Button
