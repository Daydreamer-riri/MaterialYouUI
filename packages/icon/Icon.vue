<template>
    <component
        :is="isURL(name) ? 'img' : 'span'"
        :class="
            classes(
                n(),
                [namespace, `${namespace}`, `material-symbols-${type}`],
                [isURL(name), n('image')],
                [shrinking, n(`--shrinking`)],
                [fill, n('--fill')],
                [stokeWidth, n(`--stokeWidth-${stokeWidth}`)]
            )
        "
        :style="{
            color,
            transition: `transform ${toNumber(transition)}ms`,
            width: isURL(name) ? toSizeUnit(iconSize) : null,
            height: isURL(name) ? toSizeUnit(iconSize) : null,
            fontSize: toSizeUnit(iconSize),
        }"
        :src="isURL(name) ? nextName : null"
        @click="onClick"
        >{{ nextName }}</component
    >
</template>

<script lang="ts">
import { defineComponent, watch, ref, nextTick } from 'vue'
import { toSizeUnit } from '../utils/elements'
import type { Ref } from 'vue'
import { IconSize, PropIconSize, props } from './props'
import { createNamespace } from '../utils/components'
import { isURL, toNumber } from '../utils/share'

const { n, classes } = createNamespace('icon')

const IconSizes: Record<IconSize, string> = {
    small: '20px',
    medium: '24px',
    large: '40px',
}

const isIconSize = (size: any): boolean => {
    return ['small', 'medium', 'large'].includes(size)
}

export default defineComponent({
    name: 'MyIcon',
    props,
    setup(props) {
        const getSize = (size: any): PropIconSize => {
            if (isIconSize(size)) {
                return IconSizes[size as IconSize]
            }
            return size
        }

        const iconSize = getSize(props.size)

        const nextName: Ref<string | undefined> = ref('')
        const shrinking: Ref<boolean> = ref(false)

        const handleNameChange = async (newName: string | undefined, oldName: string | undefined) => {
            const { transition } = props

            if (oldName == null || toNumber(transition) === 0) {
                nextName.value = newName
                return
            }

            shrinking.value = true
            await nextTick()
            setTimeout(() => {
                oldName != null && (nextName.value = newName)
                shrinking.value = false
            }, toNumber(transition))
        }

        watch(() => props.name, handleNameChange, { immediate: true })

        return {
            n,
            classes,
            nextName,
            shrinking,
            isURL,
            toNumber,
            toSizeUnit,
            iconSize,
        }
    },
})
</script>

<style lang="less">
@import '../styles/common.less';
@import './icon.less';
</style>
