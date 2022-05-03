<template>
    <div class="container">
        <m-card :style="{ background: '#faf2f1', width: '300px', color: '#49454f' }">
            <template #media>
                <div
                    style="
                        width: 300px;
                        height: 152px;
                        border-radius: 12px;
                        background: url('/img/card/demo.jpeg') center/cover no-repeat;
                    "
                ></div>
            </template>
            <template #title>
                <span class="title-large" :style="{ color: '#1c1b1f' }">Glass Souls' World Tour</span>
            </template>
            <template #subtitle>From your recent favorites</template>
            <template #action>
                <m-button color="#9c4146" textColor="#fff">Buy Tickets</m-button>
            </template>
        </m-card>
    </div>
</template>
<style lang="less" scoped>
.container {
    background: #faf2f1;
    padding-top: 40px;
    padding-bottom: 40px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<script lang="ts" setup>
import MCard from '@packages/card'
import MButton from '@packages/button'
</script>
