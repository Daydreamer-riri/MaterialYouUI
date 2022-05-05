<template>
    <span :class="classes(n())" v-bind="$attrs">
        <slot name="left" />

        <span :class="n(`text-`)">
            <slot />
        </span>

        <slot name="right" />

        <span> </span>
    </span>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { ComputedRef } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { n, classes } = createNamespace('chip')

export default defineComponent({
    name: 'MChip',
    inheritAttrs: false,
    props,
    setup(props) {
        return {
            n,
            classes,
        }
    },
})
</script>
<style lang="less">
@import './chip.less';
@import '../styles/common.less';
</style>
