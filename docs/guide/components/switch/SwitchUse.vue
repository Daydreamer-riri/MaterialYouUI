<template>
    <div class="container">
        <m-switch v-model="isChecked"></m-switch>
    </div>
</template>

<script setup lang="ts">
import MSwitch from '../../../../packages/switch'
import { ref } from 'vue'
// customElements.define('m-ce-switch', MSwitch)
const isChecked = ref(false)
</script>

<style scoped></style>
