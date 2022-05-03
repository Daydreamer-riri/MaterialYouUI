<template>
    <div class="container">
        <m-card type="elevated" :style="{ width: '360px' }">
            <template #header>
                <m-card-header head="Header" subhead="Subhead">
                    <template #avatar>
                        <div
                            :style="{
                                width: '40px',
                                height: '40px',
                                borderRadius: '20px',
                                background: 'var(--md-color-primary)',
                                color: 'var(--md-color-on-primary)',
                                display: 'grid',
                                placeItems: 'center',
                            }"
                        >
                            <span class="title-medium">A</span>
                        </div>
                    </template>
                    <template #extra>
                        <m-icon name="more_vert"></m-icon>
                    </template>
                </m-card-header>
            </template>
            <template #media>
                <img class="card-img" src="../../public/img/card/Placeholder.png" />
            </template>
            <template #title>Title</template>
            <template #subtitle>Subtitle</template>
            <template #content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elt, sed do eiusmod tempor
            </template>
            <template #action>
                <m-space justify="end" :size="[0, 8]">
                    <m-button type="outlined">Enabled</m-button>
                    <m-button>Enabled</m-button>
                </m-space>
            </template>
        </m-card>
    </div>
</template>
<style lang="less" scoped>
.container {
    background: var(--md-color-surface1);
    padding: 40px 80px 40px;
    border-radius: 12px;
    display: grid;
    place-items: center;
}
</style>
<script lang="ts" setup>
import MCard from '@packages/card'
import MCardHeader from '@packages/card-header'
import MSpace from '@packages/space'
import MButton from '@packages/button'
import MIcon from '@packages/icon'
</script>
