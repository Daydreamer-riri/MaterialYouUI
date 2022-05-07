<template>
    <div class="container">
        <m-fab name="add" type="tertiary" :extended="state">
            <template #text>New task</template>
        </m-fab>
        <m-button class="btn" type="filled-tonal" @click="changeState">change state</m-button>
    </div>
</template>
<script lang="ts" setup>
import MFab from '@packages/FAB'
import MButton from '@packages/button'
import { ref } from 'vue'

const state = ref(true)

const changeState = () => {
    state.value = !state.value
}
</script>
<style lang="less" scoped>
.container {
    position: relative;
    padding: 80px 80px 120px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--md-color-surface);
    border: solid 1px var(--md-color-outline);

    .btn {
        position: absolute;
        right: 20px;
        bottom: 20px;
    }
}
</style>
