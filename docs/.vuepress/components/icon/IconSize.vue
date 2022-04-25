<template>
    <div class="container exmaple-card">
        <div class="item">
            <div class="icon"><my-icon name="add_circle" size="small"></my-icon></div>
            <span class="icon-name">small</span>
        </div>
        <div class="item">
            <div class="icon"><my-icon name="add_circle" size="medium"></my-icon></div>
            <span class="icon-name">medium</span>
        </div>
        <div class="item">
            <div class="icon"><my-icon name="add_circle" size="large"></my-icon></div>
            <span class="icon-name">large</span>
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
