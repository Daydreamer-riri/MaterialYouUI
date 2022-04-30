<template>
    <button
        v-ripple="{ disabled: disabled || !ripple, color: rippleColor }"
        :class="
            classes(
                n(),
                n(`--${btnSize}`),
                [disabled, n(`--disabled`), n(`--${btnType}`)],
                [!ripple, n(`--${btnType}--noripple`), n(`--${btnType}--ripple`)]
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
        <slot name="icon">
            <m-icon :name="name" :size="btnSize === 'large' ? 36 : 24"></m-icon>
        </slot>
        <span v-show="extended" v-if="isExtended && btnType === 'medium'">
            <slot></slot>
        </span>
    </button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import MIcon from '../icon'
import Ripple from '../ripple'
import { props } from './props'
import { createNamespace } from '../utils/components'
const { n, classes } = createNamespace('fab')

export default defineComponent({
    name: 'MFab',
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

        // iconsize TODP

        // rippleColor
        let rippleColor

        // extended
        const extended = ref(true)

        return {
            handleClick,
            handleTouchstart,
            classes,
            n,
            rippleColor,
            extended,
        }
    },
    computed: {
        btnType() {
            if (['surface', 'primary', 'secondary', 'tertiary'].includes(this.type)) {
                return this.type
            }
            return 'primary'
        },
        btnSize() {
            if (['small', 'medium', 'large'].includes(this.size)) {
                return this.size
            }
            return 'medium'
        },
    },
})
</script>
<style lang="less">
@import '../styles/common';
@import './FAB.less';
@import '../styles/elevation';
</style>
