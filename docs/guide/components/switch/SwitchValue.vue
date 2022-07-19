<template>
    <div class="container">
        <m-switch checked-value="open" unchecked-value="off" v-model="checkedValue"></m-switch>
    </div>
    <p>switch 的选中状态为：{{ checkedValue }}</p>
</template>

<script setup lang="ts">
import MSwitch from '../../../../packages/switch'
import { ref } from 'vue'

const checkedValue = ref('open')
</script>

<style scoped>
.container {
    background-color: var(--md-color-surface1);
    border-radius: 13px;
    padding: 36px;
    padding-left: 64px;

    display: grid;
    /* place-items: center; */
}
</style>
