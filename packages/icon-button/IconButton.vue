<template>
    <button
        v-ripple="{ disabled: disabled || !ripple, color: rippleColor }"
        :class="classes(n(), [disabled, n(`--disabled`)], [!ripple, n(`--noripple`)])"
        :style="{
            backgroundColor: backgroundColor,
        }"
        :disabled="disabled"
        @click="handleClick"
        @touchstart="handleTouchstart"
    >
        <m-icon class="button-icon" :name="name" :fill="fill" :size="size" :color="color"></m-icon>
    </button>
</template>
<script>
import { defineComponent } from 'vue'
import { props } from './props'
import MIcon from '../icon'
import Ripple from '../ripple'
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
        let rippleColor = getComputedStyle(document.documentElement).getPropertyValue('--md-color-primary')
        return {
            n,
            classes,
            rippleColor,
        }
    },
})
</script>
<style lang="less" scoped>
@import './IconButton.less';
@import '../styles/common';
</style>
