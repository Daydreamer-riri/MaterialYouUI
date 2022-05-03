import type { App } from 'vue'
import Header from './Header.vue'

Header.install = (app: App) => {
    app.component(Header.name, Header)
}

export const _HeaderComponent = Header

export default Header
