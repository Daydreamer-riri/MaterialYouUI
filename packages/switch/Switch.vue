<template>
    <button @click="handleClick" :class="classes(n(), [modelValue, n('--checked')])">
        <div :class="classes(n('overlay'))">
            <div :class="classes(n('handle'))"></div>
        </div>
    </button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import Ripple from '../ripple'
import { createNamespace, call } from '../utils/components'
import type { PropType, ComputedRef, Ref } from 'vue'

const { n, classes } = createNamespace('switch')

export default defineComponent({
    name: 'MSwitch',
    components: {},
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
