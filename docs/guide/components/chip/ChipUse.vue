<template>
    <div class="container">
        <m-space>
            <m-chip @click="handle">
                <template #left>
                    <m-icon transition="100" size="small" :name="icon"></m-icon>
                </template>
                Enabled
            </m-chip>
            <m-chip @click="handleFill">
                <template #left>
                    <m-icon transition="0" size="small" name="favorite" :fill="fill"></m-icon>
                </template>
                Enabled
            </m-chip>
            <m-chip elevated>Enabled</m-chip>
            <m-chip rounded>
                <template #left> <m-icon size="30" name="account_circle" fill></m-icon> </template>
                Enabled
            </m-chip>
            <m-chip type="filter" @click="handleSelect" :selected="selected">Enabled</m-chip>
            <m-chip type="filter" :selected="true">Enabled</m-chip>
        </m-space>
    </div>
</template>

<script setup>
import MChip from '@packages/chip'
import MSpace from '@packages/space'
import MIcon from '@packages/icon'
import vRipple from '@packages/ripple'
import { ref } from 'vue'
const icon = ref('edit')
const handle = () => {
    icon.value = icon.value === 'edit' ? 'login' : 'edit'
    console.log(icon.value)
}
const fill = ref(false)
const handleFill = () => {
    fill.value = !fill.value
}
const selected = ref(false)
const handleSelect = () => {
    selected.value = !selected.value
}
</script>

<style lang="scss" scoped></style>
