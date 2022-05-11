<template>
    <div class="container">
        <m-chip-group v-model="model">
            <m-chip type="filter">chip1</m-chip>
            <m-chip type="filter">chip2</m-chip>
            <m-chip type="filter">chip3</m-chip>
            <m-chip type="filter">chip4</m-chip>
        </m-chip-group>
    </div>
</template>

<script setup>
import MChipGroup from '../../../../packages/chip-group'
import MChip from '../../../../packages/chip'
const model = ['chap1', 'chap2']
</script>

<style lang="scss" scoped>
.container {
    background-color: var(--md-color-surface1);
    border-radius: 13px;
    padding: 16px;
}
</style>
