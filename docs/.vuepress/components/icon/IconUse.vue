<template>
    <div class="container exmaple-card">
        <div class="item">
            <div class="icon"><my-icon name="search"></my-icon></div>
            <span class="icon-name">Search</span>
        </div>
        <div class="item">
            <div class="icon"><my-icon name="home"></my-icon></div>
            <span class="icon-name">Home</span>
        </div>
        <div class="item">
            <div class="icon"><my-icon name="settings"></my-icon></div>
            <span class="icon-name">Settings</span>
        </div>
        <div class="item">
            <div class="icon"><my-icon name="close"></my-icon></div>
            <span class="icon-name">Close</span>
        </div>
        <div class="item">
            <div class="icon"><my-icon name="menu"></my-icon></div>
            <span class="icon-name">Menu</span>
        </div>
    </div>
</template>

<script>
import MyIcon from '../../../../packages/icon/Icon.vue'
export default {
    name: 'BasicUse',
    components: { MyIcon },
}
</script>

<style lang="less" scoped>
@import '../styles/exmapleCard.less';

.container {
    display: flex;
    justify-content: space-around;
    padding: 24px;
}

.item {
    display: grid;
    width: 100px;
    height: 100px;
    border-radius: 13px;
    transition: background 0.1s linear;
    grid-template-rows: 3fr, 1fr;
    cursor: pointer;
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-name {
    text-align: center;
    display: block;
}

.item:hover {
    background: var(--md-color-surface-2);
}
</style>
