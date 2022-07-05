<template>
    <div class="container">
        <m-chip
            type="input"
            closable
            v-model="infos.list[index]"
            rounded
            v-for="(info, index) of infos.list"
            :key="index"
            @close="infos.list.splice(index, 1)"
        >
            <template #left>
                <div class="avatar"></div>
            </template>
            {{ getName(info) }}</m-chip
        >
    </div>
    <p>
        list 所对应的值为：<br /><code>{{ infos.list }}</code>
    </p>
</template>

<script setup>
import { reactive, ref } from 'vue'
import MChip from '../../../../packages/chip'

const getName = (info) => {
    return info.match(/.*(?= <)/)[0]
}
const infos = reactive({
    list: ['Fabian Reza <rezzain120@gmail.com>', 'Ping Qiang <pingqiang@gmail.com>'],
})
</script>

<style lang="scss" scoped>
.avatar {
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background: url('/img/card/avatar.jpg') center/cover;
}

.container {
    background-color: var(--md-color-surface1);
    border-radius: 13px;
    padding-inline: 16px;
    padding-block: 40px;
}
</style>
