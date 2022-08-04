import { defineClientAppEnhance } from '@vuepress/client'
import BasicUse from '../guide/components/button/BasicUse.vue'
import IconButton from '../guide/components/button/IconButton.vue'
import DisabledButton from '../guide/components/button/DisabledButton.vue'
import RippleDisabled from '../guide/components/button/ButtonRippleDisabled.vue'
import ButtonLong from '../guide/components/button/ButtonLong.vue'
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
import ChipUse from '../guide/components/chip/ChipUse.vue'
import ChipGroupUseVue from '../guide/components/chip/ChipGroupUse.vue'
import ChipAssist from '../guide/components/chip/ChipAssist.vue'
import ChipAssistUse from '../guide/components/chip/ChipAssistUse.vue'
import ChipFilterUse from '../guide/components/chip/ChipFilterUse.vue'
import ChipFilterGroup from '../guide/components/chip/ChipFilterGroup.vue'
import ChipFilterGroupSingle from '../guide/components/chip/ChipFilterGroupSingle.vue'
import ChipInput from '../guide/components/chip/ChipInput.vue'
import SwitchUse from '../guide/components/switch/SwitchUse.vue'
import SwitchValue from '../guide/components/switch/SwitchValue.vue'
import SwitchGroup from '../guide/components/switch/SwitchGroup.vue'
import SwitchIcon from '../guide/components/switch/SwitchIcon.vue'
import SwitchDisabled from '../guide/components/switch/SwitchDisabled.vue'
import DialogUse from '../guide/components/dialog/DialogUse.vue'
import DialogBtn from '../guide/components/dialog/Dialogbtn.vue'
import DialogOpen from '../guide/components/dialog/DialogOpen.vue'

export default defineClientAppEnhance(({ app }) => {
  app.component('basic-use', BasicUse)
  app.component('icon-button', IconButton)
  app.component('disabled-button', DisabledButton)
  app.component('button-long', ButtonLong)
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
  app.component('chip-use', ChipUse)
  app.component('chip-group-use', ChipGroupUseVue)
  app.component('chip-assist', ChipAssist)
  app.component('chip-assist-use', ChipAssistUse)
  app.component('chip-filter-use', ChipFilterUse)
  app.component('chip-filter-group', ChipFilterGroup)
  app.component('chip-filter-single', ChipFilterGroupSingle)
  app.component('chip-input', ChipInput)
  app.component('switch-use', SwitchUse)
  app.component('switch-value', SwitchValue)
  app.component('switch-group', SwitchGroup)
  app.component('switch-icon', SwitchIcon)
  app.component('switch-disabled', SwitchDisabled)
  app.component('dialog-use', DialogUse)
  app.component('dialog-btn', DialogBtn)
  app.component('dialog-open', DialogOpen)
})
