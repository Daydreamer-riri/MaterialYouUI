import { defineClientAppEnhance } from '@vuepress/client'
import BasicUse from './components/button/BasicUse.vue'
import IconButton from './components/button/IconButton.vue'
import DisabledButton from './components/button/DisabledButton.vue'
import RippleDisabled from './components/button/ButtonRippleDisabled.vue'
import IconUse from './components/icon/IconUse.vue'
import IconSize from './components/icon/IconSize.vue'
import IconFill from './components/icon/IconFill.vue'
import SpaceUse from './components/space/SpaceUse.vue'
import RippleUse from './components/ripple/RippleUse.vue'
import RippleColor from './components/ripple/RippleColor.vue'
import IcomButtonUse from './components/icon-button/IconButtonUse.vue'
import FABType from './components/FAB/FABType.vue'
import FABSize from './components/FAB/FABSize.vue'
import FABDisabled from './components/FAB/FABDisabled.vue'
import FABNoRipple from './components/FAB/FABNoRipple.vue'
import FABSlot from './components/FAB/FABSlot.vue'

export default defineClientAppEnhance(({ app }) => {
    app.component('basic-use', BasicUse)
    app.component('icon-button', IconButton)
    app.component('disabled-button', DisabledButton)
    app.component('icon-use', IconUse)
    app.component('icon-size', IconSize)
    app.component('icon-fill', IconFill)
    app.component('space-use', SpaceUse)
    app.component('ripple-use', RippleUse)
    app.component('ripple-color', RippleColor)
    app.component('icon-button-use', IcomButtonUse)
    app.component('ripple-disabled', RippleDisabled)
    app.component('fab-type', FABType)
    app.component('fab-size', FABSize)
    app.component('fab-disabled', FABDisabled)
    app.component('fab-noripple', FABNoRipple)
    app.component('fab-slot', FABSlot)
})
