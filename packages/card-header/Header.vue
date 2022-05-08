<template>
    <div :class="classes(n())">
        <div :class="classes(n('avatar'))" v-if="useAvatar">
            <slot name="avatar"></slot>
        </div>
        <div :class="classes(n('text'))" v-if="useHead || useSubHead">
            <div :class="classes(n('head'), 'title-medium')" v-if="useHead">
                <slot name="head">{{ head }}</slot>
            </div>
            <div :class="classes(n('subhead'), 'body-medium')" v-if="useSubHead">
                <slot name="subhead">{{ subhead }}</slot>
            </div>
        </div>
        <div :class="classes(n('extra'))" v-if="useExtra">
            <slot name="extra"></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, useSlots } from 'vue'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('card-header')

export default defineComponent({
    name: 'MCardHeader',
    props: {
        head: {
            type: String,
        },
        subhead: {
            type: String,
        },
    },
    setup(props) {
        const useAvatar = !!useSlots().avatar
        const useHead = !!useSlots().head || props.head !== undefined
        const useSubHead = !!useSlots().subhead || props.subhead !== undefined
        const useExtra = !!useSlots().extra

        return {
            n,
            classes,
            useAvatar,
            useHead,
            useSubHead,
            useExtra,
        }
    },
})
</script>
<style lang="scss">
.m-card-header {
    padding: 16px;
    display: flex;
    align-items: center;

    &__avatar {
        margin-right: 16px;
    }

    &__text {
        flex: 1;
        display: flex;
        flex-direction: column;

        &__subhead {
            margin-top: 4px;
        }
    }
    &__extra {
        color: var(--md-color-outline);
    }
}
</style>
