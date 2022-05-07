<template>
    <div class="container">
        <m-space justify="center">
            <m-fab>
                <template #icon>
                    <m-icon name="home" fill type="rounded"></m-icon>
                </template>
            </m-fab>
        </m-space>
    </div>
</template>
<script lang="ts" setup>
import MFab from '@packages/FAB'
import MSpace from '@packages/space'
import MIcon from '@packages/icon'
</script>
<style lang="less" scoped>
.container {
    padding: 80px;
    border-radius: 12px;
    background: var(--md-color-surface1);
}
</style>
