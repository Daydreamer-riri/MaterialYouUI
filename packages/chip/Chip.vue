<template>
    <span
        :class="
            classes(
                n(),
                n(`--${type}`),
                [elevated, n('--elevated')],
                [rounded, n('--rounded')],
                [selected, n('--selected')]
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
            <span v-show="selected" style="overflow: hidden">
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
import { defineComponent, computed, useSlots } from 'vue'
import { ComputedRef } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'
import MIcon from '../icon'
import Ripple from '../ripple'

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
        return {
            n,
            classes,
            useLeft,
            useRight,
            handleClick,
            handleTouchstart,
        }
    },
})
</script>
<style lang="scss">
@import './chip.scss';
@import '../styles/common.scss';
@import '../styles/elevation.scss';
</style>
