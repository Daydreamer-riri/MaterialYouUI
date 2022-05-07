<template>
    <span :class="classes(n())" v-bind="$attrs">
        <slot name="left" />
        <m-icon v-if="type === 'filter'" v-show="selected" name="check"></m-icon>
        <span :class="n(`text`)">
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
import MIcon from '../icon'

const { n, classes } = createNamespace('chip')

export default defineComponent({
    name: 'MChip',
    inheritAttrs: false,
    components: { MIcon },
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
@import '../styles/elevation.less';
</style>
