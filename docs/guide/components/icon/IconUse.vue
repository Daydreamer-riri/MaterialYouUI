<template>
    <div class="container exmaple-card">
        <div class="item">
            <div class="icon"><m-icon name="search"></m-icon></div>
            <span class="icon-name">Search</span>
        </div>
        <div class="item">
            <div class="icon"><m-icon name="home"></m-icon></div>
            <span class="icon-name">Home</span>
        </div>
        <div class="item">
            <div class="icon"><m-icon name="settings"></m-icon></div>
            <span class="icon-name">Settings</span>
        </div>
        <div class="item">
            <div class="icon"><m-icon name="close"></m-icon></div>
            <span class="icon-name">Close</span>
        </div>
        <div class="item">
            <div class="icon"><m-icon name="menu"></m-icon></div>
            <span class="icon-name">Menu</span>
        </div>
    </div>
</template>

<script>
import MIcon from '../../../../packages/icon/Icon.vue'
export default {
    name: 'BasicUse',
    components: { MIcon },
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
    background: var(--md-color-surface2);
}
</style>
