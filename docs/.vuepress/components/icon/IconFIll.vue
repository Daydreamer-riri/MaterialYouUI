<template>
    <div class="container exmaple-card">
        <div class="item">
            <div class="icon"><my-icon name="verified"></my-icon></div>
            <span class="icon-name">unfilled</span>
        </div>
        <div class="item">
            <div class="icon"><my-icon name="verified" fill></my-icon></div>
            <span class="icon-name">filled</span>
        </div>
        <div class="item">
            <div class="icon"><my-icon name="verified" stokeWidth="700"></my-icon></div>
            <span class="icon-name">stokeWidth-700</span>
        </div>
        <div class="item">
            <div class="icon"><my-icon name="verified" stokeWidth="200"></my-icon></div>
            <span class="icon-name">stokeWidth-200</span>
        </div>
    </div>
</template>

<script>
import MyIcon from '../../../../packages/icon/Icon.vue'
export default {
    name: 'IconSize',
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
