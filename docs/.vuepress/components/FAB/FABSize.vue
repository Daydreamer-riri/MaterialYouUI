<template>
    <div class="container">
        <m-space align="end" size="80" justify="center">
            <m-space direction="column" align="center" size="40">
                <m-fab type="tertiary" name="accessible_forward"></m-fab>
                <span class="button-name">1</span>
            </m-space>
            <m-space direction="column" align="center" size="44">
                <m-fab size="small" name="edit"></m-fab>
                <span class="button-name">2</span>
            </m-space>
            <m-space direction="column" align="center" size="20">
                <m-fab size="large" type="surface" name="palette"></m-fab>
                <span class="button-name">3</span>
            </m-space>
        </m-space>
    </div>
</template>
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
<script setup>
import MFab from '@packages/FAB'
import MSpace from '@packages/space'
</script>
