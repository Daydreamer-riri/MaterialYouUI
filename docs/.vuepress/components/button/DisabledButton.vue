<template>
    <div class="col">
        <div class="item"><span>1</span></div>
        <div class="item"><span>2</span></div>
        <div class="item"><span>3</span></div>
        <div class="item"><span>4</span></div>
        <div class="item"><span>5</span></div>
        <div class="wrap">
            <my-button type="elevated" disabled>Confirm</my-button>
        </div>
        <div class="wrap">
            <my-button type="filled" disabled>Confirm</my-button>
        </div>
        <div class="wrap">
            <my-button type="filled-tonal" disabled>Disabled</my-button>
        </div>
        <div class="wrap">
            <my-button type="outlined" disabled>Confirm</my-button>
        </div>
        <div class="wrap">
            <my-button type="text" disabled>Disabled</my-button>
        </div>
    </div>
</template>
<style lang="less" scoped>
.col {
    display: grid;
    height: 100px;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(2, 50%);
    align-items: center;
    user-select: none;
    background: var(--md-color-surface);
    border-radius: 13px;
    padding: 40px 0 70px;
    border: 1px solid var(--md-color-outline);
}
.wrap {
    display: flex;
    justify-content: center;
}
.item,
my-button {
    flex: 20%;
}

.item {
    display: flex;
    justify-content: center;
}
.item span {
    border-radius: 12px;
    text-align: center;
    display: block;
    height: 24px;
    width: 24px;
    background: var(--md-color-on-surface);
    color: var(--md-color-surface);
}
</style>
<script>
import Button from '../../../../packages/button/Button.vue'

export default {
    name: 'BasicUse',
    components: {
        [Button.name]: Button,
    },
    setup() {},
}
</script>
