import { ComputedRef } from 'vue'
import { useAtParentIndex, useParent } from '../utils/components'
import { CHIP_GROUP_BIND_CHIP_KEY, CHIP_GROUP_COUNT_CHIP_KEY, ChipGroupProvider } from '../chip-group/provide'

export interface ChipProvider {
    checkedValue: ComputedRef
    checked: ComputedRef<boolean>
    sync(values: Array<any>): void
    // resetWithAnimation(): void
}

export function useChipGroup() {
    const { bindParent, parentProvider } = useParent<ChipGroupProvider, ChipProvider>(CHIP_GROUP_BIND_CHIP_KEY)
    const { index } = useAtParentIndex(CHIP_GROUP_COUNT_CHIP_KEY)

    return {
        index,
        chipGroup: parentProvider,
        bindChipGroup: bindParent,
    }
}
