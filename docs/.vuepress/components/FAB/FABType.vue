<template>
    <div class="container">
        <m-space align="center" size="60" justify="space-around">
            <m-space direction="column" align="center" size="40">
                <m-fab name="edit"></m-fab>
                <span class="button-name">1</span>
            </m-space>
            <m-space direction="column" align="center" size="40">
                <m-fab type="surface" name="edit"></m-fab>
                <span class="button-name">2</span>
            </m-space>
            <m-space direction="column" align="center" size="40">
                <m-fab type="secondary" name="edit"></m-fab>
                <span class="button-name">3</span>
            </m-space>
            <m-space direction="column" align="center" size="40">
                <m-fab type="tertiary" name="edit"></m-fab>
                <span class="button-name">4</span>
            </m-space>
        </m-space>
    </div>
</template>
<script lang="ts" setup>
import MFab from '@packages/FAB'
import MSpace from '@packages/space'
</script>
<style lang="less" scoped>
.container {
    padding: 80px;
    border-radius: 12px;
    background: var(--md-color-surface1);

    .button-name {
        border-radius: 12px;
        text-align: center;
        display: block;
        height: 24px;
        width: 24px;
        background: var(--md-color-on-surface);
        color: var(--md-color-surface);
    }
}
</style>
