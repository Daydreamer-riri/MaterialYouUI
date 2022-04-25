<template>
    <button
        :class="classes(n(), n(`--${btnType}`), [disabled, n(`--${btnType}--disabled`), n(`--${btnType}`)])"
        :style="{
            color: textColor,
            background: color,
            width: width,
        }"
        :disabled="disabled"
        @click="handleClick"
        @touchstart="handleTouchstart"
    >
        <my-icon class="button-icon" :name="icon" v-if="icon" :fill="iconFill" size="small"></my-icon>
        <span class="label-large text-content"><slot /></span>
    </button>
</template>

<script lang="ts">
import MyIcon from '../icon'
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { n, classes } = createNamespace('button')

export default defineComponent({
    name: 'MyButton',
    components: { MyIcon },
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

<style lang="less">
@import '../styles/common';
@import './button';
@import '../styles/elevation';
</style>
