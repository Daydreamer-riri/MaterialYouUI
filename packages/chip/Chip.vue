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
    >
        <span v-if="useLeft || icon != undefined" :class="n('left')">
            <slot v-if="type !== 'filter'" name="left">
                <m-icon :name="icon" size="small" color="var(--md-color-primary)"></m-icon>
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
    </span>
</template>
<script lang="ts">
import MIcon from '../icon'
import Ripple from '../ripple'
import { defineComponent, computed, useSlots, ref, onMounted, inject } from 'vue'
import { createNamespace, call } from '../utils/components'
import { props } from './props'
import { useChipGroup } from './provide'
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

        const handleClick = (e: Event) => {
            const { disabled, onClick } = props

            if (!onClick || disabled) {
                return
            }

            onClick(e)
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

            // changedValue === checkedValue ?
        }

        return {
            n,
            classes,
            useLeft,
            useRight,
            handleClick,
            handleTouchstart,
            checked,
        }
    },
})
</script>
<style lang="scss">
@import './chip.scss';
@import '../styles/common.scss';
@import '../styles/elevation.scss';
</style>
