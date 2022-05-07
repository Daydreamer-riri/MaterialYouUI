import { defineClientAppEnhance } from '@vuepress/client'
import BasicUse from '../guide/components/button/BasicUse.vue'
import IconButton from '../guide/components/button/IconButton.vue'
import DisabledButton from '../guide/components/button/DisabledButton.vue'
import RippleDisabled from '../guide/components/button/ButtonRippleDisabled.vue'
import IconUse from '../guide/components/icon/IconUse.vue'
import IconSize from '../guide/components/icon/IconSize.vue'
import IconFill from '../guide/components/icon/IconFill.vue'
import SpaceUse from '../guide/components/space/SpaceUse.vue'
import RippleUse from '../guide/components/ripple/RippleUse.vue'
import RippleColor from '../guide/components/ripple/RippleColor.vue'
import IcomButtonUse from '../guide/components/icon-button/IconButtonUse.vue'
import FABType from '../guide/components/FAB/FABType.vue'
import FABSize from '../guide/components/FAB/FABSize.vue'
import FABDisabled from '../guide/components/FAB/FABDisabled.vue'
import FABNoRipple from '../guide/components/FAB/FABNoRipple.vue'
import FABSlot from '../guide/components/FAB/FABSlot.vue'
import ExtendedFABUse from '../guide/components/extendedFAB/ExtendedFAB.vue'
import Extended from '../guide/components/extendedFAB/Extended.vue'
import ExtendedDemo from '../guide/components/extendedFAB/ExtendedDemo.vue'
import CardDemo from '../guide/components/card/CardDemo.vue'
import CardUse from '../guide/components/card/CardUse.vue'
import CardType from '../guide/components/card/CardType.vue'
import CardDirection from '../guide/components/card/CardDirection.vue'
import CardRipple from '../guide/components/card/CardRipple.vue'
import CardMore from '../guide/components/card/CardMore.vue'
import ElevationUse from '../guide/components/elevation/ElevationUse.vue'

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
    app.component('extended-fab-use', ExtendedFABUse)
    app.component('extended', Extended)
    app.component('extended-demo', ExtendedDemo)
    app.component('card-demo', CardDemo)
    app.component('card-use', CardUse)
    app.component('card-type', CardType)
    app.component('card-direction', CardDirection)
    app.component('card-ripple', CardRipple)
    app.component('card-more', CardMore)
    app.component('elevation-use', ElevationUse)
})
