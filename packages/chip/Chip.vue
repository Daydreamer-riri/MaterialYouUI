<template>
    <transition mode="out-in" name="m-animation-open" @transitionstart="inputFocus">
        <span
            :class="
                classes(
                    n(),
                    n(`--${type}`),
                    [elevated, n('--elevated')],
                    [rounded, n('--rounded')],
                    [checked, n('--checked')]
                )
            "
            v-bind="$attrs"
            @click="handleClick"
            @touchstart="handleTouchstart"
            v-ripple="{ disabled: type !== 'assist' || disabled }"
            v-if="!isInputting"
            ref="chipRef"
        >
            <span v-if="useLeft || icon != undefined" :class="n('left')">
                <slot v-if="type !== 'filter'" name="left">
                    <m-icon :name="icon" size="small" color="var(--md-color-primary)"></m-icon>
                </slot>
            </span>
            <transition v-if="type === 'filter'" name="m-chip-slide">
                <span v-show="checked" style="overflow: hidden">
                    <m-icon
                        name="check"
                        size="small"
                        color="var(--md-color-on-secondary-container)"
                        style="margin-right: 4px"
                    ></m-icon>
                </span>
            </transition>
            <span :class="classes(n(`text`), 'label-large')">
                <slot />
            </span>
            <span v-if="useRight" :class="n('right')">
                <slot name="right" />
            </span>
            <span v-if="closable">
                <m-icon-button
                    name="close"
                    size="small"
                    style="margin-left: -2px"
                    @click.stop="handleClose"
                ></m-icon-button>
            </span>
        </span>
        <!-- <transition v-if="type === 'input'" name="m-animation-open"> -->
        <span :class="classes(n('input-block'), 'label-large')" v-else="isInputting">
            <input
                :class="classes(n('input-block__input'), 'label-large')"
                ref="input"
                type="text"
                @blur="handleInputBlur"
                @keydown.enter="input?.blur()"
                v-model="inputValue"
            />
            <label :class="classes(n('input-block__label'), 'label-large')">{{ inputValue }}</label>
        </span>
    </transition>
</template>
<script lang="ts">
import MIcon from '../icon'
import MIconButton from '../icon-button'
import Ripple from '../ripple'
import { defineComponent, computed, useSlots, ref, watch, onMounted, inject } from 'vue'
import { createNamespace, call } from '../utils/components'
import { props } from './props'
import { ChipProvider, useChipGroup } from './provide'
import type { Ref, ComputedRef } from 'vue'

const { n, classes } = createNamespace('chip')

export default defineComponent({
    name: 'MChip',
    inheritAttrs: false,
    components: { MIcon, MIconButton },
    directives: { Ripple },
    props,
    emits: ['update:modelValue', 'close'],
    setup(props, { emit }) {
        const useLeft = !!useSlots().left
        const useRight = !!useSlots().right
        const { chipGroup, bindChipGroup } = useChipGroup()

        const handleClick = (e: Event) => {
            const { disabled, onClick, uncheckedValue, checkedValue } = props

            if (disabled) {
                return
            }

            call(onClick, e)

            if (props.type === 'filter') {
                change(checked.value ? uncheckedValue : checkedValue)
            }

            if (props.type === 'input') {
                isInputting.value = !isInputting.value

                // setTimeout(() => {
                //     inputRef.value?.focus()
                //     inputRef.value?.select()
                // }, 50)
            }
        }

        const handleTouchstart = (e: Event) => {
            const { disabled, onTouchstart } = props

            if (!onTouchstart || disabled) {
                return
            }

            onTouchstart(e)
        }

        // ==================
        // 复选逻辑
        // ==================

        const value: Ref = ref(false)
        const checked: ComputedRef<boolean> = computed(() => value.value === props.checkedValue)
        const checkedValue: ComputedRef<boolean> = computed(() => props.checkedValue)

        const change = (changedValue: any) => {
            value.value = changedValue

            const { checkedValue, onChange } = props

            // call(props['onUpdate:modelValue'], value.value)
            emit('update:modelValue', value.value)
            call(onChange, value.value)

            changedValue === checkedValue ? chipGroup?.onChecked(checkedValue) : chipGroup?.onUnchecked(checkedValue)
        }

        const sync = (values: Array<any>) => {
            const { checkedValue, uncheckedValue } = props
            value.value = values.includes(checkedValue) ? checkedValue : uncheckedValue
        }

        const toggle = (changedValue?: any) => {
            const { checkedValue, uncheckedValue } = props

            const shouldReverse = ![checkedValue, uncheckedValue].includes(changedValue)
            if (shouldReverse) {
                changedValue = checked.value ? uncheckedValue : checkedValue
            }

            change(changedValue)
        }

        watch(
            () => props.modelValue,
            (newValue) => {
                value.value = newValue
            },
            { immediate: true }
        )

        const chipProvider: ChipProvider = {
            checkedValue,
            checked,
            sync,
        }

        call(bindChipGroup, chipProvider)

        // input
        const isInputting: Ref = ref(false)
        const inputValue = ref(props.modelValue)

        const inputRef = ref<HTMLInputElement | null>(null)

        const handleInputBlur = () => {
            emit('update:modelValue', inputValue.value)
            isInputting.value = !isInputting.value
        }
        const inputFocus = () => {
            if (!isInputting.value) return
            inputRef.value?.select()
        }

        const handleClose = () => {
            emit('close')
        }

        return {
            n,
            classes,
            useLeft,
            useRight,
            handleClick,
            handleTouchstart,
            checked,
            toggle,
            isInputting,
            input: inputRef,
            inputValue,
            handleInputBlur,
            inputFocus,
            handleClose,
        }
    },
})
</script>
<style lang="scss">
@use './chip.scss';
@use '../styles/common.scss';
@use '../styles/elevation.scss';
</style>
