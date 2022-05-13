<template>
    <div class="container">
        <m-chip type="filter" v-model="model"> Filter </m-chip>
    </div>
    <p>
        Filter chip 的选中状态是：<code>{{ model }}</code>
    </p>
</template>

<script lang="ts" setup>
import MChip from '@packages/chip'
import { ref } from 'vue'

const model = ref(true)
</script>

<style lang="scss" scoped>
.container {
    background-color: var(--md-color-surface);
    border-radius: 13px;
    padding: 40px;
    display: grid;
    place-items: center;
}
</style>
