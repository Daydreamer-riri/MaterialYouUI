import { defineClientAppEnhance } from '@vuepress/client'
import BasicUse from './components/button/BasicUse.vue'
import IconButton from './components/button/IconButton.vue'
import DisabledButton from './components/button/DisabledButton.vue'
import IconUse from './components/icon/IconUse.vue'
import IconSize from './components/icon/IconSize.vue'
import IconFill from './components/icon/IconFill.vue'
import SpaceUse from './components/space/SpaceUse.vue'

export default defineClientAppEnhance(({ app }) => {
    app.component('basic-use', BasicUse)
    app.component('icon-button', IconButton)
    app.component('disabled-button', DisabledButton)
    app.component('icon-use', IconUse)
    app.component('icon-size', IconSize)
    app.component('icon-fill', IconFill)
    app.component('space-use', SpaceUse)
})
