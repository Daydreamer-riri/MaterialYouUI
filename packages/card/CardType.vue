<template>
    <div class="container">
        <m-space>
            <m-card type="elevated" :style="{}" subhead="From your recent favorites">
                <template #title>
                    <span class="title-large" :style="{ marginBottom: '8px' }">
                        Play <br />
                        relaxing songs
                    </span>
                </template>
                <template #action>
                    <m-space justify="end" size="0">
                        <m-button>Get started</m-button>
                    </m-space>
                </template>
            </m-card>
        </m-space>
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
import MSpace from '@packages/space'
import MButton from '@packages/button'
</script>
