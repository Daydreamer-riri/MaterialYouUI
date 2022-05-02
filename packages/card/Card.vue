<template>
    <div :class="classes(n(), n(`--${type}`))">
        <div :class="classes(n('header'))" v-if="useHeader">
            <slot name="header"></slot>
        </div>
        <div :class="classes(n('media'))" v-if="useMedia">
            <slot name="media"></slot>
        </div>
        <div :class="classes(n('headline'))" v-if="useTitle || useSubhead">
            <div :class="classes(n('title'))" v-if="useTitle"><slot name="title"></slot></div>
            <div :class="classes(n('subhead'))" v-if="useSubhead"><slot name="subhead"></slot></div>
        </div>
        <div :class="classes(n('content'))" v-if="useContent">
            <slot name="content"></slot>
        </div>
        <div :class="classes(n('action'))" v-if="useAction">
            <slot name="action"></slot>
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
        const useTitle = !!useSlots().title
        const useSubhead = !!useSlots().subhead
        const useContent = !!useSlots().content
        const useAction = !!useSlots().action
        console.log(useSlots())

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

<style lang="less" scoped>
@import '../styles/common';
@import '../styles/elevation';
@import './card.less';
</style>
