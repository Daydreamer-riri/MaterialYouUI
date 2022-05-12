<template>
    <span
        :class="
            classes(
                n(),
                n(`--${type}`),
                [elevated, n('--elevated')],
                [rounded, n('--rounded')],
                [checked, n('--checked')]
            )
        "
        v-bind="$attrs"
        @click="handleClick"
        @touchstart="handleTouchstart"
        v-ripple="{ disabled: type !== 'assist' || disabled }"
    >
        <span v-if="useLeft || icon != undefined" :class="n('left')">
            <slot v-if="type !== 'filter'" name="left">
                <m-icon :name="icon" size="18" color="var(--md-color-primary)"></m-icon>
            </slot>
        </span>
        <transition v-if="type === 'filter'" name="m-chip-slide">
            <span v-show="checked" style="overflow: hidden">
                <m-icon
                    name="check"
                    size="small"
                    color="var(--md-color-on-secondary-container)"
                    style="margin-right: 4px"
                ></m-icon>
            </span>
        </transition>
        <span :class="classes(n(`text`), 'label-large')">
            <slot />
        </span>
        <span v-if="useRight" :class="n('right')">
            <slot name="right" />
        </span>
        <span v-if="closable">
            <m-icon name="close" size="18" style="margin-left: 4px"></m-icon>
        </span>
    </span>
</template>
<script lang="ts">
import MIcon from '../icon'
import Ripple from '../ripple'
import { defineComponent, computed, useSlots, ref, watch, onMounted, inject } from 'vue'
import { createNamespace, call } from '../utils/components'
import { props } from './props'
import { ChipProvider, useChipGroup } from './provide'
import type { Ref, ComputedRef } from 'vue'

const { n, classes } = createNamespace('chip')

export default defineComponent({
    name: 'MChip',
    inheritAttrs: false,
    components: { MIcon },
    directives: { Ripple },
    props,
    setup(props) {
        const useLeft = !!useSlots().left
        const useRight = !!useSlots().right
        const { chipGroup, bindChipGroup } = useChipGroup()

        const handleClick = (e: Event) => {
            const { disabled, onClick, uncheckedValue, checkedValue } = props

            if (disabled) {
                return
            }

            call(onClick, e)

            if (props.type === 'filter') {
                change(checked.value ? uncheckedValue : checkedValue)
            }
        }

        const handleTouchstart = (e: Event) => {
            const { disabled, onTouchstart } = props

            if (!onTouchstart || disabled) {
                return
            }

            onTouchstart(e)
        }

        // ==================
        // 复选逻辑
        // ==================

        const value: Ref = ref(false)
        const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue)
        const checkedValue: ComputedRef<boolean> = computed(() => props.checkedValue)

        const change = (changedValue: any) => {
            value.value = changedValue

            const { checkedValue, onChange } = props

            call(props['onUpdate:modelValue'], value.value)
            call(onChange, value.value)

            changedValue === checkedValue ? chipGroup?.onChecked(checkedValue) : chipGroup?.onUnchecked(checkedValue)
        }

        const sync = (values: Array<any>) => {
            const { checkedValue, uncheckedValue } = props
            value.value = values.includes(checkedValue) ? checkedValue : uncheckedValue
        }

        const toggle = (changedValue?: any) => {
            const { checkedValue, uncheckedValue } = props

            const shouldReverse = ![checkedValue, uncheckedValue].includes(changedValue)
            if (shouldReverse) {
                changedValue = checked.value ? uncheckedValue : checkedValue
            }

            change(changedValue)
        }

        watch(
            () => props.modelValue,
            (newValue) => {
                value.value = newValue
            },
            { immediate: true }
        )

        const chipProvider: ChipProvider = {
            checkedValue,
            checked,
            sync,
        }

        call(bindChipGroup, chipProvider)

        return {
            n,
            classes,
            useLeft,
            useRight,
            handleClick,
            handleTouchstart,
            checked,
            toggle,
        }
    },
})
</script>
<style lang="scss">
@import './chip.scss';
@import '../styles/common.scss';
@import '../styles/elevation.scss';
</style>
