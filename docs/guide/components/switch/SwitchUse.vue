<template>
    <div class="container">
        <m-switch v-model="isChecked"></m-switch>
    </div>
    <p>switch 的选中状态为：{{ isChecked }}</p>
</template>

<script setup lang="ts">
import MSwitch from '../../../../packages/switch'
import { ref } from 'vue'
// customElements.define('m-ce-switch', MSwitch)
const isChecked = ref(false)
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
