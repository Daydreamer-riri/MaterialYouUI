import type { App } from 'vue'
import ChipGroup from './ChipGroup.vue'

ChipGroup.install = function (app: App) {
    app.component(ChipGroup.name, ChipGroup)
}

export const _ChipGroupComponent = ChipGroup

export default ChipGroup
