<template>
    <div :class="n('wrap')">
        <m-space>
            <slot />
        </m-space>
    </div>
</template>

<script lang="ts">
import { defineComponent, VNodeChild, VNode, computed, watch, nextTick, onMounted, provide } from 'vue'
import type { PropType } from 'vue'
import { createNamespace, call } from '../utils/components'
import MSpace from '../space'
const { n, classes } = createNamespace('chip-group')

export default defineComponent({
    name: 'MChipGroup',
    props: {
        modelValue: {
            type: Array as PropType<Array<any>>,
        },
    },
    components: { MSpace },
    setup(props, { slots }) {
        let children = call(slots.default) ?? []
        return {
            n,
            classes,
        }
    },
})
</script>
