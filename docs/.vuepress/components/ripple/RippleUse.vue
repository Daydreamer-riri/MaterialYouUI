<script setup>
import vRipple from '@packages/ripple'
</script>

<template>
    <div class="container">
        <div class="ripple-example" v-ripple>点击</div>
    </div>
</template>

<style lang="less" scoped>
@import '@packages/styles/elevation.less';

.ripple-example {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 80%;
    color: var(--md-color-on-surface);
    background: var(--md-color-surface);
    user-select: none;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    transition: background-color 0.25s;
    border-radius: 13px;

    .md-elevation-z1;
}

.container {
    padding: 80px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--md-layer-surface-2), var(--md-color-surface);
}
</style>
