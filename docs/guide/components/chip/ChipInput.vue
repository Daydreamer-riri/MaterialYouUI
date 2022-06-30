<template>
    <div>
        <m-chip type="input" closable v-model="info" rounded>
            <template #left>
                <div class="avatar"></div>
            </template>
            {{ name }}</m-chip
        >
        <input type="text" v-model="name" />
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import MIcon from '@packages/icon'
import MChip from '../../../../packages/chip'
const info = ref('Fabian Reza <rezzain120@gmail.com>')
const name = computed(() => {
    console.log(info.value.match(/.*(?= <)/))
    return info.value.match(/.*(?= <)/)[0]
})
</script>

<style lang="scss" scoped>
.avatar {
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background: url('/img/card/avatar.jpg') center/cover;
}
</style>
