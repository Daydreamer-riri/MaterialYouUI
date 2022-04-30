<template>
    <div class="container">
        <m-space align="center" size="60" justify="space-around">
            <m-space direction="column" align="center" size="20">
                <m-fab name="edit"></m-fab>
                <span class="button-name">enabled</span>
            </m-space>
            <m-space direction="column" align="center" size="20">
                <m-fab name="edit" disabled></m-fab>
                <span class="button-name">disabled</span>
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
}
</style>
