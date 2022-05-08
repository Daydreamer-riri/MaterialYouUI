<template>
    <div class="container" style="background-color: var(--md-color-surface-light)">
        <m-space :size="[16, 16]">
            <div
                class="elevation-example-item"
                :class="`md-elevation-z${e}`"
                :style="{ backgroundColor: `var(--md-color-surface${e}-light)` }"
                v-for="e in 5"
                :key="e"
            ></div>
        </m-space>
    </div>
    <div class="container" style="background-color: var(--md-color-surface-dark)">
        <m-space :size="[16, 16]">
            <div
                class="elevation-example-item"
                :class="`md-elevation-z${e}`"
                :style="{ backgroundColor: `var(--md-color-surface${e}-dark)` }"
                v-for="e in 5"
                :key="e"
            ></div>
        </m-space>
    </div>
</template>

<script lang="ts" setup>
import MSpace from '@packages/space'
</script>

<style lang="scss" scoped>
@import '@packages/styles/elevation.scss';
.container {
    border-radius: 13px;
    display: grid;
    place-items: center;
    padding-block: 40px;
    .elevation-example-item {
        height: 100px;
        width: 100px;
        border-radius: 12px;
    }
}
</style>
