<template>
    <div :class="classes(n())"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createNamespace } from '../utils/components'

const { n, classes } = createNamespace('divider')

export default defineComponent({
    name: 'MDivider',
    props: {},
    setup(props) {
        return { n, classes }
    },
})
</script>

<style lang="scss">
@import './divider.scss';
</style>
