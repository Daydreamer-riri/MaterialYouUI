<template>
    <div :class="n()">
        <m-space :wrap="!singleLine" :size="size" v-if="!useContent">
            <slot />
        </m-space>
        <slot name="content" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, useSlots } from 'vue'
import { createNamespace, call } from '../utils/components'
import MSpace from '../space'
import { sizeValidator } from '../space/props'
import { useChips } from './provide'
import { ChipGroupProvider } from './provide'
import type { PropType, ComputedRef } from 'vue'
import type { SpaceSize } from '../space/props'

const { n, classes } = createNamespace('chip-group')

export default defineComponent({
    name: 'MChipGroup',
    props: {
        modelValue: {
            type: Array as PropType<Array<any>>,
            default: () => [],
        },
        size: {
            type: [String, Number, Array] as PropType<SpaceSize>,
            default: [16, 8],
            validator: sizeValidator,
        },
        singleLine: {
            type: Boolean,
            default: false,
        },
        singleSelection: {
            type: Boolean,
            default: false,
        },
        onChange: {
            type: Function as PropType<(value: Array<any>) => void>,
        },
        'onUpdate:modelValue': {
            type: Function as PropType<(value: Array<any>) => void>,
        },
    },
    components: { MSpace },
    setup(props) {
        const useContent = !!useSlots().content

        const checkedCount: ComputedRef<number> = computed(() => props.modelValue.length)
        const { length, chips, bindChips } = useChips()

        const change = (changedModelValue: any) => {
            call(props['onUpdate:modelValue'], changedModelValue)
            call(props.onChange, changedModelValue)
        }

        const onChecked = (changedValue: any) => {
            if (props.singleSelection) {
                change([changedValue])
                return
            }

            const { modelValue } = props

            if (!modelValue.includes(changedValue)) {
                change([...modelValue, changedValue])
            }
        }

        const onUnchecked = (changedValue: any) => {
            const { modelValue } = props

            if (!modelValue.includes(changedValue)) {
                return
            }

            change(modelValue.filter((value) => value !== changedValue))
        }

        const syncChips = () => chips.forEach(({ sync }) => sync(props.modelValue))

        watch(() => props.modelValue, syncChips, { deep: true })

        watch(() => length.value, syncChips)

        const chipGroupProvider: ChipGroupProvider = {
            checkedCount,
            onChecked,
            onUnchecked,
        }

        bindChips(chipGroupProvider)

        return {
            n,
            classes,
            useContent,
        }
    },
})
</script>

<style lang="scss"></style>
