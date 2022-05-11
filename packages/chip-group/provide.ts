import type { ComputedRef } from 'vue'
import { useAtChildrenCounter, useChildren } from '../utils/components'
import { ChipProvider } from '../chip/provide'

export interface ChipGroupProvider {
    checkedCount: ComputedRef<number>
    errorMessage: ComputedRef<string>
    max: ComputedRef<number | string | undefined>
    onChecked(value: any): void
    onUnchecked(value: any): void
}

export const CHIP_GROUP_BIND_CHIP_KEY = Symbol('CHIP_GROUP_BIND_CHIP_KEY')
export const CHIP_GROUP_COUNT_CHIP_KEY = Symbol('CHIP_GROUP_COUNT_CHIP_KEY')

export function useChips() {
    const { bindChildren, childProviders } = useChildren<ChipGroupProvider, ChipProvider>(CHIP_GROUP_BIND_CHIP_KEY)
    const { length } = useAtChildrenCounter(CHIP_GROUP_COUNT_CHIP_KEY)

    return {
        length,
        chips: childProviders,
        bindChips: bindChildren,
    }
}
