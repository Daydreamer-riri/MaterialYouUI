<template>
    <div class="container">
        <m-switch :with-icon="false"></m-switch>
        <m-switch :with-icon="true"></m-switch>
        <m-switch :with-icon="'both'"></m-switch>
    </div>
</template>

<script setup lang="ts">
import MSwitch from '../../../../packages/switch'
import { ref } from 'vue'
const isChecked = ref(false)
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
