<template>
    <div class="container">
        <m-chip-group v-model="model" single-selection>
            <template #content>
                <m-space :size="[16, 8]">
                    <m-chip type="filter" :checked-value="1">chip1</m-chip>
                    <m-chip type="filter" :checked-value="2">chip2</m-chip>
                    <m-chip type="filter" :checked-value="3">chip3</m-chip>
                    <m-chip type="filter" :checked-value="4">chip4</m-chip>
                </m-space>
                <m-space :size="[16, 8]">
                    <m-chip type="filter" :checked-value="5">chip5</m-chip>
                    <m-chip type="filter" :checked-value="6">chip6</m-chip>
                    <m-chip type="filter" :checked-value="7">chip7</m-chip>
                    <m-chip type="filter" :checked-value="8">chip8</m-chip>
                </m-space>
            </template>
        </m-chip-group>
    </div>
    <div>
        {{ model }}
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MChipGroup from '../../../../packages/chip-group'
import MChip from '../../../../packages/chip'
import MSpace from '../../../../packages/space'
const model = ref([])
let value = true

function handle() {
    if (value) {
        model.value = [4]
    } else {
        model.value = [1]
    }
    value = !value
}
</script>

<style lang="scss" scoped>
.container {
    background-color: var(--md-color-surface1);
    border-radius: 13px;
    padding: 16px;
}
</style>
