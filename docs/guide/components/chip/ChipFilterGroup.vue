<template>
    <div class="container">
        <m-chip-group v-model="model">
            <m-chip type="filter" checked-value="Docs">Docs</m-chip>
            <m-chip type="filter" checked-value="Slides">Slides</m-chip>
            <m-chip type="filter" checked-value="Sheets">Sheets</m-chip>
            <m-chip type="filter" checked-value="Images">Images</m-chip>
        </m-chip-group>
    </div>
    <p>
        Filter chip group 的选中状态是：<code>{{ model }}</code>
    </p>
</template>

<script setup>
import { ref } from 'vue'
import MChipGroup from '../../../../packages/chip-group'
import MChip from '../../../../packages/chip'
const model = ref(['Slides', 'Images'])
</script>

<style lang="scss" scoped>
.container {
    background-color: var(--md-color-surface1);
    border-radius: 13px;
    padding-inline: 16px;
    padding-block: 40px;
}
</style>
