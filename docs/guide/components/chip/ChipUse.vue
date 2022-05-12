<template>
    <div class="container">
        <m-space align="center" size="60" justify="center">
            <m-space direction="column" align="center" size="20">
                <m-chip icon="event">Assist</m-chip>
                <span class="button-name">1</span>
            </m-space>
            <m-space direction="column" align="center" size="20">
                <m-chip type="filter" :modelValue="true">Filter</m-chip>
                <span class="button-name">2</span>
            </m-space>
            <m-space direction="column" align="center" size="20">
                <m-chip type="input" closable>Input</m-chip>
                <span class="button-name">3</span>
            </m-space>
            <m-space direction="column" align="center" size="20">
                <m-chip type="suggestion">Suggestion</m-chip>
                <span class="button-name">4</span>
            </m-space>
        </m-space>
    </div>
</template>

<script setup>
import MChip from '@packages/chip'
import MSpace from '@packages/space'
import MIcon from '@packages/icon'
import vRipple from '@packages/ripple'
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.container {
    background-color: var(--md-color-surface1);
    border-radius: 13px;
    padding-block-start: 60px;
    padding-block-end: 40px;

    .button-name {
        border-radius: 12px;
        text-align: center;
        display: block;
        height: 24px;
        line-height: 24px;
        width: 24px;
        background: var(--md-color-on-surface);
        color: var(--md-color-surface);
    }
}
</style>
