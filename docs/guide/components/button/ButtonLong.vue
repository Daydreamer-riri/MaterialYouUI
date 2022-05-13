<template>
    <div class="container">
        <div class="screen">
            <m-space direction="column" :size="[12, 0]">
                <div class="title-medium">Select Type</div>
                <m-chip-group v-model="model" single-selection>
                    <m-chip type="filter" checked-value="ES">Extra Soft</m-chip>
                    <m-chip type="filter" checked-value="S">Soft</m-chip>
                    <m-chip type="filter" checked-value="M">Medium</m-chip>
                    <m-chip type="filter" checked-value="H">Hard</m-chip>
                </m-chip-group>
                <div></div>

                <m-button long>Add to cart</m-button>
            </m-space>

            <div class="spacer"></div>

            <div class="bar"></div>
        </div>
    </div>
</template>

<script setup>
import MChip from '@packages/chip'
import MChipGroup from '@packages/chip-group'
import MSpace from '@packages/space'
import MButton from '@packages/button'
import { ref } from 'vue'

const model = ref(['ES'])
</script>

<style lang="scss" scoped>
.container {
    background-color: var(--md-color-surface4);
    border-radius: 13px;
    padding-block-end: 40px;

    .screen {
        position: relative;
        box-sizing: border-box;
        // height: 200px;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
        background-color: var(--md-color-surface);
        border: solid rgba(0, 0, 0, 0.4) 6px;
        border-top: none;
        border-radius: 0 0 20px 20px;
        padding-inline: 24px;
        padding-block: 36px;
        color: var(--md-color-on-surface);

        .group {
            display: inline-flex;
            overflow-x: auto;
            &::-webkit-scrollbar {
                display: none;
            }
            box-sizing: border-box;
            width: 100%;
            padding-inline: 16px;
            height: 48px;
        }

        .spacer {
            height: 16px;
        }

        .bar {
            position: absolute;
            bottom: 8px;
            left: 0;
            right: 0;
            margin-inline: auto;
            width: 60px;
            height: 2px;
            background: var(--md-color-on-surface-variant);
        }
    }
}
</style>
