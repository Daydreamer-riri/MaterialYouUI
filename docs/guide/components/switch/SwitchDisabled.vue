<template>
    <div class="container">
        <m-space direction="column">
            <m-switch disabled></m-switch>
            <m-switch v-model="isChecked" disabled></m-switch>
        </m-space>
        <m-space direction="column">
            <m-switch with-icon="both" disabled></m-switch>
            <m-switch v-model="isChecked" with-icon="both" disabled></m-switch>
        </m-space>
    </div>
</template>

<script setup lang="ts">
import MSwitch from '../../../../packages/switch'
import MSpace from '../../../../packages/space'
import { ref } from 'vue'
const isChecked = ref(true)
</script>

<style scoped>
.container {
    background-color: var(--md-color-surface1);
    border-radius: 13px;
    padding: 36px;
    padding-right: 104px;

    display: flex;
    justify-content: space-around;
    /* place-items: center; */
}
</style>
