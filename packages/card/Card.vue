<template>
    <div :class="classes(n(), n(`--${type}`), [direction === 'horizontal', n('--horizontal')])">
        <div :class="classes(n('header'))" v-if="useHeader">
            <slot name="header"></slot>
        </div>
        <div :class="classes(n('media'))" v-if="useMedia">
            <slot name="media"></slot>
        </div>
        <div :class="classes(n('main'))">
            <div
                :class="classes(n('headline'), [useHeader && !useMedia, n('headline-nopt')])"
                v-if="useTitle || useSubhead"
            >
                <div :class="classes(n('title'))" v-if="useTitle">
                    <slot name="title">{{ title }}</slot>
                </div>
                <div :class="classes(n('subtitle'))" v-if="useSubhead">
                    <slot name="subtitle">{{ subtitle }}</slot>
                </div>
            </div>
            <div :class="classes(n('content'))" v-if="useContent">
                <slot name="content"></slot>
            </div>
            <div :class="classes(n('action'))" v-if="useAction">
                <slot name="action"></slot>
            </div>
            <div :class="classes(n('padding'))"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, useSlots } from 'vue'
import { createNamespace } from '../utils/components'
import { props } from './props'

const { n, classes } = createNamespace('card')

export default defineComponent({
    name: 'MCard',
    props,
    setup(props) {
        const useHeader = !!useSlots().header
        const useMedia = !!useSlots().media
        const useTitle = !!useSlots().title || props.title !== undefined
        const useSubhead = !!useSlots().subtitle || props.subtitle !== undefined
        const useContent = !!useSlots().content
        const useAction = !!useSlots().action

        return {
            n,
            classes,
            useHeader,
            useMedia,
            useTitle,
            useSubhead,
            useContent,
            useAction,
        }
    },
})
</script>

<style lang="scss">
@use './card.scss';
</style>
