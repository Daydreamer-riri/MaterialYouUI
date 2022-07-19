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
import { defineComponent, ref, computed, watch } from 'vue'
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
            type: [Boolean, String, Array],
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
        const { modelValue, checkedValue, uncheckedValue } = props
        const value: Ref = ref(uncheckedValue)
        // const value = computed(() => {
        //     if (Array.isArray(props.modelValue) && props.modelValue.includes(checkedValue)) {
        //         return checkedValue
        //     } else {
        //         return props.modelValue
        //     }
        // })

        watch(
            () => props.modelValue,
            (newModelValue) => {
                if (Array.isArray(newModelValue) && newModelValue.includes(checkedValue)) {
                    value.value = checkedValue
                } else {
                    value.value = newModelValue
                }
            },
            { immediate: true }
        )

        const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue)

        const toggle = (changedValue?: any) => {
            const { checkedValue, uncheckedValue } = props

            const shouldReverse = ![checkedValue, uncheckedValue].includes(changedValue)
            if (shouldReverse) {
                changedValue = checked.value ? uncheckedValue : checkedValue
            }

            change(changedValue)
        }

        const change = (changedValue: any) => {
            const { checkedValue, modelValue, onChange } = props

            if (Array.isArray(modelValue)) {
                const newModel = modelValue.filter((v) => {
                    return v !== checkedValue
                })

                changedValue === checkedValue && newModel.push(checkedValue)

                emit('update:modelValue', newModel)
            } else {
                value.value = changedValue
                emit('update:modelValue', value.value)
            }

            call(onChange, value.value)
        }

        const handleClick = (e: Event) => {
            const { disabled, uncheckedValue, checkedValue } = props
            change(checked.value ? uncheckedValue : checkedValue)
        }
        return {
            value,
            n,
            classes,
            checked,
            handleClick,
            toggle,
        }
    },
})
</script>

<style lang="scss">
@import './switch.scss';
</style>
