<template>
    <div class="container exmaple-card">
        <div class="item">
            <div class="icon"><m-icon-button name="add_circle" size="small"></m-icon-button></div>
            <span class="icon-name">small</span>
        </div>
        <div class="item">
            <div class="icon"><m-icon-button name="sort" size="medium"></m-icon-button></div>
            <span class="icon-name">medium</span>
        </div>
        <div class="item">
            <div class="icon"><m-icon-button name="menu_open" size="large" @click="handle"></m-icon-button></div>
            <span class="icon-name">large</span>
        </div>
    </div>
</template>

<script>
import MIconButton from '@packages/icon-button'
export default {
    name: 'IconSize',
    components: { MIconButton },
    setup() {
        const handle = function () {
            console.log('click')
        }
        return {
            handle,
        }
    },
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
</style>
