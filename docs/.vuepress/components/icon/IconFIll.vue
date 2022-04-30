<template>
    <div class="container exmaple-card">
        <div class="item">
            <div class="icon"><m-icon name="verified"></m-icon></div>
            <span class="icon-name">unfilled</span>
        </div>
        <div class="item">
            <div class="icon"><m-icon name="verified" fill></m-icon></div>
            <span class="icon-name">filled</span>
        </div>
        <div class="item">
            <div class="icon"><m-icon name="verified" stokeWidth="700"></m-icon></div>
            <span class="icon-name">stokeWidth-700</span>
        </div>
        <div class="item">
            <div class="icon"><m-icon name="verified" stokeWidth="200"></m-icon></div>
            <span class="icon-name">stokeWidth-200</span>
        </div>
    </div>
</template>

<script>
import MIcon from '../../../../packages/icon/Icon.vue'
export default {
    name: 'IconSize',
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
