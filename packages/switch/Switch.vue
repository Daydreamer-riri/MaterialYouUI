<template>
    <button @click="handleClick" :class="classes(n(), [checked, n('--checked')])">
        <div :class="classes(n('overlay'))">
            <div :class="classes(n('handle'), [withIcon === 'both', n('handle--has-icon')])"></div>
            <m-icon :class="n('icon')" :size="16" name="done" v-if="withIcon && checked"></m-icon>
            <m-icon :class="n('icon')" :size="16" name="close" v-else-if="withIcon === 'both' && !checked"></m-icon>
        </div>
    </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import Ripple from '../ripple'
import MIcon from '../icon'
import { createNamespace, call } from '../utils/components'
import type { PropType, ComputedRef, Ref } from 'vue'

const { n, classes } = createNamespace('switch')

export default defineComponent({
    name: 'MSwitch',
    components: { MIcon },
    directives: { Ripple },
    props: {
        modelValue: {
            type: [Boolean, String],
            default: false,
        },
        checkedValue: {
            type: [String, Number, Boolean, Object, Array] as PropType<any>,
            default: true,
        },
        uncheckedValue: {
            type: [String, Number, Boolean, Object, Array] as PropType<any>,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        onChange: {
            type: Function as PropType<(value: Array<any>) => void>,
        },
        withIcon: {
            type: [Boolean, String],
            default: false,
        },
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const value: Ref = ref(false)
        const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue)
        const checkedValue: ComputedRef<boolean> = computed(() => props.checkedValue)

        const change = (changedValue: any) => {
            value.value = changedValue

            const { checkedValue, onChange } = props

            // call(props['onUpdate:modelValue'], value.value)
            emit('update:modelValue', value.value)
            call(onChange, value.value)
        }

        const handleClick = (e: Event) => {
            const { disabled, uncheckedValue, checkedValue } = props
            change(checked.value ? uncheckedValue : checkedValue)
        }
        return {
            n,
            classes,
            checked,
            handleClick,
        }
    },
})
</script>

<style lang="scss">
@import './switch.scss';
</style>
