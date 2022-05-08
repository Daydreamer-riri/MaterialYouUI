<template>
    <button
        v-ripple="{ disabled: disabled || !ripple }"
        :class="
            classes(
                n(),
                n(`--${btnType}`),
                [disabled, n(`--${btnType}--disabled`), n(`--${btnType}`)],
                [!ripple, n(`--${btnType}--noripple`)]
            )
        "
        :style="{
            color: textColor,
            background: color,
            width: width,
        }"
        :disabled="disabled"
        @click="handleClick"
        @touchstart="handleTouchstart"
    >
        <m-icon class="button-icon" :name="icon" v-if="icon" :fill="iconFill" size="small"></m-icon>
        <span class="label-large text-content"><slot /></span>
    </button>
</template>

<script lang="ts">
import Ripple from '../ripple'
import MIcon from '../icon'
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { n, classes } = createNamespace('button')

export default defineComponent({
    name: 'MButton',
    components: { MIcon },
    directives: { Ripple },
    props,
    setup(props) {
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

        // 获取 ripple 颜色
        // let rippleColor = null
        // if (props.type === 'text' || props.type === 'outlined') {
        //     // rippleColor = document.documentElement.style.getPropertyValue('--md-color-surface-3-light')
        //     rippleColor = getComputedStyle(document.documentElement).getPropertyValue('--md-color-primary')
        // } else if (props.type === 'filled-tonal') {
        //     rippleColor = getComputedStyle(document.documentElement).getPropertyValue(
        //         '--md-color-on-secondary-container'
        //     )
        // } else if (props.type === 'filled') {
        //     rippleColor = getComputedStyle(document.documentElement).getPropertyValue('--md-color-on-primary')
        // }
        return { n, classes, handleClick, handleTouchstart }
    },
    computed: {
        btnType() {
            if (['elevated', 'filled', 'filled-tonal', 'outlined', 'text'].includes(this.type)) {
                return this.type
            }
            return 'filled'
        },
    },
})
</script>

<style lang="scss" scoped>
@import '../styles/common.scss';
@import './button';
@import '../styles/elevation.scss';
</style>
