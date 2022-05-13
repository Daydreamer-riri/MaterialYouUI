<template>
    <div class="container">
        <m-chip @click="handle">
            <template #left>
                <m-icon name="favorite" size="18" :fill="isFill" transition="50"></m-icon>
            </template>
            {{ text }}
        </m-chip>
    </div>
</template>

<script lang="ts" setup>
import MChip from '@packages/chip'
import MIcon from '@packages/icon'
import { ref } from 'vue'

const textSave = 'Save to favorites'
const textSaved = 'Saved to favorites'

const isFill = ref(false)
const text = ref(textSave)

const handle = () => {
    if (isFill.value) {
        isFill.value = false
        text.value = textSave
    } else {
        isFill.value = true
        text.value = textSaved
    }
}
</script>

<style lang="scss" scoped>
.container {
    background-color: var(--md-color-surface4);
    border-radius: 13px;
    padding: 40px;
    display: grid;
    place-items: center;
}
</style>
