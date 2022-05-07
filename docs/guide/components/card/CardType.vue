<template>
    <div class="container">
        <m-space direction="column" align="center" :size="[36, 0]">
            <m-space direction="column" align="center" size="large">
                <m-card type="elevated" :style="{ width: '370px' }" subtitle="From your recent favorites">
                    <template #title>
                        <div class="headline-medium" :style="{ marginBottom: '8px' }">
                            Play <br />
                            relaxing songs
                        </div>
                    </template>
                    <template #action>
                        <m-space justify="end" size="0">
                            <m-button>Get started</m-button>
                        </m-space>
                    </template>
                </m-card>
                <span class="button-name">1</span>
            </m-space>
            <m-space direction="column" align="center" size="large">
                <m-card type="filled" :style="{ width: '370px' }" subtitle="From your recent favorites">
                    <template #title>
                        <div class="headline-medium" :style="{ marginBottom: '8px' }">
                            Play <br />
                            relaxing songs
                        </div>
                    </template>
                    <template #action>
                        <m-space justify="end" size="0">
                            <m-button type="outlined">Get started</m-button>
                        </m-space>
                    </template>
                </m-card>
                <span class="button-name">2</span>
            </m-space>
            <m-space direction="column" align="center" size="large">
                <m-card type="outlined" :style="{ width: '370px' }" subtitle="From your recent favorites">
                    <template #title>
                        <div class="headline-medium" :style="{ marginBottom: '8px' }">
                            Play <br />
                            relaxing songs
                        </div>
                    </template>
                    <template #action>
                        <m-space justify="end" size="0">
                            <m-button type="filled-tonal">Get started</m-button>
                        </m-space>
                    </template>
                </m-card>
                <span class="button-name">3</span>
            </m-space>
        </m-space>
    </div>
</template>
<style lang="less" scoped>
.container {
    background: var(--md-color-surface);
    padding: 40px 0 40px;
    border-radius: 12px;
    display: grid;
    place-items: center;

    .button-name {
        border-radius: 12px;
        text-align: center;
        display: block;
        height: 24px;
        line-height: 24px;
        width: 24px;
        background: var(--md-color-on-surface);
        color: var(--md-color-surface);
    }
}
</style>
<script lang="ts" setup>
import MCard from '@packages/card'
import MSpace from '@packages/space'
import MButton from '@packages/button'
</script>
