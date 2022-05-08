<template>
    <button
        v-ripple="{ disabled: disabled || !ripple }"
        :class="classes(n(), [disabled, n(`--disabled`)], [!ripple, n(`--noripple`)])"
        :style="{
            backgroundColor: backgroundColor,
            color: color,
            width: toSizeUnit(size),
            height: toSizeUnit(size),
        }"
        :disabled="disabled"
        @click="handleClick"
        @touchstart="handleTouchstart"
    >
        <slot name="icon">
            <m-icon :name="name" :fill="fill"></m-icon>
        </slot>
    </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { props } from './props'
import MIcon from '../icon'
import Ripple from '../ripple'
import { toSizeUnit } from '../utils/elements'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('icon-button')

export default defineComponent({
    name: 'MIconButton',
    components: {
        MIcon,
    },
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

        return {
            toSizeUnit,
            n,
            classes,
            handleClick,
            handleTouchstart,
        }
    },
})
</script>
<style lang="less">
@import './IconButton.scss';
@import '../styles/common.scss';
</style>
