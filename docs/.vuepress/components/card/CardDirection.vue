<template>
    <div class="container">
        <m-space direction="column" size="large">
            <m-card type="outlined" :style="{ width: '270px' }">
                <template #media>
                    <div class="card-img card-img-v" />
                </template>
                <template #title>Performances at The Hideout</template>
                <template #content>
                    Watch exclusive live performances at The Hideout every Saturday starting at 7pm.
                </template>
                <template #action>
                    <m-button type="filled-tonal">Get tickets</m-button>
                </template>
            </m-card>
            <m-card type="outlined" direction="horizontal" :style="{ width: '520px' }">
                <template #media>
                    <div class="card-img card-img-h" />
                </template>
                <template #title>Performances at The Hideout</template>
                <template #content>
                    Watch exclusive live performances at The Hideout every Saturday starting at 7pm.
                </template>
                <template #action>
                    <m-button type="filled-tonal" style="float: right">Get tickets</m-button>
                </template>
            </m-card>
        </m-space>
    </div>
</template>
<style lang="less" scoped>
.container {
    background: var(--md-color-surface1);
    padding: 40px 40px 40px;
    border-radius: 12px;
    display: grid;
    place-items: center;

    .card-img {
        background: url('/img/card/direction.webp') center/cover;
        border-radius: 10px;
    }

    .card-img-v {
        height: 190px;
    }

    .card-img-h {
        height: 100%;
        width: 190px;
    }
}
</style>
<script lang="ts" setup>
import MCard from '@packages/card'
import MSpace from '@packages/space'
import MButton from '@packages/button'
</script>
