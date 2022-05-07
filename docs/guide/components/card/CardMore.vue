<template>
    <div class="container">
        <m-card :style="{ width: '400px' }">
            <template #header>
                <m-card-header>
                    <template #head>
                        <div class="header" style="width: 50%">
                            <span class="title-large">Performances at The Hideout</span>
                        </div>
                    </template>
                </m-card-header>
            </template>
            <template #media>
                <div class="card1-img card-img-v" />
            </template>
            <template #content>
                Watch exclusive live performances at The Hideout every Saturday starting at 7pm.
            </template>
            <template #action>
                <m-space :size="[0, 0]" align="center" justify="space-between">
                    <m-space :size="[0, 8]">
                        <m-button type="filled-tonal">Get tickets</m-button>
                        <m-button type="outlined">Learn more</m-button>
                    </m-space>
                    <m-icon-button name="more_vert"></m-icon-button>
                </m-space>
            </template>
        </m-card>
        <div class="space"></div>
        <div class="grid">
            <m-card type="filled" v-ripple>
                <template #media>
                    <div class="nati"></div>
                </template>
                <template #title>
                    <span class="title-medium">Nati Melnychuk</span>
                </template>
                <template #subtitle>
                    <span class="title-small" style="opacity: 0.7">2.03 MB</span>
                </template>
            </m-card>
            <m-card type="filled" v-ripple>
                <template #media>
                    <div class="tabitha"></div>
                </template>
                <template #title>
                    <span class="title-medium">tabitha turner</span>
                </template>
                <template #subtitle>
                    <span class="title-small" style="opacity: 0.7">3.54 MB</span>
                </template>
            </m-card>
        </div>
    </div>
</template>
<style lang="less" scoped>
.container {
    background: var(--md-color-surface);
    padding: 40px 0 40px;
    border-radius: 12px;
    display: grid;
    place-items: center;

    .space {
        height: 32px;
    }

    .card1-img {
        background: url('/img/card/direction.webp') center/cover;
        border-radius: 12px;
        margin: 0 16px 0;
    }

    .card-img-v {
        height: 190px;
    }

    .grid {
        width: 100%;
        max-width: 500px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 8px;

        .m-card {
            user-select: none;
            cursor: pointer;
        }

        .nati {
            height: 184px;
            border-radius: 12px;
            background: url('/img/card/nati-melnychuk.jpg') center/cover;
        }

        .tabitha {
            height: 184px;
            border-radius: 12px;
            background: url('/img/card/tabitha-turner.jpg') center/cover;
        }
    }
}
</style>
<script lang="ts" setup>
import MCard from '@packages/card'
import MCardHeader from '@packages/card-header'
import MSpace from '@packages/space'
import MButton from '@packages/button'
import MIcon from '@packages/icon'
import MIconButton from '@packages/icon-button'
import vRipple from '@packages/ripple'
</script>
